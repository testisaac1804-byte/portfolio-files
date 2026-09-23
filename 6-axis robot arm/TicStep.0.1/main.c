/**
  Generated Main Source File

  Company:
    Microchip Technology Inc.

  File Name:
    main.c

  Summary:
    This is the main file generated using PIC10 / PIC12 / PIC16 / PIC18 MCUs

  Description:
    This header file provides implementations for driver APIs for all modules selected in the GUI.
    Generation Information :
        Product Revision  :  PIC10 / PIC12 / PIC16 / PIC18 MCUs - 1.65.2
        Device            :  PIC18F25K50
        Driver Version    :  2.00
*/

/*
    (c) 2018 Microchip Technology Inc. and its subsidiaries. 
    
    Subject to your compliance with these terms, you may use Microchip software and any 
    derivatives exclusively with Microchip products. It is your responsibility to comply with third party 
    license terms applicable to your use of third party software (including open source software) that 
    may accompany Microchip software.
    
    THIS SOFTWARE IS SUPPLIED BY MICROCHIP "AS IS". NO WARRANTIES, WHETHER 
    EXPRESS, IMPLIED OR STATUTORY, APPLY TO THIS SOFTWARE, INCLUDING ANY 
    IMPLIED WARRANTIES OF NON-INFRINGEMENT, MERCHANTABILITY, AND FITNESS 
    FOR A PARTICULAR PURPOSE.
    
    IN NO EVENT WILL MICROCHIP BE LIABLE FOR ANY INDIRECT, SPECIAL, PUNITIVE, 
    INCIDENTAL OR CONSEQUENTIAL LOSS, DAMAGE, COST OR EXPENSE OF ANY KIND 
    WHATSOEVER RELATED TO THE SOFTWARE, HOWEVER CAUSED, EVEN IF MICROCHIP 
    HAS BEEN ADVISED OF THE POSSIBILITY OR THE DAMAGES ARE FORESEEABLE. TO 
    THE FULLEST EXTENT ALLOWED BY LAW, MICROCHIP'S TOTAL LIABILITY ON ALL 
    CLAIMS IN ANY WAY RELATED TO THIS SOFTWARE WILL NOT EXCEED THE AMOUNT 
    OF FEES, IF ANY, THAT YOU HAVE PAID DIRECTLY TO MICROCHIP FOR THIS 
    SOFTWARE.
*/

#include "mcc_generated_files/mcc.h"

// ***obs*** set my_address = 0x01, my_group_address = 0x80, group_leader = 0 (false)
// ***obs*** __EEPROM_DATA(0x01, 0x80, 0, 0, 0, 0, 0, 0);  

//set EEPROM default my_address = 0x01 (group_address and group leader not stored)
__EEPROM_DATA(0x01, 0, 0, 0, 0, 0, 0, 0);  

extern volatile uint16_t PathBuffer[];
extern volatile uint8_t PathHead;
extern volatile uint8_t PathTail;
extern volatile int32_t PositionCounter;
extern bool dirbit;

/*
 Communications Routines
 */
uint8_t cmd_buf[20];

#define WAIT_HEADER 0
#define WAIT_ADDR 1
#define WAIT_CMD 2
#define WAIT_DATA 3
#define WAIT_CKSUM 4
#define CMD_PKT_READY 5
uint8_t rcv_state = WAIT_HEADER;

#define SEND_IDLE 0
#define SEND_STAT 1
#define SEND_DATA 2
#define SEND_CKSUM 3
uint8_t send_state = SEND_IDLE;

uint8_t datacount = 0, numdat;  //used for both rcv and sending packets
uint8_t my_address, my_group_address, group_leader;
bool cksum_err;
uint8_t cksum_calc;
uint8_t run_current = 30, hold_current = 30;

#define ENABLE_LIMSTOP 0x01
#define LIMITS_ACTIVE_HI 0x02
#define LIMSTOP_MOTOROFF 0x04
uint8_t limit_mode = 0;

//GET_CMD: State machine for receiving a command packet
void get_cmd(void)
{
   uint8_t i;
   
   if (EUSART1_is_rx_ready())  //on any input, disable the transmitter
   {
       TXSTA1bits.TXEN = 0;  //Disable transmit
       send_state = SEND_IDLE; //reset send process
   }
   else return;  //punt if no new data
   
   switch (rcv_state) {
        case WAIT_HEADER:
            if (EUSART1_Read() == 0xAA) rcv_state = WAIT_ADDR;
            break;
        
        case WAIT_ADDR:
            cmd_buf[0] = EUSART1_Read();  //put address in cmd_buf[0]
            cksum_calc = cmd_buf[0];  //initialize cksum
            rcv_state = WAIT_CMD;
            break;
            
        case WAIT_CMD:
            cmd_buf[1] = EUSART1_Read();  //put cmd in cmd_buf[1]
            numdat = (cmd_buf[1]>>4) & 0x0F;  //num additional bytes is in upper nibble of cmd byte
            cksum_calc += cmd_buf[1];  //add cmd byte to cksum
            if (numdat) 
            {
                rcv_state = WAIT_DATA;
                datacount = 0;
            }
            else rcv_state = WAIT_CKSUM;
            break;
            
       case WAIT_DATA:
           datacount++;
           cmd_buf[1+datacount] = EUSART1_Read();  //put data in cmd_buf[2,3,...]
           cksum_calc += cmd_buf[1+datacount];  //add data bytes to cksum
           if (datacount == numdat) rcv_state = WAIT_CKSUM;
           break;
           
       case WAIT_CKSUM:
           cmd_buf[2+datacount] = EUSART1_Read();  //put cksum after data
           if (cksum_calc == cmd_buf[2+datacount]) cksum_err = false;
           else cksum_err = true;
           rcv_state = CMD_PKT_READY;
           break;
    }  //END switch
}

/*  current levels fro Tic T500 board
0	0 mA
1	1 mA
2	174 mA
3	343 mA
4	495 mA
5	634 mA
6	762 mA
7	880 mA
8	990 mA
9	1092 mA
10	1189 mA
11	1281 mA
12	1368 mA
13	1452 mA
14	1532 mA
15	1611 mA
16	1687 mA
17	1762 mA
18	1835 mA
19	1909 mA
20	1982 mA
21	2056 mA
22	2131 mA
23	2207 mA
24	2285 mA
25	2366 mA
26	2451 mA
27	2540 mA
28	2634 mA
29	2734 mA
30	2843 mA
31	2962 mA
32	3093 mA
*/

//Defined command values:
#define RESET_POS 0x00      //no parameters
#define SET_ADDR 0x01       //my_address, group address, group_leader (1 or 0)
#define START_MOTION 0x05   //no parameters
#define SET_CURRENT 0x06    //current level 0-31 (0=off)
#define STOP_MOTION 0x07    //driver_on_off (1 or 0)
#define SET_MICROSTEPPING 0x08  //ms2:ms1
#define SET_LIMIT_MODE 0x09  //limit_mode
#define SINGLE_STEP 0x0B    //direction (1 or 0)
#define WRITE_REG 0x0C      //addr_lo, addr_hi, value
#define ADD_PATHPOINT 0x0D  //2 to 14 timer pairs, lsbyt first
#define NOOP 0x0E           //no parameters
#define HARD_RESET 0x0F     //no parameters

void stop_motion(void)
{
    TMR1_StopTimer(); //stop step timer
    TMR0_StopTimer(); //stop path timer
    LED_SetHigh();  //turn off LED when stopped
    DAC_SetOutput(hold_current);  //set to holding current
    PathHead = 0;
    PathTail = 0;
}

//PROCESS_CMD: Process the new cmd packet:
void process_cmd(void)
{
    uint8_t command, ndata, i, temp_cur;
    uint16_t mem_addr;
    
    command = cmd_buf[1] & 0x0F;
    ndata = (cmd_buf[1]>>4)  & 0x0F;
    
    switch (command) {
        case RESET_POS:  //reset position
            PositionCounter = 0;  //Double write in case counter modified by ISR
            if (PositionCounter) PositionCounter = 0;
            break;
            
        case SET_ADDR:  //Set address - do not execute while moving (EEWrite delay)
            if (my_address != cmd_buf[2]) //if changing my_address, store it in EEPROM
            {
                my_address = cmd_buf[2];
                DATAEE_WriteByte(0, my_address);
            }
            my_group_address = cmd_buf[3];  //update group_address
            group_leader = cmd_buf[4];   //0 = not a leader, 1 = leader
            // ***obs*** DATAEE_WriteByte(1, my_group_address);
            // ***obs*** DATAEE_WriteByte(2, group_leader);
            break;
            
        case START_MOTION: //start motion
            if (T0CONbits.TMR0ON) break;  //punt if already moving
            DAC_SetOutput(run_current);  //set to running current
            ENABLE_SetLow();    //Enable the drivers
            TMR0H = 0xFF;  //load timer to generate int immediately when turned on
            TMR0L = 0xFF;
            TMR0_StartTimer(); //start path timer
            LED_SetLow();  //turn on LED when moving
            break;
                    
        case SET_CURRENT: //Set hold and run current levels
            hold_current = 31 - (cmd_buf[2]&0x1F);
            run_current = 31 - (cmd_buf[3]&0x1F);
            if (T0CONbits.TMR0ON) DAC_SetOutput(run_current);
            else DAC_SetOutput(hold_current); 
            break;       
            
        case STOP_MOTION: //stop motion
            stop_motion();
            //TMR1_StopTimer(); //stop step timer
            //TMR0_StopTimer(); //stop path timer
            //LED_SetHigh();  //turn off LED when stopped
            //DAC_SetOutput(hold_current);  //set to holding current
            //PathHead = 0;
            //PathTail = 0;
            if ( ndata && (cmd_buf[2] & 0x01) ) ENABLE_SetLow(); //Bit 0 of data byte enables/disables the driver
            else ENABLE_SetHigh();    //Disable the driver
            break;

        case SET_MICROSTEPPING: //Set microstepping rate (from default of 8x)
            if (cmd_buf[2] & 0x01) MS1_SetHigh();
            else MS1_SetLow();
            if (cmd_buf[2] & 0x02) MS2_SetHigh();
            else MS2_SetLow();
            break;
            
        case SET_LIMIT_MODE: //stop motion
            limit_mode = cmd_buf[2];
            break;

        case SINGLE_STEP:  //take a single step
            temp_cur = VREFCON2;  //temp save current level value
            DAC_SetOutput(run_current);  //set to running current
            __delay_ms(1); //allow current to settle
            if (cmd_buf[2])  //if cmd_buf!=0, move fwd
            {
                DIR_SetHigh(); //set direction bit based on LSB 
                STEP_SetHigh();  //Raise step pin***
                PositionCounter++;
                asm("nop");  //Add nop to ensure STEP is HI for 1us (12 instruction cycles)
            }
            else //if cmd_buf==0, move fwd
            {
                DIR_SetLow();
                STEP_SetHigh();  //Raise step pin
                PositionCounter--;
            }
            STEP_SetLow();  //Lower step pin
            __delay_ms(1); //allow step to settle
            DAC_SetOutput(temp_cur);  //set to prev current level
            break;
          
        case WRITE_REG:  //write to data memory or SFR register (use with caution!)
            mem_addr = *((uint16_t *)(cmd_buf+2));
            *((char *)mem_addr) = cmd_buf[4];
            break;
                   
        case ADD_PATHPOINT: //Add path point
            for (i=2; i<(ndata+2); i+=2)
            {
                PathBuffer[PathHead] = *((uint16_t *)(cmd_buf+i));
                PathHead++;
                if (PathHead == PATH_SIZE) PathHead = 0;
            }
            break;
            
        case NOOP:  //Nop
            break;
            
        case HARD_RESET:  //Reset
            asm("reset");
            break;
    }

}

//SEND_STATUS: State machine for sending status packet
//status packet consist of status byte, position counter (int32), and cksum
//MSB of status byte is the cksum error flag, and lower 7 bits is the number of 
//pathpoints in the buffer
void send_status(void)
{
    uint8_t statbyte;
    
    if (send_state == SEND_IDLE) return;  //punt if nothing to send
    
    switch (send_state){
        case SEND_STAT:  //set up status packet and serial port for sending
            TXSTA1bits.TXEN = 1;  //enable transmit
            
            statbyte = 0;
            if (T0CONbits.TMR0ON) statbyte |= 0x01; //set bit 0 if moving
            if (FAULT_GetValue()) statbyte |= 0x02; //set bit 1 if driver fault
            if (LIM1_GetValue()) statbyte |= 0x04; //set bit 2 if Limit1
            if (LIM2_GetValue()) statbyte |= 0x08; //set bit 3 if Limit2
            if (cksum_err) statbyte |= 0x80;  //set bit 7 if cksum error
            cksum_err = false;  //clear cksum error flag

            cmd_buf[0] = PathHead - PathTail;  //get number of points in buffer and put in data byte 0
            if (cmd_buf[0] & 0x80) cmd_buf[0] += PATH_SIZE; //take care of wraparound
            
            *((uint32_t *)(cmd_buf+1)) = PositionCounter;  //load cmd_buf[1] with PositionCounter
            //double read PositionCounter to make sure it hasn't changed inside ISR
            if (*((uint32_t *)(cmd_buf+1)) != PositionCounter) *((uint32_t *)(cmd_buf+1)) = PositionCounter;
                       
            cksum_calc = statbyte; //initialize cksum for status data pkt to statbyte
            TXREG1 = statbyte;  //send statbyte to UART
            datacount = 0;
            numdat = 5;
            send_state = SEND_DATA;
           break;
            
        case SEND_DATA:
            if (!PIR1bits.TX1IF) break;  //punt if not ready to send
            cksum_calc += cmd_buf[datacount];  //tally up cksum
            TXREG1 = cmd_buf[datacount];  //send data
            datacount++;
            if (datacount == numdat) send_state = SEND_CKSUM;
            break;
            
        case SEND_CKSUM:
            if (!PIR1bits.TX1IF) break;  //punt if not ready to send
            TXREG1 = cksum_calc;  //send cksum
            send_state = SEND_IDLE;
            break;
            
    }  //END Switch
          
}

/*
                         Main application
 */

void main(void)
{
    int i;
    
    // Initialize the device
    SYSTEM_Initialize();
   
    TMR0_StopTimer();  //start with step timer and path timer off
    INTCONbits.TMR0IF = 0;  //clear int flags as well
    TMR1_StopTimer();
    PIR1bits.TMR1IF = 0;
    
    // Enable the Global Interrupts
    INTERRUPT_GlobalInterruptEnable();

    //Set bits to initialize the stepper driver
    MS1_SetHigh();  //select 8x microstepping
    MS2_SetHigh();
    SLEEP_SetHigh();    //take out of sleep mode
    STEP_SetLow();      //make sure STEP starts low
    DAC_SetOutput(hold_current);  //29 = 174ma?
    ENABLE_SetHigh();    //Disable the drivers
    
    // Enable the Peripheral Interrupts
    INTERRUPT_PeripheralInterruptEnable();
   
    //Retrieve address info from EEPROM
    my_address = DATAEE_ReadByte(0x00);  //my_address stored in eeprom location 0x00
    // ***obs*** my_group_address = DATAEE_ReadByte(0x01);  //my__group_address stored in eeprom location 0x01
    my_group_address = 128;  //always default to group address of 128
    // ***obs*** group_leader = DATAEE_ReadByte(0x02);  //group_leader stored in eeprom location 0x02
    group_leader = 0;  //always default to not a group leader
    
    // ***********Simulator mode test code*********
    ////test fill path buffer
    //for (i=0; i<100; i++) PathBuffer[i] = 0xD120;
    //PathTail = 0;
    //PathHead = 100;
    //rcv_state = CMD_PKT_READY;
    //cmd_buf[0] = 0x01; 
    //cmd_buf[1] = 0x05;    
    ////
    
    // ******Main while loop*******
    while (1)
    {
        
        get_cmd();  //process incoming command data
                
        if (rcv_state == CMD_PKT_READY) 
        {
            if ( !cksum_err && ((cmd_buf[0] == my_address) || 
                                (cmd_buf[0] == my_group_address) || 
                                (cmd_buf[0] == 0xFF)) ) process_cmd();
            rcv_state = WAIT_HEADER;
            if ( (cmd_buf[0] == my_address) ||
                 ((cmd_buf[0] == my_group_address) && group_leader)   )
            send_state = SEND_STAT;
        }
        
        send_status();
        
        //Act on Limit switches
        if (limit_mode & ENABLE_LIMSTOP)
            if ( ((limit_mode & LIMITS_ACTIVE_HI) && 
                  ((dirbit && LIM1_GetValue())  || (!dirbit && LIM2_GetValue()))) ||
                 (!(limit_mode & LIMITS_ACTIVE_HI) && 
                  ((dirbit && !LIM1_GetValue())  || (!dirbit && !LIM2_GetValue())))
               )
            {
                stop_motion();
                if ( limit_mode & LIMSTOP_MOTOROFF ) ENABLE_SetHigh(); 
            }
         
    }  //END while(1)
}  //END main()
/**
 End of File
*/
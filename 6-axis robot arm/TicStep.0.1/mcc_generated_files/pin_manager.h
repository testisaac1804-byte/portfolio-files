/**
  @Generated Pin Manager Header File

  @Company:
    Microchip Technology Inc.

  @File Name:
    pin_manager.h

  @Summary:
    This is the Pin Manager file generated using PIC10 / PIC12 / PIC16 / PIC18 MCUs

  @Description
    This header file provides APIs for driver for .
    Generation Information :
        Product Revision  :  PIC10 / PIC12 / PIC16 / PIC18 MCUs - 1.65.2
        Device            :  PIC18F25K50
        Driver Version    :  2.11
    The generated drivers are tested against the following:
        Compiler          :  XC8 1.45
        MPLAB 	          :  MPLAB X 4.15	
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

#ifndef PIN_MANAGER_H
#define PIN_MANAGER_H

#define INPUT   1
#define OUTPUT  0

#define HIGH    1
#define LOW     0

#define ANALOG      1
#define DIGITAL     0

#define PULL_UP_ENABLED      1
#define PULL_UP_DISABLED     0

// get/set ENABLE aliases
#define ENABLE_TRIS                 TRISAbits.TRISA1
#define ENABLE_LAT                  LATAbits.LATA1
#define ENABLE_PORT                 PORTAbits.RA1
#define ENABLE_ANS                  ANSELAbits.ANSA1
#define ENABLE_SetHigh()            do { LATAbits.LATA1 = 1; } while(0)
#define ENABLE_SetLow()             do { LATAbits.LATA1 = 0; } while(0)
#define ENABLE_Toggle()             do { LATAbits.LATA1 = ~LATAbits.LATA1; } while(0)
#define ENABLE_GetValue()           PORTAbits.RA1
#define ENABLE_SetDigitalInput()    do { TRISAbits.TRISA1 = 1; } while(0)
#define ENABLE_SetDigitalOutput()   do { TRISAbits.TRISA1 = 0; } while(0)
#define ENABLE_SetAnalogMode()      do { ANSELAbits.ANSA1 = 1; } while(0)
#define ENABLE_SetDigitalMode()     do { ANSELAbits.ANSA1 = 0; } while(0)

// get/set RA2 procedures
#define RA2_SetHigh()            do { LATAbits.LATA2 = 1; } while(0)
#define RA2_SetLow()             do { LATAbits.LATA2 = 0; } while(0)
#define RA2_Toggle()             do { LATAbits.LATA2 = ~LATAbits.LATA2; } while(0)
#define RA2_GetValue()              PORTAbits.RA2
#define RA2_SetDigitalInput()    do { TRISAbits.TRISA2 = 1; } while(0)
#define RA2_SetDigitalOutput()   do { TRISAbits.TRISA2 = 0; } while(0)
#define RA2_SetAnalogMode()         do { ANSELAbits.ANSA2 = 1; } while(0)
#define RA2_SetDigitalMode()        do { ANSELAbits.ANSA2 = 0; } while(0)

// get/set LIM1 aliases
#define LIM1_TRIS                 TRISBbits.TRISB0
#define LIM1_LAT                  LATBbits.LATB0
#define LIM1_PORT                 PORTBbits.RB0
#define LIM1_WPU                  WPUBbits.WPUB0
#define LIM1_ANS                  ANSELBbits.ANSB0
#define LIM1_SetHigh()            do { LATBbits.LATB0 = 1; } while(0)
#define LIM1_SetLow()             do { LATBbits.LATB0 = 0; } while(0)
#define LIM1_Toggle()             do { LATBbits.LATB0 = ~LATBbits.LATB0; } while(0)
#define LIM1_GetValue()           PORTBbits.RB0
#define LIM1_SetDigitalInput()    do { TRISBbits.TRISB0 = 1; } while(0)
#define LIM1_SetDigitalOutput()   do { TRISBbits.TRISB0 = 0; } while(0)
#define LIM1_SetPullup()          do { WPUBbits.WPUB0 = 1; } while(0)
#define LIM1_ResetPullup()        do { WPUBbits.WPUB0 = 0; } while(0)
#define LIM1_SetAnalogMode()      do { ANSELBbits.ANSB0 = 1; } while(0)
#define LIM1_SetDigitalMode()     do { ANSELBbits.ANSB0 = 0; } while(0)

// get/set LIM2 aliases
#define LIM2_TRIS                 TRISBbits.TRISB1
#define LIM2_LAT                  LATBbits.LATB1
#define LIM2_PORT                 PORTBbits.RB1
#define LIM2_WPU                  WPUBbits.WPUB1
#define LIM2_ANS                  ANSELBbits.ANSB1
#define LIM2_SetHigh()            do { LATBbits.LATB1 = 1; } while(0)
#define LIM2_SetLow()             do { LATBbits.LATB1 = 0; } while(0)
#define LIM2_Toggle()             do { LATBbits.LATB1 = ~LATBbits.LATB1; } while(0)
#define LIM2_GetValue()           PORTBbits.RB1
#define LIM2_SetDigitalInput()    do { TRISBbits.TRISB1 = 1; } while(0)
#define LIM2_SetDigitalOutput()   do { TRISBbits.TRISB1 = 0; } while(0)
#define LIM2_SetPullup()          do { WPUBbits.WPUB1 = 1; } while(0)
#define LIM2_ResetPullup()        do { WPUBbits.WPUB1 = 0; } while(0)
#define LIM2_SetAnalogMode()      do { ANSELBbits.ANSB1 = 1; } while(0)
#define LIM2_SetDigitalMode()     do { ANSELBbits.ANSB1 = 0; } while(0)

// get/set LED aliases
#define LED_TRIS                 TRISBbits.TRISB2
#define LED_LAT                  LATBbits.LATB2
#define LED_PORT                 PORTBbits.RB2
#define LED_WPU                  WPUBbits.WPUB2
#define LED_ANS                  ANSELBbits.ANSB2
#define LED_SetHigh()            do { LATBbits.LATB2 = 1; } while(0)
#define LED_SetLow()             do { LATBbits.LATB2 = 0; } while(0)
#define LED_Toggle()             do { LATBbits.LATB2 = ~LATBbits.LATB2; } while(0)
#define LED_GetValue()           PORTBbits.RB2
#define LED_SetDigitalInput()    do { TRISBbits.TRISB2 = 1; } while(0)
#define LED_SetDigitalOutput()   do { TRISBbits.TRISB2 = 0; } while(0)
#define LED_SetPullup()          do { WPUBbits.WPUB2 = 1; } while(0)
#define LED_ResetPullup()        do { WPUBbits.WPUB2 = 0; } while(0)
#define LED_SetAnalogMode()      do { ANSELBbits.ANSB2 = 1; } while(0)
#define LED_SetDigitalMode()     do { ANSELBbits.ANSB2 = 0; } while(0)

// get/set FAULT aliases
#define FAULT_TRIS                 TRISBbits.TRISB3
#define FAULT_LAT                  LATBbits.LATB3
#define FAULT_PORT                 PORTBbits.RB3
#define FAULT_WPU                  WPUBbits.WPUB3
#define FAULT_ANS                  ANSELBbits.ANSB3
#define FAULT_SetHigh()            do { LATBbits.LATB3 = 1; } while(0)
#define FAULT_SetLow()             do { LATBbits.LATB3 = 0; } while(0)
#define FAULT_Toggle()             do { LATBbits.LATB3 = ~LATBbits.LATB3; } while(0)
#define FAULT_GetValue()           PORTBbits.RB3
#define FAULT_SetDigitalInput()    do { TRISBbits.TRISB3 = 1; } while(0)
#define FAULT_SetDigitalOutput()   do { TRISBbits.TRISB3 = 0; } while(0)
#define FAULT_SetPullup()          do { WPUBbits.WPUB3 = 1; } while(0)
#define FAULT_ResetPullup()        do { WPUBbits.WPUB3 = 0; } while(0)
#define FAULT_SetAnalogMode()      do { ANSELBbits.ANSB3 = 1; } while(0)
#define FAULT_SetDigitalMode()     do { ANSELBbits.ANSB3 = 0; } while(0)

// get/set SLEEP aliases
#define SLEEP_TRIS                 TRISBbits.TRISB4
#define SLEEP_LAT                  LATBbits.LATB4
#define SLEEP_PORT                 PORTBbits.RB4
#define SLEEP_WPU                  WPUBbits.WPUB4
#define SLEEP_ANS                  ANSELBbits.ANSB4
#define SLEEP_SetHigh()            do { LATBbits.LATB4 = 1; } while(0)
#define SLEEP_SetLow()             do { LATBbits.LATB4 = 0; } while(0)
#define SLEEP_Toggle()             do { LATBbits.LATB4 = ~LATBbits.LATB4; } while(0)
#define SLEEP_GetValue()           PORTBbits.RB4
#define SLEEP_SetDigitalInput()    do { TRISBbits.TRISB4 = 1; } while(0)
#define SLEEP_SetDigitalOutput()   do { TRISBbits.TRISB4 = 0; } while(0)
#define SLEEP_SetPullup()          do { WPUBbits.WPUB4 = 1; } while(0)
#define SLEEP_ResetPullup()        do { WPUBbits.WPUB4 = 0; } while(0)
#define SLEEP_SetAnalogMode()      do { ANSELBbits.ANSB4 = 1; } while(0)
#define SLEEP_SetDigitalMode()     do { ANSELBbits.ANSB4 = 0; } while(0)

// get/set MS2 aliases
#define MS2_TRIS                 TRISBbits.TRISB6
#define MS2_LAT                  LATBbits.LATB6
#define MS2_PORT                 PORTBbits.RB6
#define MS2_WPU                  WPUBbits.WPUB6
#define MS2_SetHigh()            do { LATBbits.LATB6 = 1; } while(0)
#define MS2_SetLow()             do { LATBbits.LATB6 = 0; } while(0)
#define MS2_Toggle()             do { LATBbits.LATB6 = ~LATBbits.LATB6; } while(0)
#define MS2_GetValue()           PORTBbits.RB6
#define MS2_SetDigitalInput()    do { TRISBbits.TRISB6 = 1; } while(0)
#define MS2_SetDigitalOutput()   do { TRISBbits.TRISB6 = 0; } while(0)
#define MS2_SetPullup()          do { WPUBbits.WPUB6 = 1; } while(0)
#define MS2_ResetPullup()        do { WPUBbits.WPUB6 = 0; } while(0)

// get/set MS1 aliases
#define MS1_TRIS                 TRISBbits.TRISB7
#define MS1_LAT                  LATBbits.LATB7
#define MS1_PORT                 PORTBbits.RB7
#define MS1_WPU                  WPUBbits.WPUB7
#define MS1_SetHigh()            do { LATBbits.LATB7 = 1; } while(0)
#define MS1_SetLow()             do { LATBbits.LATB7 = 0; } while(0)
#define MS1_Toggle()             do { LATBbits.LATB7 = ~LATBbits.LATB7; } while(0)
#define MS1_GetValue()           PORTBbits.RB7
#define MS1_SetDigitalInput()    do { TRISBbits.TRISB7 = 1; } while(0)
#define MS1_SetDigitalOutput()   do { TRISBbits.TRISB7 = 0; } while(0)
#define MS1_SetPullup()          do { WPUBbits.WPUB7 = 1; } while(0)
#define MS1_ResetPullup()        do { WPUBbits.WPUB7 = 0; } while(0)

// get/set DIR aliases
#define DIR_TRIS                 TRISCbits.TRISC0
#define DIR_LAT                  LATCbits.LATC0
#define DIR_PORT                 PORTCbits.RC0
#define DIR_SetHigh()            do { LATCbits.LATC0 = 1; } while(0)
#define DIR_SetLow()             do { LATCbits.LATC0 = 0; } while(0)
#define DIR_Toggle()             do { LATCbits.LATC0 = ~LATCbits.LATC0; } while(0)
#define DIR_GetValue()           PORTCbits.RC0
#define DIR_SetDigitalInput()    do { TRISCbits.TRISC0 = 1; } while(0)
#define DIR_SetDigitalOutput()   do { TRISCbits.TRISC0 = 0; } while(0)

// get/set STEP aliases
#define STEP_TRIS                 TRISCbits.TRISC2
#define STEP_LAT                  LATCbits.LATC2
#define STEP_PORT                 PORTCbits.RC2
#define STEP_ANS                  ANSELCbits.ANSC2
#define STEP_SetHigh()            do { LATCbits.LATC2 = 1; } while(0)
#define STEP_SetLow()             do { LATCbits.LATC2 = 0; } while(0)
#define STEP_Toggle()             do { LATCbits.LATC2 = ~LATCbits.LATC2; } while(0)
#define STEP_GetValue()           PORTCbits.RC2
#define STEP_SetDigitalInput()    do { TRISCbits.TRISC2 = 1; } while(0)
#define STEP_SetDigitalOutput()   do { TRISCbits.TRISC2 = 0; } while(0)
#define STEP_SetAnalogMode()      do { ANSELCbits.ANSC2 = 1; } while(0)
#define STEP_SetDigitalMode()     do { ANSELCbits.ANSC2 = 0; } while(0)

// get/set RC7 procedures
#define RC7_SetHigh()            do { LATCbits.LATC7 = 1; } while(0)
#define RC7_SetLow()             do { LATCbits.LATC7 = 0; } while(0)
#define RC7_Toggle()             do { LATCbits.LATC7 = ~LATCbits.LATC7; } while(0)
#define RC7_GetValue()              PORTCbits.RC7
#define RC7_SetDigitalInput()    do { TRISCbits.TRISC7 = 1; } while(0)
#define RC7_SetDigitalOutput()   do { TRISCbits.TRISC7 = 0; } while(0)
#define RC7_SetAnalogMode()         do { ANSELCbits.ANSC7 = 1; } while(0)
#define RC7_SetDigitalMode()        do { ANSELCbits.ANSC7 = 0; } while(0)

/**
   @Param
    none
   @Returns
    none
   @Description
    GPIO and peripheral I/O initialization
   @Example
    PIN_MANAGER_Initialize();
 */
void PIN_MANAGER_Initialize (void);

/**
 * @Param
    none
 * @Returns
    none
 * @Description
    Interrupt on Change Handling routine
 * @Example
    PIN_MANAGER_IOC();
 */
void PIN_MANAGER_IOC(void);



#endif // PIN_MANAGER_H
/**
 End of File
*/
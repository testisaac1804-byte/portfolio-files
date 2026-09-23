// //---------------------------------------------------------------------------

#include <vcl.h>
#pragma hdrstop

#include <stdio.h>
#include <math.h>
#include "main.h"

#include "sio_util.h"
//---------------------------------------------------------------------------
#pragma package(smart_init)
#pragma link "Joystick"
#pragma resource "*.dfm"
TMainForm *MainForm;
//---------------------------------------------------------------------------
//Defines:
#define byte unsigned char

//#define ROBOTARM
//---------------------------------------------------------------------------
//Function prototypes:
void vel_mode_update(double goalvel);
void pos_mode_update(int goalpos);
void multiaxis_update(void);

//---------------------------------------------------------------------------
//Globals:
typedef struct TICMOD {
                  byte hold_cur;
                  byte run_cur;
                  byte lim_mode;
                  byte microstep;
                  int step_res;
                  double accel;
                  double max_speed;
                  double min_pos;
                  double max_pos;
                  byte group_addr;
                  bool group_leader;
                  int cur_pos;
                  unsigned short int path[7];
                  int lastvel;  //value of last path velocity sent to module
                  double flastvel;
                  int lastpos;  //value of last path position sent to module (sum of vel values)
                  double flastpos;
                  double patherr;  //error in the number of steps from requested steps
		} ticmod;

ticmod protomod = {1,                    //hold current
                   1,                    //run current
                   0,                    //limit mode
                   3,                    //microstep value
                   200,                  //step resolution
                   1.6 /*150 RPM/s*/,    //acceleration
                   160 /*300 RPM*/,      //max speed
                   -1000,                //minimum position
                   1000,                 //maximum position
                   128,                  //group address
                   false,                //group leader
                   0,                    //current position
                   {0},                  //path data
                   0,                    //last velocity in path
                   0.0,                  //float last vel
                   0,                    //last postion in path
                   0.0,                  //float last pos
                   0.0};                  //path error

#ifdef ROBOTARM
ticmod mod[11] = {
                  {0,                    //hold current    //axis 0  - dummy values
                   6,                    //run current
                   0,                    //limit mode
                   3,                    //microstep value
                   200,                  //step resolution
                   1.6 /*150 RPM/s*/,    //acceleration
                   160 /*300 RPM*/,      //max speed
                   -1000,                //minimum position
                   1000,                 //maximum position
                   128,                  //group address
                   false,                //group leader
                   0,                    //current position
                   {0},                  //path data
                   0,                    //last velocity in path
                   0.0,                  //float last vel
                   0,                    //last postion in path
                   0.0,                  //float last pos
                   0.0},                  //path error

                  {0,                    //hold current    //axis 1
                   6,                    //run current
                   0,                    //limit mode
                   3,                    //microstep value
                   200,                  //step resolution
                   6.4 /*600 RPM/s*/,    //acceleration
                   100 /*200 RPM*/,      //max speed
                   -20000,                //minimum position
                   20000,                 //maximum position
                   128,                  //group address
                   false,                //group leader
                   0,                    //current position
                   {0},                  //path data
                   0,                    //last velocity in path
                   0.0,                  //float last vel
                   0,                    //last postion in path
                   0.0,                  //float last pos
                   0.0},                  //path error

                  {0,                    //hold current    //axis 2
                   9,                    //run current
                   0,                    //limit mode
                   3,                    //microstep value
                   200,                  //step resolution
                   6.4 /*600 RPM/s*/,    //acceleration
                   100 /*200 RPM*/,      //max speed
                   -7000,                //minimum position
                   14000,                 //maximum position
                   128,                  //group address
                   false,                //group leader
                   0,                    //current position
                   {0},                  //path data
                   0,                    //last velocity in path
                   0.0,                  //float last vel
                   0,                    //last postion in path
                   0.0,                  //float last pos
                   0.0},                  //path error

                  {0,                    //hold current    //axis 3
                   2,                    //run current
                   0,                    //limit mode
                   3,                    //microstep value
                   200,                  //step resolution
                   6.4 /*600 RPM/s*/,    //acceleration
                   100 /*200 RPM*/,      //max speed
                   -25000,                //minimum position
                   4000,                 //maximum position
                   128,                  //group address
                   false,                //group leader
                   0,                    //current position
                   {0},                  //path data
                   0,                    //last velocity in path
                   0.0,                  //float last vel
                   0,                    //last postion in path
                   0.0,                  //float last pos
                   0.0},                  //path error


                  {0,                    //hold current    //axis 4
                   2,                    //run current
                   0,                    //limit mode
                   3,                    //microstep value
                   48,                  //step resolution
                   1.5 /*600 RPM/s*/,    //acceleration
                   24 /*200 RPM*/,      //max speed
                   -5500,                //minimum position
                   4500,                 //maximum position
                   128,                  //group address
                   false,                //group leader
                   0,                    //current position
                   {0},                  //path data
                   0,                    //last velocity in path
                   0.0,                  //float last vel
                   0,                    //last postion in path
                   0.0,                  //float last pos
                   0.0},                  //path error

                  {0,                    //hold current    //axis 5
                   2,                    //run current
                   0,                    //limit mode
                   3,                    //microstep value
                   48,                  //step resolution
                   1.5 /*600 RPM/s*/,    //acceleration
                   24 /*200 RPM*/,      //max speed
                   -4000,                //minimum position
                   11000,                 //maximum position
                   128,                  //group address
                   false,                //group leader
                   0,                    //current position
                   {0},                  //path data
                   0,                    //last velocity in path
                   0.0,                  //float last vel
                   0,                    //last postion in path
                   0.0,                  //float last pos
                   0.0},                  //path error

                  {0,                    //hold current    //axis 6
                   2,                    //run current
                   0,                    //limit mode
                   3,                    //microstep value
                   48,                  //step resolution
                   1.5 /*600 RPM/s*/,    //acceleration
                   24 /*200 RPM*/,      //max speed
                   -7500,                //minimum position
                   7500,                 //maximum position
                   128,                  //group address
                   false,                //group leader
                   0,                    //current position
                   {0},                  //path data
                   0,                    //last velocity in path
                   0.0,                  //float last vel
                   0,                    //last postion in path
                   0.0,                  //float last pos
                   0.0},                  //path error

                  {0,                    //hold current    //gripper
                   1,                    //run current
                   0,                    //limit mode
                   3,                    //microstep value
                   48,                  //step resolution
                   6.4 /*600 RPM/s*/,    //acceleration
                   100 /*200 RPM*/,      //max speed
                   -10000,                //minimum position
                   10000,                 //maximum position
                   128,                  //group address
                   false,                //group leader
                   0,                    //current position
                   {0},                  //path data
                   0,                    //last velocity in path
                   0.0,                  //float last vel
                   0,                    //last postion in path
                   0.0,                  //float last pos
                   0.0},                  //path error
                };
#else
ticmod mod[11];
#endif

HANDLE comport = INVALID_HANDLE_VALUE;
byte cur_addr;

bool use_speed_txt, use_pos_txt; //specify whether to use editbox of track bar command value

char txtstr[80];
unsigned char datastr[20];

#define STOPPED 0
#define VEL_MODE 1
#define POS_MODE 2
#define MULTIAXIS_MODE 3
#define JOY_VEL_MODE 4
int op_mode = STOPPED;

//Status Byte Bits
#define MOVING 0x01
#define FAULT 0x02
#define LIM1 0x04
#define LIM2 0x08
#define CKSUM_ERR 0x80

//Data back from module
int PositionCounter;
int PathCounter;
byte StatusByte;
//---------------------------------------------------------------------------
__fastcall TMainForm::TMainForm(TComponent* Owner)
        : TForm(Owner)
{
}
//---------------------------------------------------------------------------
//Defined command values:
#define RESET_POS 0x00      //no parameters
#define SET_ADDR 0x01       //my_address, group address, group_leader (1 or 0)
#define START_MOTION 0x05   //no parameters
#define SET_CURRENT 0x06    //hold current level, run current level 0-31 (0=off-ish)
#define STOP_MOTION 0x07    //driver_on_off (1 or 0)
#define SET_MICROSTEPPING 0x08  //ms2:ms1
#define SET_LIMIT_MODE 0x09  //limit mode (bit 0 = enable, bit 1 = active HI, bit 2 = motor off
#define SINGLE_STEP 0x0B    //direction (1 or 0)
#define WRITE_REG 0x0C      //addr_lo, addr_hi, value
#define ADD_PATHPOINT 0x0D  //2 to 14 timer pairs, lsbyt first
#define NOOP 0x0E           //no parameters
#define HARD_RESET 0x0F     //no parameters
//---------------------------------------------------------------------------
TCheckBox *modcb[11];

void __fastcall TMainForm::FormActivate(TObject *Sender)
{
int i;

HoldCurComboBox->ItemIndex = 1;
RunCurComboBox->ItemIndex = 1;

//fill in temp data for all modules
#ifndef ROBOTARM
for (i=0; i<11; i++) memcpy( mod+i, &protomod, sizeof(ticmod) );
#endif

if (Joystick->Attached[0]) JoyShape->Brush->Color = clLime;

modcb[1] = CheckBox1;
modcb[2] = CheckBox2;
modcb[3] = CheckBox3;
modcb[4] = CheckBox4;
modcb[5] = CheckBox5;
modcb[6] = CheckBox6;
modcb[7] = CheckBox7;
modcb[8] = CheckBox8;
modcb[9] = CheckBox9;
modcb[10] = CheckBox10;

}
//---------------------------------------------------------------------------
void EnablePanel(void)
{
MainForm->ControlsPanel->Enabled = true;
MainForm->ControlsPanel->Color = clBtnFace;
MainForm->CmdSpeedTrackbar->SetFocus();
MainForm->CmdPosTrackbar->SetFocus();
}

void DisablePanel(void)
{
MainForm->ControlsPanel->Color = clActiveBorder;
if (MainForm->ControlsPanel->Enabled) MainForm->CmdSpeedTrackbar->SetFocus();
if (MainForm->ControlsPanel->Enabled) MainForm->CmdPosTrackbar->SetFocus();
MainForm->ControlsPanel->Enabled = false;
}
//---------------------------------------------------------------------------
double foo = 10;

void softdelay(void)
{
int i;
for (i=0; i<150000; i++) foo = sqrt(foo);
}
//---------------------------------------------------------------------------
int error_count = 0;

int send_cmd(byte addr, byte cmd, int ndata, char *datastr)
{
unsigned char cmdbyte, cksum;
unsigned char siostr[20];
int i, npath, pos;

while (SioTest(comport)) SioGetChars(comport, siostr, 1);  //flush any chars

//Start w/ header byte
siostr[0] = 0xAA;  //header

//Add address byte
siostr[1] = addr;
cksum = addr;    //initialize checksum

//Add command byte
cmdbyte =  ((ndata<<4)&0xF0) | (cmd & 0x0F);
siostr[2] = cmdbyte;
cksum += cmdbyte;

//Add data bytes
for (i=0; i<ndata; i++)
  {
  siostr[i+3] = datastr[i];
  cksum += datastr[i];
  }

//Add cksum
siostr[ndata+3] =  cksum;

if (!SioPutChars(comport, siostr, ndata+4))   //send out string
  {
  MainForm->PollTimer->Enabled = false;               //on error, turn off polling
  DisablePanel();
  }

softdelay();       //needed with CH340 USB converter module, not needed for FTDI

if (SioGetChars(comport, siostr, 7) != 7)   //check for data back
  {
  MainForm->PollTimer->Enabled = false;               //on error, turn off polling
  DisablePanel();
  SimpleMsgBox("No response from module");
  return(-1);
  }

if (siostr[0] & CKSUM_ERR)    //check status byte for returned cksum error
  {
  error_count++;
  if (error_count>=3)
    {
    MainForm->PollTimer->Enabled = false;               //on error, turn off polling
    DisablePanel();
    SimpleMsgBox("Multiple checksum errors, coms disbled");
    }
  else  SimpleMsgBox("Module detected checksum error - command not executed");
  return(-2);
  }

error_count = 0;   //clr error count if still OK

cksum = siostr[0]+siostr[1]+siostr[2]+siostr[3]+siostr[4]+siostr[5];
if (cksum != siostr[6])
  {
  SimpleMsgBox("Received data garbled");
  return(-3);
  }

StatusByte = siostr[0];
if (StatusByte & MOVING) MainForm->MovingShape->Brush->Color = clLime;
else MainForm->MovingShape->Brush->Color = clGray;

if (StatusByte & LIM1) MainForm->LIM1Shape->Brush->Color = clLime;
else  MainForm->LIM1Shape->Brush->Color = clGray;

if (StatusByte & LIM2) MainForm->LIM2Shape->Brush->Color = clLime;
else  MainForm->LIM2Shape->Brush->Color = clGray;

if (StatusByte & FAULT) MainForm->FaultShape->Brush->Color = clLime;
else  MainForm->FaultShape->Brush->Color = clGray;

PathCounter = siostr[1];
sprintf(txtstr, "%d", PathCounter);
MainForm->NumPathPointsLabel->Caption = txtstr;

PositionCounter =  *((int *)(siostr+2));
mod[cur_addr].cur_pos = PositionCounter;
sprintf(txtstr, "%ld", PositionCounter );
MainForm->PosValLabel->Caption = txtstr;

return(0);
}
//---------------------------------------------------------------------------
void hard_reset(void)
{
//send out a reset command to all modules
datastr[0] = 0xAA;
datastr[1] = 0xFF;          //use universal address
datastr[2] = HARD_RESET;    //set address cmd + # data
datastr[3] = datastr[1] + datastr[2];
SioPutChars(comport, datastr, 4) ;
Sleep(500);

while (SioTest(comport)) SioGetChars(comport, datastr, 1);  //flush any chars
}
//---------------------------------------------------------------------------
void __fastcall TMainForm::ComRGClick(TObject *Sender)
{
unsigned char datastr[20], rcvstr[20];
int n;

if (comport!=INVALID_HANDLE_VALUE) SioClose(comport);

switch (ComRG->ItemIndex)
  {
  case 0: comport = SioOpen("COM1:", 230400 /*115200*/);
          break;
  case 1: comport = SioOpen("COM2:", 230400);
          break;
  case 2: comport = SioOpen("COM3:", 230400);
          break;
  case 3: comport = SioOpen("COM4:", 230400);
          break;
  case 4: comport = SioOpen("COM5:", 230400);
          break;
  case 5: comport = SioOpen("COM6:", 230400);
          break;
  case 6: comport = SioOpen("COM7:", 230400);
          break;
  case 7: comport = SioOpen("COM8:", 230400);
          break;
  }

if (comport == INVALID_HANDLE_VALUE)
  {
  SimpleMsgBox("Selected COM port not valid");
  return;
  }

ModAddrGroup->Enabled = true;
SetAddressButton->Enabled = true;
ModAddrGroup->Color = clBtnFace;
hard_reset();
}

//---------------------------------------------------------------------------
void RefreshPanelData(void)
{
MainForm->CmdSpeedTrackbar->Position = 0;
MainForm->CmdPosTrackbar->Position = 20;
MainForm->CmdSpeedEdit->Text = 0;
MainForm->CmdPosEdit->Text = 0;

MainForm->HoldCurComboBox->ItemIndex = mod[cur_addr].hold_cur;
MainForm->RunCurComboBox->ItemIndex = mod[cur_addr].run_cur;
MainForm->SetCurrentButtonClick(NULL);
MainForm->MicroStepRG->ItemIndex = mod[cur_addr].microstep;
sprintf(txtstr,"%d", mod[cur_addr].step_res);
MainForm->MotorStepsEdit->Text = txtstr;
sprintf(txtstr,"%.2f", mod[cur_addr].accel*50*50*60/mod[cur_addr].step_res/(1<<mod[cur_addr].microstep));
MainForm->AccelEdit->Text = txtstr;
sprintf(txtstr,"%.2f", mod[cur_addr].max_speed*50*60/mod[cur_addr].step_res/(1<<mod[cur_addr].microstep));
MainForm->MaxSpeedEdit->Text = txtstr;
sprintf(txtstr,"%d", (int)mod[cur_addr].min_pos);
MainForm->MinPosEdit->Text = txtstr;
sprintf(txtstr,"%d", (int)mod[cur_addr].max_pos);
MainForm->MaxPosEdit->Text = txtstr;
sprintf(txtstr,"%d", cur_addr);
MainForm->ModAddrEdit->Text = txtstr;
sprintf(txtstr,"%d", mod[cur_addr].group_addr);
MainForm->GroupAddrEdit->Text = txtstr;
MainForm->GroupLeaderCB->Checked = mod[cur_addr].group_leader;
MainForm->EnLimCkbox->Checked = (bool)(mod[cur_addr].lim_mode & 0x01);
MainForm->LimHiCkbox->Checked = (bool)(mod[cur_addr].lim_mode & 0x02);
MainForm->LimOffCkbox->Checked = (bool)(mod[cur_addr].lim_mode & 0x04);

sprintf(txtstr,"%d", cur_addr);
MainForm->ModAddrEdit->Text = txtstr;
}

//---------------------------------------------------------------------------
void __fastcall TMainForm::ModAddrGroupClick(TObject *Sender)
{
cur_addr = MainForm->ModAddrGroup->ItemIndex + 1;   //use currently selected
if (!send_cmd(cur_addr, NOOP, 0, txtstr))  //
  {
  ControlsPanel->Enabled = false;
  RefreshPanelData();
  EnablePanel();
  op_mode = STOPPED;
  PollTimer->Enabled = true;
  }
else
  {
  PollTimer->Enabled = false;
  DisablePanel();
  }
}

//---------------------------------------------------------------------------
void __fastcall TMainForm::SingleStepFwdButtonClick(TObject *Sender)
{
unsigned char dir = 1;

send_cmd(cur_addr, SINGLE_STEP, 1, &dir);
}
//---------------------------------------------------------------------------
void __fastcall TMainForm::SingleStepRevButtonClick(TObject *Sender)
{
unsigned char dir = 0;

send_cmd(cur_addr, SINGLE_STEP, 1, &dir);
}
//---------------------------------------------------------------------------

void __fastcall TMainForm::PosClrButtonClick(TObject *Sender)
{
send_cmd(cur_addr, RESET_POS, 0, txtstr);
}
//---------------------------------------------------------------------------
void __fastcall TMainForm::StopMotorButtonClick(TObject *Sender)
{
txtstr[0] = 1;
send_cmd(cur_addr, STOP_MOTION, 1, txtstr);
op_mode = STOPPED;
SpeedModeShape->Brush->Color = clGray;
PosModeShape->Brush->Color = clGray;
mod[cur_addr].lastvel = 0;
CmdSpeedTrackbar->Position = 0;
}
//---------------------------------------------------------------------------
void __fastcall TMainForm::MotorOffButtonClick(TObject *Sender)
{
txtstr[0] = 0;
send_cmd(cur_addr, STOP_MOTION, 1, txtstr);
op_mode = STOPPED;
SpeedModeShape->Brush->Color = clGray;
PosModeShape->Brush->Color = clGray;
mod[cur_addr].lastvel = 0;
CmdSpeedTrackbar->Position = 0;
}
//---------------------------------------------------------------------------
void __fastcall TMainForm::PollTimerTimer(TObject *Sender)
{
double txtval, goalvel;
double goalpos;

//If using joystick, use buttons to select module address, and if button
//is held, use it to generate a velocity command
if (Joystick->Attached[0])
  {
  if (Joystick->PressedButtonCount)
    {
    if (Joystick->PressedButtons.Contains(joButton1)) ModAddrGroup->ItemIndex = 0;
    else if (Joystick->PressedButtons.Contains(joButton2)) ModAddrGroup->ItemIndex = 1;
    else if (Joystick->PressedButtons.Contains(joButton3)) ModAddrGroup->ItemIndex = 2;
    else if (Joystick->PressedButtons.Contains(joButton4)) ModAddrGroup->ItemIndex = 3;
    else if (Joystick->PressedButtons.Contains(joButton5)) ModAddrGroup->ItemIndex = 4;
    else if (Joystick->PressedButtons.Contains(joButton6)) ModAddrGroup->ItemIndex = 5;
    else if (Joystick->PressedButtons.Contains(joButton7)) ModAddrGroup->ItemIndex = 6;
    else if (Joystick->PressedButtons.Contains(joButton8)) ModAddrGroup->ItemIndex = 7;
    else if (Joystick->PressedButtons.Contains(joButton9)) ModAddrGroup->ItemIndex = 8;
    else if (Joystick->PressedButtons.Contains(joButton10)) ModAddrGroup->ItemIndex = 6; //9;    //demo operate gripper
    op_mode = JOY_VEL_MODE;
    SpeedModeShape->Brush->Color = clLime;
    }
  else  if (op_mode == JOY_VEL_MODE)
    {
    op_mode = STOPPED;
    SpeedModeShape->Brush->Color = clGray;
    }
  }

if (op_mode == VEL_MODE)
  {
  //Get the goal velocity from the appropriate control
  if (use_speed_txt)
    {
    sscanf(MainForm->CmdSpeedEdit->Text.c_str(), "%lf", &txtval );
    goalvel =  ( txtval *
                 mod[cur_addr].step_res *
                 (1<<mod[cur_addr].microstep) )/60/50;
    }
  else goalvel = mod[cur_addr].max_speed*MainForm->CmdSpeedTrackbar->Position/20;  //trackbar goes -20 to +20

  if (PositionCounter<mod[cur_addr].max_pos  && goalvel>=0) vel_mode_update(goalvel);
  else if (PositionCounter>mod[cur_addr].min_pos  && goalvel<=0) vel_mode_update(goalvel);
  else op_mode = STOPPED;
  }
else if (op_mode == JOY_VEL_MODE)
  {
  goalvel = mod[cur_addr].max_speed*
             pow(fabs((Joystick->PositionY - 32767.0)/32676.0),1.75);  //joystick goes 0 to 2^16
  if (Joystick->PositionY < 32767.0)  goalvel = -goalvel;
  if (PositionCounter<mod[cur_addr].max_pos  && goalvel>0) vel_mode_update(goalvel);
  else if (PositionCounter>mod[cur_addr].min_pos  && goalvel<0) vel_mode_update(goalvel);
  else op_mode = STOPPED;
  }
else if (op_mode == POS_MODE)
  {
  //Get the goal velocity from the appropriate control
  if (use_pos_txt) sscanf(MainForm->CmdPosEdit->Text.c_str(), "%lf", &goalpos );
  else goalpos = mod[cur_addr].min_pos +
                 (mod[cur_addr].max_pos - mod[cur_addr].min_pos)*
                 MainForm->CmdPosTrackbar->Position/40;  //trackbar goes -20 to +20
  pos_mode_update(goalpos);
  }
else if (op_mode == MULTIAXIS_MODE)
  {
  multiaxis_update();
  }
else send_cmd(cur_addr, NOOP, 0, txtstr);

//Update lastvel and lastpos if not moving
if ( !(StatusByte & MOVING) )
  {
  mod[cur_addr].lastvel = 0;
  mod[cur_addr].flastvel = 0.0;
  mod[cur_addr].lastpos = PositionCounter;
  mod[cur_addr].flastpos = (double)PositionCounter;
  mod[cur_addr].patherr = 0;
  if (op_mode != JOY_VEL_MODE) op_mode = STOPPED;
  }
}
//---------------------------------------------------------------------------
//#define PATH_CYCLES 240095.0      //values for old version (min speed 4 steps path point
//#define PADDING 200.0
//#define STEP_LATENCY 47.03       //works!!
#define PATH_CYCLES 240095.0        // values for slow speed compensation (down to 1 step per path point)
#define PADDING 200.0
#define STEP_LATENCY 47.085       //works!!
//Find the closest even reload value to achieve the desired number of steps
//per path time (nsteps should always be positive)
unsigned short int get_reload_val(int nsteps)
{
unsigned short int reloadval;

if (nsteps>640 || nsteps<0) { SimpleMsgBox("GET_RELOAD_VAL: Invalid nsteps"); return(0); }
//if (nsteps<4) return(0);
if (nsteps == 0) return(0);        //use reload of 0 for zero steps
if (nsteps == 1) return(2);        //for # steps < 4, use special index value for internal lookup
if (nsteps == 2) return(4);
if (nsteps == 3) return(6);

reloadval =  (unsigned short int)( 0x10000 - (int)((PATH_CYCLES+PADDING)/nsteps  - STEP_LATENCY + 0.5 ) );
if (reloadval & 0x0001) reloadval--;

return(reloadval);
}
//---------------------------------------------------------------------------
//Calculate the actual number of steps to be generated  in one path cycle for
//a given reload value
int num_steps(unsigned short int reloadval)
{
int n;

if (reloadval == 0) return(0);
if (reloadval == 2) return(1);
if (reloadval == 4) return(2);
if (reloadval == 6) return(3);

n = (int)(1 + PATH_CYCLES/(0x10000 - reloadval + STEP_LATENCY));

return(n);
}

//---------------------------------------------------------------------------
unsigned short int reload = 0xFD4C;
int n_steps = 551;

void __fastcall TMainForm::RunSpeedButtonClick(TObject *Sender)
{
int n;

PollTimer->Enabled = false;

for (n_steps = 640; n_steps>300; n_steps--)
{
PosClrButtonClick(Sender);

reload = get_reload_val(n_steps);

if (num_steps(reload) != n_steps)
  {
  n = num_steps(reload);
  reload = get_reload_val(n);
  }

send_cmd(cur_addr, ADD_PATHPOINT, 2, (char *)(&reload) );

send_cmd(cur_addr, START_MOTION, 0, txtstr);

sprintf(txtstr, "0x%X %d", reload, num_steps(reload) );
ReloadLabel->Caption = txtstr;
ReloadLabel->Refresh();

Sleep(100);
send_cmd(cur_addr, NOOP, 0, txtstr);

if ( num_steps(reload) != -PositionCounter) SimpleMsgBox("Count mismatch");
}

PollTimer->Enabled = true;
}
//---------------------------------------------------------------------------

void __fastcall TMainForm::ExitButtonClick(TObject *Sender)
{
if (comport != INVALID_HANDLE_VALUE) hard_reset();
Close();
}
//---------------------------------------------------------------------------

void __fastcall TMainForm::MotorStepsEditExit(TObject *Sender)
{
sscanf(MotorStepsEdit->Text.c_str(), "%d", &(mod[cur_addr].step_res) );
MaxSpeedEditExit(Sender);
}
//---------------------------------------------------------------------------

void __fastcall TMainForm::MaxSpeedEditExit(TObject *Sender)
{
sscanf(MaxSpeedEdit->Text.c_str(), "%lf", &(mod[cur_addr].max_speed) );
//convert to steps per path cycle:
mod[cur_addr].max_speed =  ( mod[cur_addr].max_speed *
                             mod[cur_addr].step_res *
                             (1<<mod[cur_addr].microstep) )/60/50;

}
//---------------------------------------------------------------------------
void __fastcall TMainForm::AccelEditExit(TObject *Sender)
{
sscanf(AccelEdit->Text.c_str(), "%lf", &(mod[cur_addr].accel) );
//convert to steps per path cycle per path cycle:
mod[cur_addr].accel =  ( mod[cur_addr].accel *
                         mod[cur_addr].step_res *
                        (1<<mod[cur_addr].microstep) )/60/50/50;
}
//---------------------------------------------------------------------------
void __fastcall TMainForm::CmdSpeedTrackbarChange(TObject *Sender)
{
use_speed_txt = false;
op_mode = VEL_MODE;
SpeedModeShape->Brush->Color = clLime;
}
//---------------------------------------------------------------------------
bool decel_phase;

void __fastcall TMainForm::GoSpeedButtonClick(TObject *Sender)
{
use_speed_txt = true;
op_mode = VEL_MODE;
SpeedModeShape->Brush->Color = clLime;
}
//---------------------------------------------------------------------------
void __fastcall TMainForm::StopSmoothButtonClick(TObject *Sender)
{
use_speed_txt = false;
op_mode = VEL_MODE;
PosModeShape->Brush->Color = clGray;
SpeedModeShape->Brush->Color = clLime;
CmdSpeedTrackbar->Position = 0;
}
//---------------------------------------------------------------------------
void __fastcall TMainForm::CmdSpeedTrackbarKeyPress(TObject *Sender,
      char &Key)
{
StopSmoothButtonClick(Sender);
}
//---------------------------------------------------------------------------
void vel_mode_update(double goalvel)
{
int i;
unsigned short int reload;
double nextvel;
int last_pathcount;

if (PathCounter >= 20) //don't refill until pathbuf drops below 20
  {
  send_cmd(cur_addr, NOOP, 0, txtstr);    //update PathCounter instead
  return;
  }

//exit speed mode if goal is zero and last set speed is zero
//(pathpoint buffer inside controller will continue to execute until empty)
if ( (goalvel==0) && (mod[cur_addr].lastvel==0) )
  {
  if (op_mode != JOY_VEL_MODE) op_mode = STOPPED;
  MainForm->SpeedModeShape->Brush->Color = clGray;
  return;
  }

while (PathCounter < 20)
  {
  //get next 7 points:
  for (i=0; i<7; i++)
    {
    if ((double)mod[cur_addr].lastvel < goalvel)
      {
      nextvel = (double)mod[cur_addr].lastvel + mod[cur_addr].accel;
      if (nextvel > goalvel) nextvel = goalvel;
      }
    else if ((double)mod[cur_addr].lastvel > goalvel)
      {
      nextvel = (double)mod[cur_addr].lastvel - mod[cur_addr].accel;
      if (nextvel < goalvel) nextvel = goalvel;
      }
    else nextvel = goalvel;

    nextvel += mod[cur_addr].patherr;  //adjust speed to fix previous error

    reload = get_reload_val( (int)(fabs(nextvel)) );   //get the timer reload value to achieve desired velocity

    if (nextvel>0)
      {
      mod[cur_addr].patherr = nextvel - num_steps(reload);    //adjust nextvel to match actual number of steps generated
      mod[cur_addr].lastvel = num_steps(reload);
      mod[cur_addr].path[i] = reload + 1;   //set lsb to 1 for fwd motion
      }
    else
      {
      mod[cur_addr].patherr = nextvel + num_steps(reload);    //adjust nextvel to match actual number of steps generated
      mod[cur_addr].lastvel = -num_steps(reload);   //adjust nextvel to match actual number of steps generated
      mod[cur_addr].path[i] = reload;
      }

    mod[cur_addr].lastpos += mod[cur_addr].lastvel;   //update accumulated position change
    mod[cur_addr].flastpos = mod[cur_addr].lastpos;   //update floating point versions
    mod[cur_addr].flastvel = mod[cur_addr].lastvel;
    } //for i=0-6

  last_pathcount = PathCounter;
  send_cmd(cur_addr, ADD_PATHPOINT, 14, (char *)mod[cur_addr].path );    //updates PathCounter
  if (PathCounter <= last_pathcount) return;  //used to detect limit switch preventing path points form being added

  }  //WHILE path counter < 20

if ( !(StatusByte & MOVING) ) send_cmd(cur_addr, START_MOTION, 0, txtstr);
}
//---------------------------------------------------------------------------
void pos_mode_update(int goalpos)
{
int i, last_pathcount;
double goaldist, igoaldist;
unsigned short int reload;
double nextvel, accel_signed, goalvel;
bool pathdone;

if (PathCounter >= 20) //don't refill until pathbuf drops below 20
  {
  send_cmd(cur_addr, NOOP, 0, txtstr);    //update PathCounter instead
  return;
  }

//get distance to goal
goaldist = (double)goalpos - mod[cur_addr].flastpos;
goalvel = mod[cur_addr].max_speed;
if (goaldist<0) goalvel = -mod[cur_addr].max_speed;

//exit pos mode if goaldist and last set speed are both close to zero
//(pathpoint buffer inside controller will continue to execute until empty)
if ( ( fabs(mod[cur_addr].flastvel) < mod[cur_addr].accel+1 )  &&
     ( fabs(goaldist) < mod[cur_addr].accel+1 ) )
  {
  op_mode = STOPPED;
  MainForm->PosModeShape->Brush->Color = clGray;
  //cleanup last few microsteps with single steps:
  igoaldist = goalpos-mod[cur_addr].lastpos;
  if (igoaldist<0)
    for (i=0; i>igoaldist; i--) MainForm->SingleStepRevButtonClick(NULL);
  else if (igoaldist>0)
    for (i=0; i<igoaldist; i++) MainForm->SingleStepFwdButtonClick(NULL);
  return;
  }

pathdone = false;

while (PathCounter < 20)
  {
  //get next 7 points:
  for (i=0; i<7; i++)
    {
    goaldist = (double)goalpos - mod[cur_addr].flastpos;

    //get a signed version of hte acceleration
    if (goaldist /*mod[cur_addr].flastvel*/ >= 0)  accel_signed = mod[cur_addr].accel;
    else accel_signed = -mod[cur_addr].accel;

    //first check termination condition:
    if ( (fabs(mod[cur_addr].flastvel)<mod[cur_addr].accel+1)  &&
         (fabs(goaldist) < mod[cur_addr].accel+1) )
      {
      nextvel = goaldist;
      pathdone = true;
      }

    //next check if need to start to decelerate
    //first check against maintianing speed for another cycle at same speed
    //ie, check if v^2 > 2*accel*dist
    else if ( pow(mod[cur_addr].flastvel,2) > fabs(2*mod[cur_addr].accel*(goaldist-2*mod[cur_addr].flastvel)) )
      {
      nextvel = mod[cur_addr].flastvel - accel_signed;
      if (nextvel > mod[cur_addr].max_speed) nextvel = mod[cur_addr].max_speed;
      else if (nextvel < -mod[cur_addr].max_speed) nextvel = -mod[cur_addr].max_speed;
      }
    //next check against another cycle of having accelerated
    else if ( pow(mod[cur_addr].flastvel+accel_signed,2) > fabs(2*mod[cur_addr].accel*(goaldist-2*mod[cur_addr].flastvel-accel_signed)) )
      {
      nextvel =  mod[cur_addr].flastvel;  //just maintain speed
      }

    //finally check if need to accel or decel up to max vel.
    else if (mod[cur_addr].flastvel <= goalvel)
      {
      nextvel = mod[cur_addr].flastvel + mod[cur_addr].accel;
      if (nextvel > goalvel)
        nextvel = goalvel;
      }
    else if (mod[cur_addr].flastvel > goalvel)
      {
      nextvel = mod[cur_addr].flastvel - mod[cur_addr].accel;
      if (nextvel < goalvel)
        nextvel = goalvel;
      }

    mod[cur_addr].flastvel = nextvel;
    mod[cur_addr].flastpos += nextvel;  //finish floating point path planning

    //
    //Handle creating and aligning integer values from floating point
    //
    nextvel += mod[cur_addr].patherr;  //adjust speed to fix previous error from float/int conversion, timer resolution limits

    reload = get_reload_val( (int)(fabs(nextvel)) );   //get the closest timer reload value to achieve desired velocity

    //get the actual number of steps for the given reload value and update the mod data
    if (nextvel>0)
      {
      mod[cur_addr].lastvel = num_steps(reload);
      mod[cur_addr].path[i] = reload + 1;   //set lsb to 1 for fwd motion
      }
    else
      {
      mod[cur_addr].lastvel = -num_steps(reload);   //adjust nextvel to match actual number of steps generated
      mod[cur_addr].path[i] = reload;
      }

    mod[cur_addr].lastpos += mod[cur_addr].lastvel;   //update accumulated integer position change

    mod[cur_addr].patherr =  mod[cur_addr].flastpos - mod[cur_addr].lastpos;  //determine error between flaot and int paths

    if (pathdone) { i++; break; }  //exit for-loop if done
    } //for i=0-6

  last_pathcount = PathCounter;
  send_cmd(cur_addr, ADD_PATHPOINT, 2*i, (char *)mod[cur_addr].path );    //updates PathCounter
  if (PathCounter <= last_pathcount) return;  //used to detect limit switch preventing path points form being added

  if (pathdone) break; //exit while-loop if done
  }  //WHILE path counter < 20

if ( !(StatusByte & MOVING) ) send_cmd(cur_addr, START_MOTION, 0, txtstr);
}

//---------------------------------------------------------------------------
void __fastcall TMainForm::GoPosButtonClick(TObject *Sender)
{
use_pos_txt = true;
decel_phase = false;
op_mode = POS_MODE;
if ( !(StatusByte & MOVING) )
  {
  mod[cur_addr].lastpos = PositionCounter;
  mod[cur_addr].lastvel = 0;
  }
PosModeShape->Brush->Color = clLime;
SpeedModeShape->Brush->Color = clGray;
}
//---------------------------------------------------------------------------

void __fastcall TMainForm::CmdPosTrackbarChange(TObject *Sender)
{
use_pos_txt = false;
op_mode = POS_MODE;
PosModeShape->Brush->Color = clLime;
}
//---------------------------------------------------------------------------


void __fastcall TMainForm::MinPosEditExit(TObject *Sender)
{
sscanf(MinPosEdit->Text.c_str(), "%lf", &(mod[cur_addr].min_pos) );
}
//---------------------------------------------------------------------------
void __fastcall TMainForm::SetCurrentButtonClick(TObject *Sender)
{
mod[cur_addr].hold_cur = HoldCurComboBox->ItemIndex;
mod[cur_addr].run_cur = RunCurComboBox->ItemIndex;

txtstr[0] = (unsigned char)HoldCurComboBox->ItemIndex;
txtstr[1] = (unsigned char)RunCurComboBox->ItemIndex;
send_cmd(cur_addr, SET_CURRENT, 2, txtstr);
}
//---------------------------------------------------------------------------
void __fastcall TMainForm::EnLimCkboxClick(TObject *Sender)
{
txtstr[0] = 0;
if (EnLimCkbox->Checked) txtstr[0] |= 0x01;
if (LimHiCkbox->Checked) txtstr[0] |= 0x02;
if (LimOffCkbox->Checked) txtstr[0] |= 0x04;

mod[cur_addr].lim_mode = txtstr[0];

send_cmd(cur_addr, SET_LIMIT_MODE, 1, txtstr);
}
//---------------------------------------------------------------------------

void __fastcall TMainForm::LimHiCkboxClick(TObject *Sender)
{
EnLimCkboxClick(Sender);
}
//---------------------------------------------------------------------------

void __fastcall TMainForm::LimOffCkboxClick(TObject *Sender)
{
EnLimCkboxClick(Sender);
}
//---------------------------------------------------------------------------

void __fastcall TMainForm::SetAddrButton2Click(TObject *Sender)
{
unsigned char mod_addr;

sscanf(MotorStepsEdit->Text.c_str(), "%d", &(mod_addr) );
sscanf(MotorStepsEdit->Text.c_str(), "%d", &(mod[cur_addr].group_addr) );
mod[cur_addr].group_leader = GroupLeaderCB->Checked;

txtstr[0] = 0xAA;
txtstr[1] = 0xFF;    //use universal address
txtstr[2] = 0x31;    //set address cmd + # data
txtstr[3] = mod_addr;
txtstr[4] = mod[cur_addr].group_addr;
if (mod[cur_addr].group_leader) txtstr[5] = 0x01;  else txtstr[5] = 0x00;
txtstr[6] = 0xFF + 0x31 +  txtstr[3] +  txtstr[4] + txtstr[5];
SioPutChars(comport, txtstr, 7) ;
}
//---------------------------------------------------------------------------
void __fastcall TMainForm::SetAddressButtonClick(TObject *Sender)
{
int mod_addr;

sscanf(ModAddrEdit->Text.c_str(), "%d", &(mod_addr) );
sscanf(GroupAddrEdit->Text.c_str(), "%d", &(mod[cur_addr].group_addr) );
mod[cur_addr].group_leader = GroupLeaderCB->Checked;

datastr[0] = 0xAA;
if (ControlsPanel->Enabled) datastr[1] = cur_addr;  //us emoduel address if already talking
else
  {
  if (MessageBox(NULL,"Make sure only one module is connected","",MB_OKCANCEL)== IDOK)
    datastr[1] = 0xFF;                             //use universal address if not talking
  else
    return;
  }
datastr[2] = 0x31;    //set address cmd + # data
datastr[3] = mod_addr;
datastr[4] = mod[cur_addr].group_addr;
if (mod[cur_addr].group_leader) datastr[5] = 0x01;  else datastr[5] = 0x00;
datastr[6] = datastr[1] + datastr[2] +  datastr[3] +  datastr[4] + datastr[5];

SioPutChars(comport, datastr, 7) ;
}
//---------------------------------------------------------------------------
void __fastcall TMainForm::MicroStepRGClick(TObject *Sender)
{
mod[cur_addr].microstep = MicroStepRG->ItemIndex;

send_cmd(cur_addr, SET_MICROSTEPPING, 1, (char *)(&(mod[cur_addr].microstep)) );
}
//---------------------------------------------------------------------------

void __fastcall TMainForm::MaxPosEditExit(TObject *Sender)
{
sscanf(MaxPosEdit->Text.c_str(), "%lf", &(mod[cur_addr].max_pos) );

}
//---------------------------------------------------------------------------
//Multiaxis stuff:
//
int axes[10];  //list of axis addresses involved in multiaxis motion
double pointlist[10000][10];
double seg_len[10000];      //length of each segment
double cum_seg_len[10000];  //cumulative length of previous segments
int naxes = 0, npoints = 0, pt_ptr = 0;
double pathlen;         //overall length of path
double cur_pathpos;     //current postion along arclength of path  (always positive)
double cur_pathspeed;   //current vel along path (always positive)
double seg_remainder;   //distance to be traveled into next segment for next path period
double pathacc, maxpathspeed;
byte pathleaderaddr;

int segmented = 1;

//---------------------------------------------------------------------------
/***/double pathdump[2000];
/***/int dump1[2000], dump2[2000];
/***/int dumpi = 0;

//File format:
//# axes used
//axis address list (addr_j1 addr_j2 addr_j3 ...)
//# path points
//path point data (j1 j2 j3 ... )

void __fastcall TMainForm::RunFileButtonClick(TObject *Sender)
{
FILE *pointfile;
int i, j;
double sum;

/***/dumpi = 0;

if (!OpenDialog->Execute()) return;

if ( (pointfile = fopen(OpenDialog->FileName.c_str(), "rt"))==NULL )
  {
  SimpleMsgBox("Could not open file");
  return;
  }

fscanf(pointfile,"%d",&naxes);  //get naxes
fgets(txtstr, 80, pointfile);     //strip trailing test
for (i=0; i<naxes; i++) fscanf(pointfile, "%d", axes+i);   //get axes addresses
fgets(txtstr, 80, pointfile);     //strip trailing text

//read max vel and accel from file
fscanf(pointfile,"%lf %lf", &maxpathspeed, &pathacc);
fgets(txtstr, 80, pointfile);     //strip trailing text

//put current position at the beginning -- pointlist[0]
for (j=0; j<naxes; j++)
  {
  send_cmd(axes[j], NOOP, 0, txtstr);
  pointlist[0][axes[j]] = PositionCounter;
  mod[axes[j]].lastpos = PositionCounter;  //make sure the last path position matches cur. position
  mod[axes[j]].flastpos = PositionCounter;
  }

pathlen = 0;
cum_seg_len[0] = 0;   //initialze length of prev. segemnts to zero for first point

fscanf(pointfile,"%d %d",&npoints, &segmented);    //get npoints
fgets(txtstr, 80, pointfile);     //strip trailing text

for (i=1; i<=npoints; i++)
  {
  for (j=0; j<naxes; j++)
    fscanf(pointfile,"%lf", &(pointlist[i][axes[j]])); //read point data
  fgets(txtstr, 80, pointfile);     //strip trailing text

  //get segment length for each
  sum = 0;
  for (j=0; j<naxes; j++) sum += pow(pointlist[i][axes[j]] - pointlist[i-1][axes[j]],2);
  seg_len[i-1] = sqrt(sum);
  pathlen += seg_len[i-1];   //total up overall path length
  cum_seg_len[i] = pathlen;
  }

/* old version - get max vel and acc from axis limits
//use the minimum component max speed and accel to set the speed & accel for the path
pathacc = 1000000; maxpathspeed = 1000000;
for (j=0; j<naxes; j++)
  {
  if (mod[axes[j]].accel < pathacc) pathacc = mod[axes[j]].accel;
  if (mod[axes[j]].max_speed < maxpathspeed) maxpathspeed = mod[axes[j]].max_speed;
  }
*/

fclose(pointfile);

//find the group leader
pathleaderaddr = 0xFF;
for (j=0; j<naxes; j++)
  if ( mod[axes[j]].group_leader )
    {
    pathleaderaddr = mod[axes[j]].group_addr;  //find the group leader
    break;
    }


if (pathleaderaddr == 0xFF) {SimpleMsgBox("No group leader"); return;}
for (j=0; j<naxes; j++)
  if (mod[axes[j]].group_addr != pathleaderaddr)
    {SimpleMsgBox("Path axes group addresses do not match"); return;}

cur_pathpos = 0;
cur_pathspeed = 0;
pt_ptr = 0;
seg_remainder = 0;
pathleaderaddr = mod[axes[0]].group_addr;

send_cmd(pathleaderaddr, NOOP, 0, txtstr);    //update PathCounter (should be zero)
if (PathCounter != 0) { SimpleMsgBox("Previous path not terminated"); return; }

if (segmented) pathlen = seg_len[0];   //if running segements discretely, start pathlength = first seg length

op_mode = MULTIAXIS_MODE;
}
//---------------------------------------------------------------------------

void multiaxis_update(void)
{
double goaldist, seg_ratio;
int i, j, nsteps;
short int reload;
bool endofpath;

if (PathCounter >= 20) //don't refill until pathbuf drops below 20
  {
  send_cmd(cur_addr, NOOP, 0, txtstr);    //update PathCounter instead
  return;
  }

endofpath = false;

while (PathCounter<20)   //add up to 20 path points
  {
  for (i=0; i<7; i++)  //add 7 path points at a time
    {
    goaldist = pathlen - cur_pathpos;

    //first check termination condition
    if ( goaldist < pathacc )  endofpath = true;
    //next check if need to start to decelerate
      //first check against maintianing speed for another cycle at same speed
      //ie, check if v^2 > 2*accel*dist
    else if ( pow(cur_pathspeed,2) > 2*pathacc*(goaldist-2*cur_pathspeed) )
      {
      cur_pathspeed = cur_pathspeed - pathacc;
      if (cur_pathspeed < 0) endofpath = true;
      }
      //then check if accelerating another cycle would pass the decel point
    else if ( pow(cur_pathspeed+pathacc,2) > 2*pathacc*(goaldist-2*cur_pathspeed) )
      cur_pathspeed = cur_pathspeed;   //keep speed the same
    //then check if we need to accelerate
    else if (cur_pathspeed <= maxpathspeed)
      {
      cur_pathspeed = cur_pathspeed + pathacc;
      if (cur_pathspeed > maxpathspeed) cur_pathspeed = maxpathspeed;
      }

    //handle end of path:
    if (endofpath)
      {
      //set the final path module path point equal to the end point of the path
      for (j=0; j<naxes; j++)
        {
        if (segmented) nsteps = pointlist[pt_ptr+1][axes[j]] - mod[axes[j]].lastpos;
        else nsteps = pointlist[npoints][axes[j]] - mod[axes[j]].lastpos;

        if (nsteps > 0)
          {
          reload = get_reload_val(nsteps);
          mod[axes[j]].path[i] = reload + 1;       //set lsb for fwd motion
          mod[axes[j]].lastpos += num_steps(reload);
          }
        else
          {
          reload = get_reload_val(-nsteps);
          mod[axes[j]].path[i] = reload;       //lsb already cleared for rev motion
          mod[axes[j]].lastpos -= num_steps(reload);
          }
        }
      i++;  //increment the mod path point index
      if (segmented && (pt_ptr+1 < npoints) )
        pathlen += seg_len[pt_ptr+1];
      break; //exit the for i=1 to 6 loop
      }

    //figure out where we are along the path:
    cur_pathpos += cur_pathspeed;

    while ( (cur_pathpos - cum_seg_len[pt_ptr+1]) > 0 )  pt_ptr++; //advance to next seg. if necessary
    seg_ratio = (cur_pathpos -  cum_seg_len[pt_ptr]) / seg_len[pt_ptr];

    for (j=0; j<naxes; j++)
      {
      nsteps = (int)(seg_ratio*(pointlist[pt_ptr+1][axes[j]] - pointlist[pt_ptr][axes[j]])
                           + pointlist[pt_ptr][axes[j]]) - mod[axes[j]].lastpos;

      if (nsteps > 0)
        {
        reload = get_reload_val(nsteps);
        mod[axes[j]].path[i] = reload + 1;       //set lsb for fwd motion
        mod[axes[j]].lastpos += num_steps(reload);
        }
      else
        {
        reload = get_reload_val(-nsteps);
        mod[axes[j]].path[i] = reload;       //lsb already cleared for rev motion
        mod[axes[j]].lastpos -= num_steps(reload);
        }
      }

    //pathdump[dumpi] = cur_pathpos;
    //dump1[dumpi] = mod[1].lastpos;
    //dump2[dumpi] = mod[2].lastpos;
    //dumpi++;
    }  // END for i= 0 - 6

  //load buffers with next i path points
  for (j=0; j<naxes; j++)
    send_cmd(axes[j], ADD_PATHPOINT, 2*i, (char *)mod[axes[j]].path);    //updates PathCounter

  if (endofpath)
    {
    if (pt_ptr+1 < npoints) endofpath = false;  //reset endofpath if we haven't yet reached the last seg.
    else
      {
      op_mode = STOPPED;
      break;  //exit While loop
      }
    }
  } //END while pathcount < 20

//if not yet moving, start the motion
if ( !(StatusByte & MOVING) ) send_cmd(pathleaderaddr, START_MOTION, 0, txtstr);
}

//---------------------------------------------------------------------------
void __fastcall TMainForm::RecordButtonClick(TObject *Sender)
{
FILE *pointfile;
int  i, naxes;

if (!SaveDialog->Execute()) return;

if ( (pointfile = fopen(SaveDialog->FileName.c_str(), "wt"))==NULL )
  {
  SimpleMsgBox("Could not open file");
  return;
  }

naxes = 0;
for (i=1; i<=10; i++) if (modcb[i]->Checked) naxes++;
if (naxes==0) return;

fprintf(pointfile,"%d  :number of axes\n", naxes);  //write naxes

//write addresses
for (i=1; i<=10; i++)
  if (modcb[i]->Checked) fprintf(pointfile,"%d ",i);
fprintf(pointfile,"  :axes addresses\n ");

//write speed, accel
for (i=1; i<=10; i++)     //use the first included module's speed & address
  if (modcb[i]->Checked)
    {
    fprintf(pointfile,"%10.3f %10.3f  :speed, accel\n", mod[i].max_speed, mod[i].accel); //write speed, accel
    break;
    }

fprintf(pointfile,"1 1  :number of points, segmented flag\n");  //write # points (=1), segmented flag (=1)

for (i=1; i<=10; i++)
  if (modcb[i]->Checked)
    {
    send_cmd(i, NOOP, 0, txtstr);       //update current position
    fprintf(pointfile,"%d ",PositionCounter);
    }

fprintf(pointfile,"  :point data\n");
fclose(pointfile);
}
//---------------------------------------------------------------------------

//---------------------------------------------------------------------------


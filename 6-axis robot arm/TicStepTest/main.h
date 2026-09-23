//---------------------------------------------------------------------------

#ifndef mainH
#define mainH
//---------------------------------------------------------------------------
#include <Classes.hpp>
#include <Controls.hpp>
#include <StdCtrls.hpp>
#include <Forms.hpp>
#include <ExtCtrls.hpp>
#include <Dialogs.hpp>
#include <ComCtrls.hpp>
#include "Joystick.hpp"
//---------------------------------------------------------------------------
class TMainForm : public TForm
{
__published:	// IDE-managed Components
        TRadioGroup *ComRG;
        TOpenDialog *OpenDialog;
        TSaveDialog *SaveDialog;
        TButton *ExitButton;
        TTimer *PollTimer;
        TRadioGroup *ModAddrGroup;
        TPanel *ControlsPanel;
        TButton *SingleStepFwdButton;
        TButton *SingleStepRevButton;
        TLabel *Label1;
        TComboBox *HoldCurComboBox;
        TLabel *Label3;
        TComboBox *RunCurComboBox;
        TRadioGroup *MicroStepRG;
        TLabel *Label4;
        TEdit *MotorStepsEdit;
        TButton *StopMotorButton;
        TButton *MotorOffButton;
        TLabel *Label8;
        TEdit *AccelEdit;
        TLabel *Label9;
        TEdit *MaxSpeedEdit;
        TTrackBar *CmdSpeedTrackbar;
        TLabel *Label10;
        TLabel *Label11;
        TLabel *Label12;
        TButton *RunSpeedButton;
        TLabel *ReloadLabel;
        TLabel *PositionLabel;
        TLabel *PosValLabel;
        TButton *PosClrButton;
        TShape *MovingShape;
        TLabel *Label6;
        TLabel *NumPathPointsLabel;
        TShape *SpeedModeShape;
        TTrackBar *CmdPosTrackbar;
        TEdit *MaxPosEdit;
        TEdit *MinPosEdit;
        TLabel *Label2;
        TLabel *Label13;
        TLabel *Label14;
        TShape *PosModeShape;
        TEdit *CmdPosEdit;
        TLabel *Label15;
        TButton *GoPosButton;
        TEdit *CmdSpeedEdit;
        TLabel *Label16;
        TButton *GoSpeedButton;
        TShape *LIM1Shape;
        TShape *LIM2Shape;
        TShape *FaultShape;
        TLabel *Lim2Lbl;
        TButton *StopSmoothButton;
        TBevel *Bevel2;
        TBevel *Bevel3;
        TBevel *Bevel4;
        TCheckBox *EnLimCkbox;
        TCheckBox *LimHiCkbox;
        TCheckBox *LimOffCkbox;
        TButton *SetAddressButton;
        TButton *SetCurrentButton;
        TLabel *Label5;
        TEdit *ModAddrEdit;
        TLabel *Label7;
        TEdit *GroupAddrEdit;
        TCheckBox *GroupLeaderCB;
        TBevel *Bevel1;
        TButton *RunFileButton;
        TJoystick *Joystick;
        TLabel *Label17;
        TShape *JoyShape;
        TBevel *Bevel5;
        TCheckBox *CheckBox1;
        TCheckBox *CheckBox2;
        TCheckBox *CheckBox3;
        TCheckBox *CheckBox4;
        TCheckBox *CheckBox5;
        TCheckBox *CheckBox6;
        TCheckBox *CheckBox7;
        TCheckBox *CheckBox8;
        TCheckBox *CheckBox9;
        TCheckBox *CheckBox10;
        TButton *RecordButton;
        void __fastcall ComRGClick(TObject *Sender);
        void __fastcall PollTimerTimer(TObject *Sender);
        void __fastcall ModAddrGroupClick(TObject *Sender);
        void __fastcall SingleStepFwdButtonClick(TObject *Sender);
        void __fastcall SingleStepRevButtonClick(TObject *Sender);
        void __fastcall PosClrButtonClick(TObject *Sender);
        void __fastcall FormActivate(TObject *Sender);
        void __fastcall StopMotorButtonClick(TObject *Sender);
        void __fastcall MotorOffButtonClick(TObject *Sender);
        void __fastcall RunSpeedButtonClick(TObject *Sender);
        void __fastcall ExitButtonClick(TObject *Sender);
        void __fastcall MotorStepsEditExit(TObject *Sender);
        void __fastcall MaxSpeedEditExit(TObject *Sender);
        void __fastcall AccelEditExit(TObject *Sender);
        void __fastcall CmdSpeedTrackbarChange(TObject *Sender);
        void __fastcall GoSpeedButtonClick(TObject *Sender);
        void __fastcall StopSmoothButtonClick(TObject *Sender);
        void __fastcall CmdSpeedTrackbarKeyPress(TObject *Sender,
          char &Key);
        void __fastcall GoPosButtonClick(TObject *Sender);
        void __fastcall CmdPosTrackbarChange(TObject *Sender);
        void __fastcall MinPosEditExit(TObject *Sender);
        void __fastcall EnLimCkboxClick(TObject *Sender);
        void __fastcall LimHiCkboxClick(TObject *Sender);
        void __fastcall LimOffCkboxClick(TObject *Sender);
        void __fastcall SetAddrButton2Click(TObject *Sender);
        void __fastcall SetCurrentButtonClick(TObject *Sender);
        void __fastcall SetAddressButtonClick(TObject *Sender);
        void __fastcall MicroStepRGClick(TObject *Sender);
        void __fastcall MaxPosEditExit(TObject *Sender);
        void __fastcall RunFileButtonClick(TObject *Sender);
        void __fastcall RecordButtonClick(TObject *Sender);
private:	// User declarations
public:		// User declarations
        __fastcall TMainForm(TComponent* Owner);
};
//---------------------------------------------------------------------------
extern PACKAGE TMainForm *MainForm;
//---------------------------------------------------------------------------
#endif

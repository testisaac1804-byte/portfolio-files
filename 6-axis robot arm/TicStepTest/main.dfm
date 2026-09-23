object MainForm: TMainForm
  Left = 1044
  Top = 415
  Width = 526
  Height = 527
  Caption = 'TicPath Stepper Test'
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'MS Sans Serif'
  Font.Style = []
  OldCreateOrder = False
  Position = poScreenCenter
  OnActivate = FormActivate
  PixelsPerInch = 96
  TextHeight = 13
  object Label5: TLabel
    Left = 16
    Top = 72
    Width = 68
    Height = 13
    Caption = 'Mod. Address:'
  end
  object Label7: TLabel
    Left = 152
    Top = 72
    Width = 73
    Height = 13
    Caption = 'Group Address:'
  end
  object Bevel1: TBevel
    Left = 16
    Top = 92
    Width = 465
    Height = 3
  end
  object Label17: TLabel
    Left = 40
    Top = 460
    Width = 85
    Height = 13
    Caption = 'Joystick Detected'
  end
  object JoyShape: TShape
    Left = 20
    Top = 460
    Width = 13
    Height = 13
    Hint = 'Hold joystick a button (1-10) and move Y-axis to control speed'
    Brush.Color = clGray
    ParentShowHint = False
    Shape = stCircle
    ShowHint = True
  end
  object ControlsPanel: TPanel
    Left = 8
    Top = 96
    Width = 489
    Height = 357
    BevelOuter = bvNone
    Color = clActiveBorder
    Enabled = False
    ParentShowHint = False
    ShowHint = False
    TabOrder = 3
    object Label1: TLabel
      Left = 8
      Top = 36
      Width = 25
      Height = 13
      Caption = 'Hold '
    end
    object Label3: TLabel
      Left = 104
      Top = 36
      Width = 20
      Height = 13
      Caption = 'Run'
    end
    object Label4: TLabel
      Left = 272
      Top = 76
      Width = 110
      Height = 13
      Caption = 'Motor Full Steps / Rev:'
    end
    object Label8: TLabel
      Left = 32
      Top = 108
      Width = 117
      Height = 13
      Caption = 'Acceleration (RPM/sec):'
    end
    object Label9: TLabel
      Left = 256
      Top = 108
      Width = 90
      Height = 13
      Caption = 'Max Speed (RPM):'
    end
    object Label10: TLabel
      Left = 32
      Top = 172
      Width = 29
      Height = 13
      Caption = '-100%'
    end
    object Label11: TLabel
      Left = 424
      Top = 172
      Width = 26
      Height = 13
      Caption = '100%'
    end
    object Label12: TLabel
      Left = 104
      Top = 148
      Width = 61
      Height = 13
      Caption = 'Speed Mode'
    end
    object ReloadLabel: TLabel
      Left = 200
      Top = 368
      Width = 60
      Height = 13
      Caption = 'ReloadLabel'
    end
    object PositionLabel: TLabel
      Left = 8
      Top = 8
      Width = 77
      Height = 13
      Caption = 'Current Position:'
    end
    object PosValLabel: TLabel
      Left = 88
      Top = 8
      Width = 6
      Height = 13
      Caption = '0'
    end
    object MovingShape: TShape
      Left = 196
      Top = 8
      Width = 13
      Height = 13
      Hint = 'Motor Moving Indicator'
      Brush.Color = clGray
      ParentShowHint = False
      Shape = stCircle
      ShowHint = True
    end
    object Label6: TLabel
      Left = 216
      Top = 8
      Width = 67
      Height = 13
      Caption = '# Path Points:'
    end
    object NumPathPointsLabel: TLabel
      Left = 288
      Top = 8
      Width = 6
      Height = 13
      Hint = '# Path Points left in internal  buffer'
      Caption = '0'
      ParentShowHint = False
      ShowHint = True
    end
    object SpeedModeShape: TShape
      Left = 84
      Top = 148
      Width = 13
      Height = 13
      Brush.Color = clGray
      Shape = stCircle
    end
    object Label2: TLabel
      Left = 16
      Top = 224
      Width = 41
      Height = 13
      Caption = 'Min  Pos'
    end
    object Label13: TLabel
      Left = 424
      Top = 224
      Width = 44
      Height = 13
      Caption = 'Max  Pos'
    end
    object Label14: TLabel
      Left = 104
      Top = 216
      Width = 67
      Height = 13
      Caption = 'Position Mode'
    end
    object PosModeShape: TShape
      Left = 84
      Top = 216
      Width = 13
      Height = 13
      Brush.Color = clGray
      Shape = stCircle
    end
    object Label15: TLabel
      Left = 256
      Top = 216
      Width = 87
      Height = 13
      Caption = 'Command Position'
    end
    object Label16: TLabel
      Left = 256
      Top = 148
      Width = 81
      Height = 13
      Caption = 'Command Speed'
    end
    object LIM1Shape: TShape
      Left = 316
      Top = 8
      Width = 13
      Height = 13
      Hint = 'FWD Limit Switch indicator'
      Brush.Color = clGray
      ParentShowHint = False
      Shape = stCircle
      ShowHint = True
    end
    object LIM2Shape: TShape
      Left = 380
      Top = 8
      Width = 13
      Height = 13
      Hint = 'REV Limit Switch indicator'
      Brush.Color = clGray
      ParentShowHint = False
      Shape = stCircle
      ShowHint = True
    end
    object FaultShape: TShape
      Left = 436
      Top = 8
      Width = 13
      Height = 13
      Hint = 'Driver Fault indicator'
      Brush.Color = clGray
      ParentShowHint = False
      Shape = stCircle
      ShowHint = True
    end
    object TLabel
      Left = 332
      Top = 8
      Width = 24
      Height = 13
      Caption = 'LIM1'
    end
    object Lim2Lbl: TLabel
      Left = 396
      Top = 8
      Width = 24
      Height = 13
      Caption = 'LIM2'
    end
    object TLabel
      Left = 452
      Top = 8
      Width = 23
      Height = 13
      Caption = 'Fault'
    end
    object Bevel2: TBevel
      Left = 8
      Top = 204
      Width = 465
      Height = 3
    end
    object Bevel3: TBevel
      Left = 8
      Top = 136
      Width = 465
      Height = 3
    end
    object Bevel4: TBevel
      Left = 8
      Top = 268
      Width = 465
      Height = 3
    end
    object Bevel5: TBevel
      Left = 8
      Top = 312
      Width = 465
      Height = 3
    end
    object SingleStepFwdButton: TButton
      Left = 168
      Top = 284
      Width = 73
      Height = 21
      Hint = 'Take a single step forwards'
      Caption = 'Single Step >'
      ParentShowHint = False
      ShowHint = True
      TabOrder = 0
      OnClick = SingleStepFwdButtonClick
    end
    object SingleStepRevButton: TButton
      Left = 88
      Top = 284
      Width = 73
      Height = 21
      Hint = 'Take a single step backwards'
      Caption = '< Single Step'
      ParentShowHint = False
      ShowHint = True
      TabOrder = 1
      OnClick = SingleStepRevButtonClick
    end
    object HoldCurComboBox: TComboBox
      Left = 32
      Top = 32
      Width = 65
      Height = 21
      Hint = 'Motor current while not moving'
      ItemHeight = 13
      ParentShowHint = False
      ShowHint = True
      TabOrder = 2
      Items.Strings = (
        '1 mA'
        '174 mA'
        '343 mA'
        '495 mA'
        '634 mA'
        '762 mA'
        '880 mA'
        '990 mA'
        '1092 mA'
        '1189 mA'
        '1281 mA'
        '1368 mA'
        '1452 mA'
        '1532 mA'
        '1611 mA'
        '1687 mA'
        '1762 mA'
        '1835 mA'
        '1909 mA'
        '1982 mA'
        '2056 mA'
        '2131 mA'
        '2207 mA'
        '2285 mA'
        '2366 mA'
        '2451 mA'
        '2540 mA'
        '2634 mA'
        '2734 mA'
        '2843 mA'
        '2962 mA'
        '3093 mA')
    end
    object RunCurComboBox: TComboBox
      Left = 128
      Top = 32
      Width = 65
      Height = 21
      Hint = 'Motor current while moving'
      ItemHeight = 13
      ParentShowHint = False
      ShowHint = True
      TabOrder = 3
      Items.Strings = (
        '1 mA'
        '174 mA'
        '343 mA'
        '495 mA'
        '634 mA'
        '762 mA'
        '880 mA'
        '990 mA'
        '1092 mA'
        '1189 mA'
        '1281 mA'
        '1368 mA'
        '1452 mA'
        '1532 mA'
        '1611 mA'
        '1687 mA'
        '1762 mA'
        '1835 mA'
        '1909 mA'
        '1982 mA'
        '2056 mA'
        '2131 mA'
        '2207 mA'
        '2285 mA'
        '2366 mA'
        '2451 mA'
        '2540 mA'
        '2634 mA'
        '2734 mA'
        '2843 mA'
        '2962 mA'
        '3093 mA')
    end
    object MicroStepRG: TRadioGroup
      Left = 24
      Top = 60
      Width = 209
      Height = 37
      Hint = 'Set microstepping rate'
      Caption = 'Set Microstepping Rate'
      Columns = 4
      ItemIndex = 3
      Items.Strings = (
        '1x'
        '2x'
        '4x'
        '8x')
      ParentShowHint = False
      ShowHint = True
      TabOrder = 4
      OnClick = MicroStepRGClick
    end
    object MotorStepsEdit: TEdit
      Left = 392
      Top = 72
      Width = 65
      Height = 21
      Hint = 'Motor resolution'
      ParentShowHint = False
      ShowHint = True
      TabOrder = 5
      Text = '200'
      OnExit = MotorStepsEditExit
    end
    object StopMotorButton: TButton
      Left = 344
      Top = 284
      Width = 67
      Height = 21
      Hint = 'Stop motor abruprly'
      Caption = 'Stop Abrupt'
      ParentShowHint = False
      ShowHint = True
      TabOrder = 6
      OnClick = StopMotorButtonClick
    end
    object MotorOffButton: TButton
      Left = 416
      Top = 284
      Width = 67
      Height = 21
      Hint = 'Turn off motor driver'
      Caption = 'Motor Off'
      ParentShowHint = False
      ShowHint = True
      TabOrder = 7
      OnClick = MotorOffButtonClick
    end
    object AccelEdit: TEdit
      Left = 160
      Top = 104
      Width = 73
      Height = 21
      Hint = 'Max acceleration/deceleration'
      ParentShowHint = False
      ShowHint = True
      TabOrder = 8
      Text = '150'
      OnExit = AccelEditExit
    end
    object MaxSpeedEdit: TEdit
      Left = 352
      Top = 104
      Width = 73
      Height = 21
      Hint = 'Max motor speed'
      ParentShowHint = False
      ShowHint = True
      TabOrder = 9
      Text = '300'
      OnExit = MaxSpeedEditExit
    end
    object CmdSpeedTrackbar: TTrackBar
      Left = 72
      Top = 168
      Width = 345
      Height = 25
      Hint = 'Drive at percentage of max speed (may use joystick as well)'
      Max = 20
      Min = -20
      Orientation = trHorizontal
      ParentShowHint = False
      PageSize = 1
      Frequency = 1
      Position = 0
      SelEnd = 0
      SelStart = 0
      ShowHint = True
      TabOrder = 10
      TickMarks = tmBottomRight
      TickStyle = tsAuto
      OnChange = CmdSpeedTrackbarChange
      OnKeyPress = CmdSpeedTrackbarKeyPress
    end
    object RunSpeedButton: TButton
      Left = 336
      Top = 360
      Width = 81
      Height = 25
      Caption = 'Run at Speed'
      TabOrder = 11
      OnClick = RunSpeedButtonClick
    end
    object PosClrButton: TButton
      Left = 140
      Top = 4
      Width = 41
      Height = 21
      Hint = 'Clear Position Counter'
      Caption = 'Clear'
      ParentShowHint = False
      ShowHint = True
      TabOrder = 12
      OnClick = PosClrButtonClick
    end
    object CmdPosTrackbar: TTrackBar
      Left = 72
      Top = 236
      Width = 345
      Height = 25
      Hint = 'Move within min-max  position range'
      Max = 40
      Orientation = trHorizontal
      ParentShowHint = False
      PageSize = 1
      Frequency = 1
      Position = 20
      SelEnd = 0
      SelStart = 0
      ShowHint = True
      TabOrder = 13
      TickMarks = tmBottomRight
      TickStyle = tsAuto
      OnChange = CmdPosTrackbarChange
    end
    object MaxPosEdit: TEdit
      Left = 416
      Top = 236
      Width = 65
      Height = 21
      Hint = 'Maximum of position range'
      ParentShowHint = False
      ShowHint = True
      TabOrder = 14
      Text = '1000'
      OnExit = MaxPosEditExit
    end
    object MinPosEdit: TEdit
      Left = 8
      Top = 236
      Width = 65
      Height = 21
      Hint = 'Minimum of position range'
      ParentShowHint = False
      ShowHint = True
      TabOrder = 15
      Text = '-1000'
      OnExit = MinPosEditExit
    end
    object CmdPosEdit: TEdit
      Left = 184
      Top = 212
      Width = 65
      Height = 21
      Hint = 'Enter goal position'
      ParentShowHint = False
      ShowHint = True
      TabOrder = 16
      Text = '0'
    end
    object GoPosButton: TButton
      Left = 352
      Top = 212
      Width = 33
      Height = 21
      Hint = 'Go to commanded position'
      Caption = 'Go'
      ParentShowHint = False
      ShowHint = True
      TabOrder = 17
      OnClick = GoPosButtonClick
    end
    object CmdSpeedEdit: TEdit
      Left = 184
      Top = 144
      Width = 65
      Height = 21
      Hint = 'Enter goal command speed'
      ParentShowHint = False
      ShowHint = True
      TabOrder = 18
      Text = '0'
    end
    object GoSpeedButton: TButton
      Left = 352
      Top = 144
      Width = 33
      Height = 21
      Hint = 'Set commanded speed'
      Caption = 'Go'
      ParentShowHint = False
      ShowHint = True
      TabOrder = 19
      OnClick = GoSpeedButtonClick
    end
    object StopSmoothButton: TButton
      Left = 264
      Top = 284
      Width = 75
      Height = 21
      Hint = 'Decelerate to a stop'
      Caption = 'Stop Smooth'
      ParentShowHint = False
      ShowHint = True
      TabOrder = 20
      OnClick = StopSmoothButtonClick
    end
    object EnLimCkbox: TCheckBox
      Left = 304
      Top = 28
      Width = 81
      Height = 17
      Hint = 'Enable Limit Switch autostop'
      Caption = 'Enable Limits'
      ParentShowHint = False
      ShowHint = True
      TabOrder = 21
      OnClick = EnLimCkboxClick
    end
    object LimHiCkbox: TCheckBox
      Left = 392
      Top = 28
      Width = 89
      Height = 17
      Hint = 'Limit Switches are active HIGH'
      Caption = 'Lim Active HI'
      ParentShowHint = False
      ShowHint = True
      TabOrder = 22
      OnClick = LimHiCkboxClick
    end
    object LimOffCkbox: TCheckBox
      Left = 304
      Top = 44
      Width = 113
      Height = 17
      Hint = 'Turn off driver when limit hit'
      Caption = 'Motor Off on Limit'
      ParentShowHint = False
      ShowHint = True
      TabOrder = 23
      OnClick = LimOffCkboxClick
    end
    object SetCurrentButton: TButton
      Left = 200
      Top = 32
      Width = 75
      Height = 21
      Hint = 'Must click to set current levels'
      Caption = 'Set Current'
      ParentShowHint = False
      ShowHint = True
      TabOrder = 24
      OnClick = SetCurrentButtonClick
    end
    object RunFileButton: TButton
      Left = 8
      Top = 284
      Width = 59
      Height = 21
      Hint = 'Run multiaxis trajectory file (see RunFile.pdf for details)'
      Caption = 'Run File'
      ParentShowHint = False
      ShowHint = True
      TabOrder = 25
      OnClick = RunFileButtonClick
    end
    object CheckBox1: TCheckBox
      Left = 112
      Top = 320
      Width = 49
      Height = 17
      Caption = 'Mod1'
      TabOrder = 26
    end
    object CheckBox2: TCheckBox
      Left = 112
      Top = 336
      Width = 49
      Height = 17
      Caption = 'Mod2'
      TabOrder = 27
    end
    object CheckBox3: TCheckBox
      Left = 168
      Top = 320
      Width = 49
      Height = 17
      Caption = 'Mod3'
      TabOrder = 28
    end
    object CheckBox4: TCheckBox
      Left = 168
      Top = 336
      Width = 49
      Height = 17
      Caption = 'Mod4'
      TabOrder = 29
    end
    object CheckBox5: TCheckBox
      Left = 224
      Top = 320
      Width = 49
      Height = 17
      Caption = 'Mod5'
      TabOrder = 30
    end
    object CheckBox6: TCheckBox
      Left = 224
      Top = 336
      Width = 49
      Height = 17
      Caption = 'Mod6'
      TabOrder = 31
    end
    object CheckBox7: TCheckBox
      Left = 280
      Top = 320
      Width = 49
      Height = 17
      Caption = 'Mod7'
      TabOrder = 32
    end
    object CheckBox8: TCheckBox
      Left = 280
      Top = 336
      Width = 49
      Height = 17
      Caption = 'Mod8'
      TabOrder = 33
    end
    object CheckBox9: TCheckBox
      Left = 336
      Top = 320
      Width = 49
      Height = 17
      Caption = 'Mod9'
      TabOrder = 34
    end
    object CheckBox10: TCheckBox
      Left = 336
      Top = 336
      Width = 57
      Height = 17
      Caption = 'Mod10'
      TabOrder = 35
    end
    object RecordButton: TButton
      Left = 8
      Top = 324
      Width = 81
      Height = 21
      Hint = 'Record the positions of the selected modules in a file'
      Caption = 'Record Point'
      ParentShowHint = False
      ShowHint = True
      TabOrder = 36
      OnClick = RecordButtonClick
    end
  end
  object ComRG: TRadioGroup
    Left = 8
    Top = 4
    Width = 241
    Height = 61
    Hint = 'Select COM port  first'
    Caption = 'COM Port'
    Columns = 4
    Items.Strings = (
      'COM1'
      'COM2'
      'COM3'
      'COM4'
      'COM5'
      'COM6'
      'COM7'
      'COM8')
    ParentShowHint = False
    ShowHint = True
    TabOrder = 0
    OnClick = ComRGClick
  end
  object ExitButton: TButton
    Left = 352
    Top = 456
    Width = 137
    Height = 21
    Caption = 'Exit'
    TabOrder = 1
    OnClick = ExitButtonClick
  end
  object ModAddrGroup: TRadioGroup
    Left = 256
    Top = 4
    Width = 241
    Height = 61
    Hint = 'Select Module to Operate (may use joystick buttonts to select)'
    Caption = 'Module Address'
    Color = clActiveBorder
    Columns = 5
    Enabled = False
    Items.Strings = (
      '1'
      '2'
      '3'
      '4'
      '5'
      '6'
      '7'
      '8'
      '9'
      '10')
    ParentColor = False
    ParentShowHint = False
    ShowHint = True
    TabOrder = 2
    OnClick = ModAddrGroupClick
  end
  object SetAddressButton: TButton
    Left = 392
    Top = 68
    Width = 89
    Height = 21
    Hint = 'Must click to change address parameters'
    Caption = 'Change Address'
    Enabled = False
    ParentShowHint = False
    ShowHint = True
    TabOrder = 4
    OnClick = SetAddressButtonClick
  end
  object ModAddrEdit: TEdit
    Left = 88
    Top = 68
    Width = 49
    Height = 21
    Hint = 'Enter new address to store in EEPROM'
    ParentShowHint = False
    ShowHint = True
    TabOrder = 5
    Text = '1'
  end
  object GroupAddrEdit: TEdit
    Left = 232
    Top = 68
    Width = 49
    Height = 21
    Hint = 'Enter Group Address (not permanent)'
    ParentShowHint = False
    ShowHint = True
    TabOrder = 6
    Text = '128'
  end
  object GroupLeaderCB: TCheckBox
    Left = 288
    Top = 70
    Width = 97
    Height = 17
    Hint = 'Select Group Leader (not permanent)'
    Caption = 'Group Leader'
    ParentShowHint = False
    ShowHint = True
    TabOrder = 7
  end
  object OpenDialog: TOpenDialog
    DefaultExt = 'hex'
    Filter = 'Tex files (*.txt)|*.txt|All Files|*.*'
    Left = 248
    Top = 456
  end
  object SaveDialog: TSaveDialog
    DefaultExt = 'dmp'
    Filter = 'Path Points File (*.txt)|*.txt'
    Left = 280
    Top = 456
  end
  object PollTimer: TTimer
    Enabled = False
    Interval = 100
    OnTimer = PollTimerTimer
    Left = 216
    Top = 456
  end
  object Joystick: TJoystick
    EventMode = emPolling
    PollingPeriod = 10
    Left = 184
    Top = 456
  end
end

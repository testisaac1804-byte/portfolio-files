//---------------------------------------------------------------------------

#include <vcl.h>
#pragma hdrstop
USERES("TicStepTest.res");
USEFORM("main.cpp", MainForm);
USEUNIT("sio_util.cpp");
//---------------------------------------------------------------------------
WINAPI WinMain(HINSTANCE, HINSTANCE, LPSTR, int)
{
        try
        {
                 Application->Initialize();
                 Application->CreateForm(__classid(TMainForm), &MainForm);
                 Application->Run();
        }
        catch (Exception &exception)
        {
                 Application->ShowException(&exception);
        }
        return 0;
}
//---------------------------------------------------------------------------

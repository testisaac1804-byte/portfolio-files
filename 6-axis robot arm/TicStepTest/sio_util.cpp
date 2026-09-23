//---------------------------------------------------------------------------
#include <vcl\vcl.h>
#pragma hdrstop

#include <stdio.h>
#include "sio_util.h"
//---------------------------------------------------------------------------
// Global variables

//---------------------------------------------------------------------------
extern "C" WINAPI __declspec(dllexport) int SimpleMsgBox(char *msgstr)
{
return MessageBox(NULL, msgstr,"",MB_TASKMODAL | MB_SETFOREGROUND);
}

//---------------------------------------------------------------------------
//Opens "COM1:" thru "COM4:", returns a handle to be used by other
//SIO operations.  Sets up read and write timeouts.
//*** Add parameter for baud rate ***
extern "C" WINAPI __declspec(dllexport) HANDLE SioOpen(char *name, unsigned int baudrate)
{
BOOL RetStat;
COMMCONFIG cc;
COMMTIMEOUTS ct;
HANDLE ComHandle;
DWORD winrate;
char msgstr[50];

//Open COM port as a file
ComHandle = CreateFile(name, GENERIC_READ | GENERIC_WRITE ,0, NULL,
			           OPEN_EXISTING, FILE_ATTRIBUTE_NORMAL , NULL);


while (TRUE)
	{
	if (ComHandle == INVALID_HANDLE_VALUE)
		{
        sprintf(msgstr,"%s failed to open",name);
		SimpleMsgBox(msgstr);
        break;
    	}

    switch (baudrate) {
		case 9600: 		winrate = CBR_9600; break;
		case 19200: 	winrate = CBR_19200; break;
		case 38400: 	winrate = CBR_38400; break;
		case 57600: 	winrate = CBR_57600; break;
		case 115200: 	winrate = CBR_115200; break;
		case 230400: 	winrate = 230400; break;
    	default:		SimpleMsgBox("Baud rate not supported - using default of 19200");
    					winrate = CBR_19200;
    	}

    //Fill in COM port config. structure & set config.
    cc.dwSize = sizeof(DCB) + sizeof(WCHAR) + 20;
    cc.wVersion = 1;

    cc.dcb.DCBlength = sizeof(DCB);
    cc.dcb.BaudRate = winrate;
    cc.dcb.fBinary = 1;
    cc.dcb.fParity = 0;
    cc.dcb.fOutxCtsFlow = 0;
    cc.dcb.fOutxDsrFlow = 0;
    cc.dcb.fDtrControl = DTR_CONTROL_DISABLE;
    cc.dcb.fDsrSensitivity = 0;
    cc.dcb.fTXContinueOnXoff = 0;
    cc.dcb.fOutX = 0;
    cc.dcb.fInX = 0;
    cc.dcb.fErrorChar = 0;
    cc.dcb.fNull = 0;
    cc.dcb.fRtsControl = RTS_CONTROL_DISABLE;
    cc.dcb.fAbortOnError = 0;
    cc.dcb.XonLim = 100;
    cc.dcb.XoffLim = 100;
    cc.dcb.ByteSize = 8;
    cc.dcb.Parity = NOPARITY;
    cc.dcb.StopBits = ONESTOPBIT;
    cc.dcb.XonChar = 'x';
    cc.dcb.XoffChar = 'y';
    cc.dcb.ErrorChar = 0;
    cc.dcb.EofChar = 0;
    cc.dcb.EvtChar = 0;

    cc.dwProviderSubType = PST_RS232;
    cc.dwProviderOffset = 0;
    cc.dwProviderSize = 0;

    RetStat = SetCommConfig(ComHandle, &cc, sizeof(cc));
	if (RetStat == 0)
    	{
    	SimpleMsgBox("Failed to set COMM configuration");
        break;
        }

    //Set read/write timeout values for the file
    ct.ReadIntervalTimeout = 0; //MAXDWORD;  		//ignore interval timing
    ct.ReadTotalTimeoutMultiplier = 0; //2; 	//2
    ct.ReadTotalTimeoutConstant = 50;  		//use a total timeout of 50 msec
    ct.WriteTotalTimeoutMultiplier = 0; //2;	//2
    ct.WriteTotalTimeoutConstant = 50;	//plus additional time

	RetStat = SetCommTimeouts(ComHandle, &ct);
    if (RetStat == 0)
    	{
        SimpleMsgBox("Failed to set Comm timeouts");
        break;
        }

    break;
	}

return(ComHandle);
}
//---------------------------------------------------------------------------
//Change the baud rate to the specified values.  Valid rates are:
//9600, 19200, 38400, 57600, 115200.  Returns TRUE on success.
extern "C" WINAPI __declspec(dllexport) BOOL SioChangeBaud(HANDLE ComPort, unsigned int baudrate)
{
BOOL RetStat;
DWORD winrate;
DCB cs;

RetStat = GetCommState(ComPort, &cs);
if (RetStat == false) return RetStat;
switch (baudrate) {
	case 9600: 		winrate = CBR_9600; break;
	case 19200: 	winrate = CBR_19200; break;
	case 38400: 	winrate = CBR_38400; break;
	case 57600: 	winrate = CBR_57600; break;
	case 115200: 	winrate = CBR_115200; break;
	case 230400: 	winrate = 230400; break;
    default:		SimpleMsgBox("Baud rate not supported");
    				return false;
    }
cs.BaudRate = winrate;
RetStat = SetCommState(ComPort, &cs);
if (RetStat == false) return RetStat;
return true;
}

//---------------------------------------------------------------------------
//Write out N chars to the comport, returns only after chas have been sent
//return 0 on failure, non-zero on success
extern "C" WINAPI __declspec(dllexport) BOOL SioPutChars(HANDLE ComPort, char *stuff, int n)
{
BOOL RetStat;
DWORD nums;

RetStat = WriteFile(ComPort, stuff,n, &nums, NULL);
if (RetStat == 0) SimpleMsgBox("SioPutChars failed");
return RetStat;
}
//---------------------------------------------------------------------------
//Read n chars into the array stuff (not null terminated)
//Function returns the number of chars actually read.
extern "C" WINAPI __declspec(dllexport) DWORD SioGetChars(HANDLE ComPort, char *stuff, int n)
{
BOOL RetStat;
DWORD numread;

RetStat = ReadFile(ComPort, stuff, n, &numread, NULL);
if (RetStat == 0) SimpleMsgBox("SioReadChars failed");

return numread;
}
//---------------------------------------------------------------------------
//Returns the number of chars in a port's input buffer
extern "C" WINAPI __declspec(dllexport) DWORD SioTest(HANDLE ComPort)
{
COMSTAT cs;
DWORD Errors;
BOOL RetStat;

RetStat = ClearCommError(ComPort, &Errors, &cs);
if (RetStat == 0) SimpleMsgBox("SioTest failed");
return cs.cbInQue;
}
//---------------------------------------------------------------------------
//Purge all chars from the input buffer
extern "C" WINAPI __declspec(dllexport) BOOL SioClrInbuf(HANDLE ComPort)
{
BOOL RetStat;

RetStat = PurgeComm(ComPort, PURGE_RXCLEAR);
if (RetStat == 0) SimpleMsgBox("SioClrInbuf failed");

return RetStat;
}
//---------------------------------------------------------------------------
//Close a previously opened COM port
extern "C" WINAPI __declspec(dllexport) BOOL SioClose(HANDLE ComPort)
{
return(CloseHandle(ComPort));
}
//---------------------------------------------------------------------------


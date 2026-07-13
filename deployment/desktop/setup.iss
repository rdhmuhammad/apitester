; Inno Setup Script for Apitester Desktop
; Compile with: ISCC.exe setup.iss

#define MyAppName "Apitester"
#define MyAppVersion "0.0.1"
#define MyAppPublisher "Ridho Muhammad"
#define MyAppURL "https://apitester.app"

[Setup]
AppId={{A1B2C3D4-E5F6-7890-ABCD-EF1234567890}
AppName={#MyAppName}
AppVersion={#MyAppVersion}
AppPublisher={#MyAppPublisher}
AppCopyright=Ridho Muhammad
AppPublisherURL={#MyAppURL}
DefaultDirName=C:\Program Files\{#MyAppName}
DefaultGroupName={#MyAppName}
OutputDir=installer
OutputBaseFilename=Apitester-Setup
Compression=lzma
SolidCompression=yes
UninstallDisplayIcon={app}\app.ico
SetupIconFile=build\favicon.ico
PrivilegesRequired=admin

[Languages]
Name: "english"; MessagesFile: "compiler:Default.isl"

[Tasks]
Name: "desktopicon"; Description: "Create a &desktop shortcut"; GroupDescription: "Additional shortcuts:"; Flags: checkedonce

[Files]
Source: "build\*"; DestDir: "{app}"; Flags: ignoreversion recursesubdirs createallsubdirs
Source: "..\..\.env.prod"; DestDir: "{app}"

[Dirs]
Name: "{app}\resource\db"

[Icons]
Name: "{group}\{#MyAppName}"; Filename: "{app}\Apitester.exe"; WorkingDir: "{app}"
Name: "{commondesktop}\{#MyAppName}"; Filename: "{app}\Apitester.exe"; WorkingDir: "{app}"; Tasks: desktopicon

[Run]
Filename: "{sys}\sc.exe"; Parameters: "create apitester-backend binPath= ""{app}\apitester-backend.exe -env {app}\.env.prod"" start= auto"; StatusMsg: "Registering backend service..."; Flags: runhidden
Filename: "{sys}\sc.exe"; Parameters: "start apitester-backend"; StatusMsg: "Starting backend service..."; Flags: runhidden
Filename: "{app}\Apitester.exe"; Description: "Launch {#MyAppName}"; Flags: postinstall nowait skipifsilent shellexec

[UninstallRun]
Filename: "{sys}\sc.exe"; Parameters: "stop apitester-backend"; Flags: runhidden
Filename: "{sys}\sc.exe"; Parameters: "delete apitester-backend"; Flags: runhidden

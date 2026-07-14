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
Name: "{group}\{#MyAppName}"; Filename: "{app}\apitester.exe"; WorkingDir: "{app}"
Name: "{commondesktop}\{#MyAppName}"; Filename: "{app}\apitester.exe"; WorkingDir: "{app}"; Tasks: desktopicon

[Run]
Filename: "{sys}\sc.exe"; Parameters: "create Apitester-backend binPath= ""{app}\apitester-backend.exe --env """"{app}\.env.prod"""""" start= auto"; StatusMsg: "Registering backend service..."; Flags: runhidden
Filename: "{sys}\sc.exe"; Parameters: "start Apitester-backend"; StatusMsg: "Starting backend service..."; Flags: runhidden
Filename: "{app}\apitester.exe"; Description: "Launch {#MyAppName}"; Flags: postinstall nowait skipifsilent shellexec

[Code]
var
  RemoveData: Boolean;

procedure CurUninstallStepChanged(CurUninstallStep: TUninstallStep);
begin
  if CurUninstallStep = usUninstall then
    RemoveData := (MsgBox('Remove all Apitester application data (logs and saved data)?',
      mbConfirmation, MB_YESNO) = IDYES);

  if CurUninstallStep = usPostUninstall then
  begin
    if RemoveData then
      DelTree(ExpandConstant('{commonappdata}\Apitester'), True, True, True);
  end;
end;

[UninstallRun]
Filename: "{sys}\sc.exe"; Parameters: "stop Apitester-backend"; Flags: runhidden
Filename: "{sys}\sc.exe"; Parameters: "delete Apitester-backend"; Flags: runhidden

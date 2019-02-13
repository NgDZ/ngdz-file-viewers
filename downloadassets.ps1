New-Item .\dist -ItemType Directory -Force 
New-Item .\dist\pdf -ItemType Directory -Force 
$ProgressPreference="SilentlyContinue"
# pdf viewer fix get last download url 
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

Invoke-WebRequest -Uri "https://github.com/mozilla/pdf.js/releases/download/v2.0.943/pdfjs-2.0.943-dist.zip" -OutFile .\assets\pdf\pdfjs-dist.zip
Expand-Archive ".\assets\pdf\pdfjs-dist.zip" -DestinationPath .\assets\pdf -Force
$ProgressPreference="Continue"
Remove-Item .\dist -Recurse
New-Item .\dist -ItemType Directory -Force 
New-Item .\dist\build -ItemType Directory -Force 
New-Item .\dist\pdf -ItemType Directory -Force 
# code

New-Item .\dist\code -ItemType Directory -Force 
Copy-Item .\node_modules\monaco-editor\min\vs .\dist\code -Recurse -Force  
Copy-Item .\src-code\code.html .\dist\code -Recurse -Force
Copy-Item .\src-code\code.html .\dist\code\index.html -Recurse -Force
# pdf


Copy-Item .\assets\pdf\web\images .\dist\pdf\ -Recurse -Force
 
Copy-Item .\node_modules\pdfjs-dist\build\pdf.min.js .\dist\build\pdf.js
Copy-Item .\node_modules\pdfjs-dist\build\pdf.worker.min.js .\dist\build\pdf.worker.js
Copy-Item .\src-pdf\* .\dist\pdf\ -Recurse

 
.\node_modules\.bin\uglifyjs .\src-pdf\viewer.js -o .\dist\pdf\viewer.js
Copy-Item .\dist\pdf\viewer.html .\dist\pdf\index.html

# HLM
Get-ChildItem .\dist\*.map -Recurse | Remove-Item
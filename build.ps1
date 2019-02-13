Remove-Item .\dist -Recurse
New-Item .\dist -ItemType Directory -Force 
New-Item .\dist\build -ItemType Directory -Force 
New-Item .\dist\pdf -ItemType Directory -Force 
# code

New-Item .\dist\code -ItemType Directory -Force 
Copy-Item .\node_modules\monaco-editor\min\vs .\dist\code -Recurse -Force
Copy-Item .\node_modules\monaco-editor\min-maps\vs .\dist\code\maps -Recurse -Force
Copy-Item .\inner.code.html .\dist\code -Recurse -Force
Copy-Item .\code.html .\dist\code -Recurse -Force
# pdf


Copy-Item .\*.pdf .\dist\ -Recurse
Copy-Item .\assets\pdf\web\images .\dist\pdf\ -Recurse -Force
 
Copy-Item .\node_modules\pdfjs-dist\build\pdf.min.js .\dist\build\pdf.js
Copy-Item .\node_modules\pdfjs-dist\build\pdf.worker.min.js .\dist\build\pdf.worker.js
Copy-Item .\pdf\* .\dist\pdf\ -Recurse

Copy-Item .\dist\
.\node_modules\.bin\uglifyjs .\pdf\viewer.js -o .\dist\pdf\viewer.js
Copy-Item .\dist\pdf\viewer.html .\dist\pdf\index.htm

# HLM
Get-ChildItem .\dist\*.map -Recurse | Remove-Item



Remove-Item .\dist -Recurse
New-Item .\dist -ItemType Directory -Force 
New-Item .\dist\pdf -ItemType Directory -Force 
New-Item .\dist\build -ItemType Directory -Force 
# code



# pdf
Copy-Item .\assets\pdf\web\images .\dist\pdf\ -Recurse -Force
 
Copy-Item .\node_modules\pdfjs-dist\build\pdf.min.js .\dist\build\pdf.js
Copy-Item .\node_modules\pdfjs-dist\build\pdf.worker.min.js .\dist\build\pdf.worker.js
Copy-Item .\pdf\* .\dist\pdf\ -Recurse
.\node_modules\.bin\uglifyjs .\assets\pdf\web\viewer.js -o .\dist\pdf\viewer.js
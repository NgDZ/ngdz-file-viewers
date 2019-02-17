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

# Copy-Item  .\src-pdf\viewer.js  .\dist\pdf\viewer.js
.\node_modules\.bin\uglifyjs .\src-pdf\viewer.js -o .\dist\pdf\viewer.js
Copy-Item .\dist\pdf\viewer.html .\dist\pdf\index.html

Copy-Item .\src-browser\* .\dist\ -Recurse
.\node_modules\.bin\uglifyjs .\dist\browser.js -o .\dist\browser.js
Move-Item .\dist\pdf\toolbarButton-download.png .\dist\pdf\images\ -Force
# Image 
Copy-Item .\node_modules\viewerjs\dist\viewer.min.css .\dist\img\
Copy-Item .\node_modules\viewerjs\dist\viewer.min.js  .\dist\img\

# Videos 
Copy-Item .\node_modules\video.js\dist\video.min.js .\dist\video\
Copy-Item .\node_modules\video.js\dist\video-js.min.css  .\dist\video\
Copy-Item .\node_modules\video.js\dist\font\ .\dist\video\ -Recurse
Copy-Item .\node_modules\video.js\dist\lang\ .\dist\video\ -Recurse
Get-ChildItem .\dist\video\lang\ -Exclude ar.*, fr.*, en.* -Recurse | Remove-Item
# cleanup
Get-ChildItem .\dist\*.map -Recurse | Remove-Item

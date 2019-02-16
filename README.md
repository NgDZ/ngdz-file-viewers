# Brower Files Viewers

## PDF Viwer

pdf\viewer.html?file=\a.pdf&locale=fr

## CODE Viwer

code\code.html?file=foo.cpp&extension=.cpp

## Image Viwer

img\index.html?file=/image.jpg

## Video player

video\index.html?file=/video.mp4

## Browser min version

```html
<script>
  var $buoop = {
    required: {
      e: 18, //IE
      f: 61, //Firefox
      o: 53, //Opera
      s: 10, //Safari
      c: 68 //Chrome
    },
    api: 2019.02,
    burl: 'https://www.google.com/chrome/?standalone=1'
  };
  function $buo_f() {
    var e = document.createElement('script');
    e.src = './browser.js';
    document.body.appendChild(e);
  }
  try {
    document.addEventListener('DOMContentLoaded', $buo_f, false);
  } catch (e) {
    window.attachEvent('onload', $buo_f);
  }
</script>
```

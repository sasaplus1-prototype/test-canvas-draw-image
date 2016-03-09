(function(){

  'use strict';

  var srcWidth = document.getElementById('js-src-width'),
      srcHeight = document.getElementById('js-src-height'),
      destWidth = document.getElementById('js-dest-width'),
      destHeight = document.getElementById('js-dest-height');

  var sx = document.getElementById('js-sx'),
      sy = document.getElementById('js-sy'),
      sw = document.getElementById('js-sw'),
      sh = document.getElementById('js-sh'),
      dx = document.getElementById('js-dx'),
      dy = document.getElementById('js-dy'),
      dw = document.getElementById('js-dw'),
      dh = document.getElementById('js-dh');

  var drawImage = document.getElementById('js-draw-image'),
      errorMessage = document.getElementById('js-error-message');

  var srcCanvas = document.getElementById('js-src-canvas'),
      destCanvas = document.getElementById('js-dest-canvas');

  var image = new Image();

  image.src = 'image.jpg';

  drawImage.addEventListener('click', function() {
    var srcContext, destContext;

    srcCanvas.width = parseInt(srcWidth.value, 10);
    srcCanvas.height = parseInt(srcHeight.value, 10);
    srcContext = srcCanvas.getContext('2d');

    srcContext.drawImage(image, 0, 0);

    destCanvas.width = parseInt(destWidth.value, 10);
    destCanvas.height = parseInt(destHeight.value, 10);
    destContext = destCanvas.getContext('2d');

    errorMessage.innerHTML = '';

    try {
      destContext.drawImage(
        srcCanvas,
        parseInt(sx.value, 10), parseInt(sy.value, 10),
        parseInt(sw.value, 10), parseInt(sh.value, 10),
        parseInt(dx.value, 10), parseInt(dy.value, 10),
        parseInt(dw.value, 10), parseInt(dh.value, 10)
      );
    } catch(e) {
      errorMessage.innerHTML = e;

      if (window.console && window.console.error) {
        console.error(e);
      }
    }

  }, false);

}());

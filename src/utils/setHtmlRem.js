// rem适配，需要设置viewport
(function (document, window) {
  function setRemUnit() {
    var width = document.documentElement.clientWidth;
    if (width) {
      document.documentElement.style.fontSize = width / 19.2 + 'px';
    }
  }
  document.addEventListener('DOMContentLoaded', setRemUnit);
  window.addEventListener('pageshow', setRemUnit);
  window.addEventListener('resize', setRemUnit);
})(document, window);

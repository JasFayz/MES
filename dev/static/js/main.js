window.addEventListener('DOMContentLoaded', function () {
  // console.log('=====');
  AOS.init({
    animatedClassName: 'aos-animate ', // class applied on animation
  });

  document.querySelector('.menu-btn').onclick = function () {
    this.children[0].classList.toggle('is-active');
    document.querySelector('.header__navigation').classList.toggle('is-show');
  };
});

// Полифилы

// forEach IE 11
if ('NodeList' in window && !NodeList.prototype.forEach) {
  console.info('polyfill for IE11');
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

// closest IE 11
(function () {
  if (!Element.prototype.closest) {
    Element.prototype.closest = function (css) {
      var node = this;
      while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }
})();

// matches IE 11
(function () {
  if (!Element.prototype.matches) {
    Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector;
  }
})();

//Array.form IE 11
if (!Array.from) {
  Array.from = function (object) {
    'use strict';
    return [].slice.call(object);
  };
}

const header = document.querySelector('.header');
window.addEventListener('scroll', function () {
  // console.log(window.pageYOffset)
  if (window.pageYOffset >= 100) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
});

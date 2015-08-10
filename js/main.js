'use strict';

// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());



// http://jsperf.com/getelementsbyclassname-vs-getelementbyid
// http://jsperf.com/getelementsbyclassname-vs-queryselector
// http://jsperf.com/getelementbyid-vs-queryselector
// http://stackoverflow.com/questions/205853/why-would-a-javascript-variable-start-with-a-dollar-sign
// http://stackoverflow.com/questions/28698593/creating-a-profit-calculator
(function(){ // IIFE (Immediately-Invoked Function Expression) so it was running immediately and only once, without refreshing

  ////////////////////////// START OF: FAKE GLOBAL VARIABLES //////////////////////////
  // http://www.w3schools.com/js/tryit.asp?filename=tryjs_function_counter3
  /*var widthHeightUnitVar = (function () {
      var widthHeightUnitResult = document.getElementById('units').value;
      return function () {return widthHeightUnitResult;}
  })();*/
  var widthHeightUnitVar = function () {
     var widthHeightUnitResult = document.getElementById('units').value;
     return widthHeightUnitResult;
  };
  console.log(widthHeightUnitVar());
  /////////////////////////// END OF: FAKE GLOBAL VARIABLES ///////////////////////////

  window.onload = widthHeightUnit;
  document.getElementById('units').addEventListener('click', widthHeightUnit);
  function widthHeightUnit() {
    //var widthHeightUnitResult = document.getElementById('units').value;
    widthHeightUnitVar();
    //document.querySelector('.width-unit').innerHTML = widthHeightUnitResult;
    //document.querySelector('.height-unit').innerHTML = widthHeightUnitResult;
    document.querySelector('.width-unit').innerHTML = widthHeightUnitVar();
    document.querySelector('.height-unit').innerHTML = widthHeightUnitVar();
  }




  function mathCalc() {
    var feet = 1;
    var inches = 12;
    var meters = 0.3048;
    var centimeters = 30.48;
    var milimeters = 304.8;

    var widthUnit = document.querySelector('.width-unit').value;
    var heightUnit = document.querySelector('.height-unit').value;

    if (unit === 'feet') {
      return true;
    } else {
      return false;
    }
  }




  document.getElementById('submit').addEventListener('click', dofCalc);
  function dofCalc() {

    var dofCalcWidth = document.getElementById('width').value;
    if (dofCalcWidth.length === 0) {
      alert('Please enter a real value to width!');
      return;
    }

    var dofCalcHeight = document.getElementById('height').value;
    if (dofCalcHeight.length === 0) {
      alert('Please enter a real value to height!');
      return;
    }

    var result = (+dofCalcWidth + +dofCalcHeight) / 2 // The + before the variables is "string to number conversion"

    // http://stackoverflow.com/questions/407048/accessing-variables-from-other-functions-without-using-global-variables
    //document.getElementById('result').innerHTML = result + ' ' + document.getElementById('units').value;
    document.getElementById('result').innerHTML = result + ' ' + widthHeightUnitVar();
  }

})();

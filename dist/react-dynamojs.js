(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Dynamo = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var Dynamo = (function (_React$Component) {
  _inherits(Dynamo, _React$Component);

  function Dynamo(props) {
    _classCallCheck(this, Dynamo);

    _get(Object.getPrototypeOf(Dynamo.prototype), 'constructor', this).call(this, props);

    this.state = {
      currentline: 0
    };
  }

  _createClass(Dynamo, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.checkHeight();
      this.startDynamo();
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate() {
      if (this.props.autoAlign) {
        this.checkHeight();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.state.interval);
    }

    /**
     * In the event line-height or font-size changes and knocks alignment out of place,
     * this will correct the height of the dynamo container
     */
  }, {
    key: 'checkHeight',
    value: function checkHeight() {
      var el = _reactDom2['default'].findDOMNode(this);
      var lineHeight = el.style.lineHeight || window.getComputedStyle(el).lineHeight;
      var fontSize = el.style.fontSize || window.getComputedStyle(el).fontSize;

      fontSize = Number(fontSize.replace('px', ''));

      if (lineHeight == 'normal') {
        lineHeight = 1.2 * fontSize;
      } else {
        lineHeight = Number(lineHeight.replace('px', ''));
      }

      // In all honesty, the below calculation is a result of trial
      // and error -- I'm not quite sure why it works as well as it does.
      var height = lineHeight + fontSize / 4;

      if (height != this.state.height) {
        this.setState({
          height: height
        });
      }
    }
  }, {
    key: 'startDynamo',
    value: function startDynamo() {
      var _this = this;

      var delay = this.props.delay || 3000;
      var speed = this.props.speed || 350;

      var interval = setInterval(function () {
        if (!_this.props.pause) {
          _this.advance();
        }
      }, speed + delay);

      this.setState({
        interval: interval
      });
    }
  }, {
    key: 'advance',
    value: function advance() {
      var _this2 = this;

      var speed = this.props.speed || 350;

      this.setState({
        isReordering: false
      });

      setTimeout(function () {
        _this2.onTransitionEnd();
      }, speed);
    }
  }, {
    key: 'onTransitionEnd',
    value: function onTransitionEnd() {
      if (!this.state.isReordering) {
        var currentline = (this.state.currentline + 1) % this.props.lines.length;
        // after animation ends, move divs to correct positions
        this.setState({
          currentline: currentline,
          isReordering: true
        });

        if (typeof this.props.callback == 'function' && !currentline) {
          this.props.callback();
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var lines = undefined;
      if (this.props.lines && this.props.lines.length) {
        lines = [].concat(_toConsumableArray(this.props.lines.slice(this.state.currentline)), _toConsumableArray(this.props.lines.slice(0, this.state.currentline)));
      } else {
        lines = [];
      }
      var styles = {
        height: this.state.height,
        overflow: 'hidden',
        display: 'inline-block',
        verticalAlign: 'bottom',
        paddingTop: '0.' + this.state.height / 2 + 'em',
        marginBottom: '-0.25em'
      };
      var textStyles = {
        display: 'block',
        paddingBottom: '0.5em'
      };

      if (this.state.isReordering === false) {
        textStyles.transition = 'transform ' + (this.props.speed || 100) + 'ms linear';
        textStyles.transform = 'translateY(-100%)';
      } else {
        textStyles.transition = 'none';
        textStyles.transform = 'translateY(0%)';
      }

      if (this.props.center) {
        textStyles.textAlign = 'center';
      }

      return _react2['default'].createElement(
        'span',
        { className: 'dynamo', style: styles, onClick: this.props.onClick },
        lines.map(function (line, i) {
          var key = (i + _this3.state.currentline) % _this3.props.lines.length;
          return _react2['default'].createElement(
            'span',
            { key: key, className: 'dynamo__text', style: textStyles },
            line
          );
        })
      );
    }
  }]);

  return Dynamo;
})(_react2['default'].Component);

exports['default'] = Dynamo;

Dynamo.propTypes = {
  autoAlign: _react2['default'].PropTypes.bool,
  callback: _react2['default'].PropTypes.func,
  center: _react2['default'].PropTypes.bool,
  delay: _react2['default'].PropTypes.number,
  lines: _react2['default'].PropTypes.array.isRequired,
  onClick: _react2['default'].PropTypes.func,
  pause: _react2['default'].PropTypes.bool,
  speed: _react2['default'].PropTypes.number
};
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"react-dom":undefined}]},{},[1])(1)
});
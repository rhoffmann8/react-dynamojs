require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"react-dynamojs":[function(require,module,exports){
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

var _react = require('react');

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

},{"react":undefined,"react-dom":undefined}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvcmhvZmZtYW5uL3Byb2dyYW1zL25vZGUvcmVhY3QtY29tcG9uZW50L3JlYWN0LWR5bmFtb2pzL3NyYy9EeW5hbW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDQWtCLE9BQU87Ozs7d0JBQ0osV0FBVzs7OztJQUVYLE1BQU07WUFBTixNQUFNOztBQUNkLFdBRFEsTUFBTSxDQUNiLEtBQUssRUFBRTswQkFEQSxNQUFNOztBQUV2QiwrQkFGaUIsTUFBTSw2Q0FFakIsS0FBSyxFQUFFOztBQUViLFFBQUksQ0FBQyxLQUFLLEdBQUc7QUFDWCxpQkFBVyxFQUFFLENBQUM7S0FDZixDQUFDO0dBQ0g7O2VBUGtCLE1BQU07O1dBU1IsNkJBQUc7QUFDbEIsVUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ25CLFVBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNwQjs7O1dBRWtCLCtCQUFHO0FBQ3BCLFVBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUU7QUFDeEIsWUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO09BQ3BCO0tBQ0Y7OztXQUVtQixnQ0FBRztBQUNyQixtQkFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDcEM7Ozs7Ozs7O1dBTVUsdUJBQUc7QUFDWixVQUFNLEVBQUUsR0FBRyxzQkFBUyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdEMsVUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLElBQUksTUFBTSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQztBQUMvRSxVQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxD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QUMsY0FBYyxFQUFDLEtBQUssRUFBRSxVQUFVLEFBQUM7WUFBRSxJQUFJO1dBQVEsQ0FDekU7U0FDSCxDQUFDO09BQ0csQ0FDUDtLQUNIOzs7U0F0SWtCLE1BQU07R0FBUyxtQkFBTSxTQUFTOztxQkFBOUIsTUFBTTs7QUF5STNCLE1BQU0sQ0FBQyxTQUFTLEdBQUc7QUFDakIsV0FBUyxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxJQUFJO0FBQy9CLFVBQVEsRUFBRSxtQkFBTSxTQUFTLENBQUMsSUFBSTtBQUM5QixRQUFNLEVBQUUsbUJBQU0sU0FBUyxDQUFDLElBQUk7QUFDNUIsT0FBSyxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxNQUFNO0FBQzdCLE9BQUssRUFBRSxtQkFBTSxTQUFTLENBQUMsS0FBSyxDQUFDLFVBQVU7QUFDdkMsU0FBTyxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxJQUFJO0FBQzdCLE9BQUssRUFBRSxtQkFBTSxTQUFTLENBQUMsSUFBSTtBQUMzQixPQUFLLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU07Q0FDOUIsQ0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER5bmFtbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGN1cnJlbnRsaW5lOiAwXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuY2hlY2tIZWlnaHQoKTtcbiAgICB0aGlzLnN0YXJ0RHluYW1vKCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVXBkYXRlKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmF1dG9BbGlnbikge1xuICAgICAgdGhpcy5jaGVja0hlaWdodCgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zdGF0ZS5pbnRlcnZhbCk7XG4gIH1cblxuICAvKipcbiAgICogSW4gdGhlIGV2ZW50IGxpbmUtaGVpZ2h0IG9yIGZvbnQtc2l6ZSBjaGFuZ2VzIGFuZCBrbm9ja3MgYWxpZ25tZW50IG91dCBvZiBwbGFjZSxcbiAgICogdGhpcyB3aWxsIGNvcnJlY3QgdGhlIGhlaWdodCBvZiB0aGUgZHluYW1vIGNvbnRhaW5lclxuICAgKi9cbiAgY2hlY2tIZWlnaHQoKSB7XG4gICAgY29uc3QgZWwgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICBsZXQgbGluZUhlaWdodCA9IGVsLnN0eWxlLmxpbmVIZWlnaHQgfHwgd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpLmxpbmVIZWlnaHQ7XG4gICAgbGV0IGZvbnRTaXplID0gZWwuc3R5bGUuZm9udFNpemUgfHwgd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpLmZvbnRTaXplO1xuXG4gICAgZm9udFNpemUgPSBOdW1iZXIoZm9udFNpemUucmVwbGFjZSgncHgnLCcnKSlcblxuICAgIGlmIChsaW5lSGVpZ2h0ID09ICdub3JtYWwnKSB7XG4gICAgICBsaW5lSGVpZ2h0ID0gMS4yICogZm9udFNpemU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpbmVIZWlnaHQgPSBOdW1iZXIobGluZUhlaWdodC5yZXBsYWNlKCdweCcsICcnKSk7XG4gICAgfVxuXG4gICAgLy8gSW4gYWxsIGhvbmVzdHksIHRoZSBiZWxvdyBjYWxjdWxhdGlvbiBpcyBhIHJlc3VsdCBvZiB0cmlhbFxuICAgIC8vIGFuZCBlcnJvciAtLSBJJ20gbm90IHF1aXRlIHN1cmUgd2h5IGl0IHdvcmtzIGFzIHdlbGwgYXMgaXQgZG9lcy5cbiAgICBjb25zdCBoZWlnaHQgPSAobGluZUhlaWdodCArIChmb250U2l6ZS80KSk7XG5cbiAgICBpZiAoaGVpZ2h0ICE9IHRoaXMuc3RhdGUuaGVpZ2h0KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaGVpZ2h0XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzdGFydER5bmFtbygpIHtcbiAgICBjb25zdCBkZWxheSA9IHRoaXMucHJvcHMuZGVsYXkgfHwgMzAwMDtcbiAgICBjb25zdCBzcGVlZCA9IHRoaXMucHJvcHMuc3BlZWQgfHwgMzUwO1xuXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMucHJvcHMucGF1c2UpIHtcbiAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICB9XG4gICAgfSwgc3BlZWQgKyBkZWxheSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGludGVydmFsXG4gICAgfSk7XG4gIH1cblxuICBhZHZhbmNlKCkge1xuICAgIGNvbnN0IHNwZWVkID0gdGhpcy5wcm9wcy5zcGVlZCB8fCAzNTA7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzUmVvcmRlcmluZzogZmFsc2VcbiAgICB9KTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLm9uVHJhbnNpdGlvbkVuZCgpIH0sIHNwZWVkKTtcbiAgfVxuXG4gIG9uVHJhbnNpdGlvbkVuZCgpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuaXNSZW9yZGVyaW5nKSB7XG4gICAgICBjb25zdCBjdXJyZW50bGluZSA9ICh0aGlzLnN0YXRlLmN1cnJlbnRsaW5lICsgMSkgJSB0aGlzLnByb3BzLmxpbmVzLmxlbmd0aDtcbiAgICAgIC8vIGFmdGVyIGFuaW1hdGlvbiBlbmRzLCBtb3ZlIGRpdnMgdG8gY29ycmVjdCBwb3NpdGlvbnNcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjdXJyZW50bGluZSxcbiAgICAgICAgaXNSZW9yZGVyaW5nOiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLmNhbGxiYWNrID09ICdmdW5jdGlvbicgJiYgIWN1cnJlbnRsaW5lKSB7XG4gICAgICAgIHRoaXMucHJvcHMuY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGxpbmVzO1xuICAgIGlmICh0aGlzLnByb3BzLmxpbmVzICYmIHRoaXMucHJvcHMubGluZXMubGVuZ3RoKSB7XG4gICAgICBsaW5lcyA9IFsuLi50aGlzLnByb3BzLmxpbmVzLnNsaWNlKHRoaXMuc3RhdGUuY3VycmVudGxpbmUpLCAuLi50aGlzLnByb3BzLmxpbmVzLnNsaWNlKDAsdGhpcy5zdGF0ZS5jdXJyZW50bGluZSldO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaW5lcyA9IFtdO1xuICAgIH1cbiAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICBoZWlnaHQ6IHRoaXMuc3RhdGUuaGVpZ2h0LFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICB2ZXJ0aWNhbEFsaWduOiAnYm90dG9tJyxcbiAgICAgIHBhZGRpbmdUb3A6ICcwLicgKyAodGhpcy5zdGF0ZS5oZWlnaHQvMikgKyAnZW0nLFxuICAgICAgbWFyZ2luQm90dG9tOiAnLTAuMjVlbSdcbiAgICB9O1xuICAgIGNvbnN0IHRleHRTdHlsZXMgPSB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgcGFkZGluZ0JvdHRvbTogJzAuNWVtJyxcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuaXNSZW9yZGVyaW5nID09PSBmYWxzZSkge1xuICAgICAgdGV4dFN0eWxlcy50cmFuc2l0aW9uID0gJ3RyYW5zZm9ybSAnICsgKHRoaXMucHJvcHMuc3BlZWQgfHwgMTAwKSArICdtcyBsaW5lYXInO1xuICAgICAgdGV4dFN0eWxlcy50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgtMTAwJSknO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZXh0U3R5bGVzLnRyYW5zaXRpb24gPSAnbm9uZSc7XG4gICAgICB0ZXh0U3R5bGVzLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKDAlKSc7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuY2VudGVyKSB7XG4gICAgICB0ZXh0U3R5bGVzLnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJkeW5hbW9cIiBzdHlsZT17c3R5bGVzfSBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2t9PlxuICAgICAgICB7bGluZXMubWFwKChsaW5lLCBpKSA9PiB7XG4gICAgICAgICAgY29uc3Qga2V5ID0gKGkrdGhpcy5zdGF0ZS5jdXJyZW50bGluZSkgJSB0aGlzLnByb3BzLmxpbmVzLmxlbmd0aDtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNwYW4ga2V5PXtrZXl9IGNsYXNzTmFtZT1cImR5bmFtb19fdGV4dFwiIHN0eWxlPXt0ZXh0U3R5bGVzfT57bGluZX08L3NwYW4+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L3NwYW4+XG4gICAgKTtcbiAgfVxufVxuXG5EeW5hbW8ucHJvcFR5cGVzID0ge1xuICBhdXRvQWxpZ246IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBjYWxsYmFjazogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIGNlbnRlcjogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIGRlbGF5OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICBsaW5lczogUmVhY3QuUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIG9uQ2xpY2s6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBwYXVzZTogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIHNwZWVkOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxufSJdfQ==

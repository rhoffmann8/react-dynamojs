require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Dynamo = require('react-dynamojs');

var App = React.createClass({
  displayName: 'App',

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h2',
        null,
        'Examples'
      ),
      React.createElement(
        'p',
        { className: 'example' },
        'This ',
        React.createElement(Dynamo, { autoAlign: true, lines: ['text', 'copy', 'type'], speed: 50, delay: 1000 }),
        ' has a very quick transition.'
      ),
      React.createElement(
        'p',
        { className: 'example' },
        'This text has a longer ',
        React.createElement(Dynamo, { autoAlign: true, speed: 1000, delay: 2000, lines: ['delay', 'pause', 'wait'] }),
        ' and slower speed than the above example.'
      ),
      React.createElement(
        'p',
        { className: 'example' },
        'This ',
        React.createElement(Dynamo, { autoAlign: true, pause: true, lines: ['text', 'one', 'two'] }),
        ' is paused.'
      ),
      React.createElement(
        'p',
        { className: 'example' },
        'The counter over there will increment with each ',
        React.createElement(Dynamo, { autoAlign: true, lines: ['completed', 'finished', 'repeated'], delay: 1500, callback: function () {
            var el = document.getElementById('counter');el.innerHTML = Number(el.innerHTML) + 1;
          } }),
        ' cycle. ',
        React.createElement(
          'span',
          { id: 'counter', style: { float: 'right' } },
          '0'
        )
      ),
      React.createElement(
        'p',
        { style: { fontFamily: 'monospace' }, className: 'example' },
        'This is monospace text. ',
        React.createElement(Dynamo, { autoAlign: true, delay: 1000, lines: ['One', 'Two', 'Three', 'Four', 'Five'] })
      ),
      React.createElement(
        'p',
        { style: { fontFamily: 'cursive', fontSize: '1.5em' }, className: 'example' },
        'This is slightly ',
        React.createElement(Dynamo, { autoAlign: true, delay: 1000, lines: ['larger', 'bigger', 'heftier'] }),
        ' cursive text.'
      ),
      React.createElement(
        'p',
        { style: { fontFamily: 'serif', fontSize: '2em' }, className: 'example' },
        'This is even bigger serif text. ',
        React.createElement(Dynamo, { autoAlign: true, delay: 1000, lines: ['One', 'Two', 'Three'] })
      ),
      React.createElement(
        'p',
        { className: 'example' },
        'This example has rotating links. ',
        React.createElement(Dynamo, { autoAlign: true, delay: 2000, lines: [React.createElement(
            'a',
            { href: '#one' },
            'Link One'
          ), React.createElement(
            'a',
            { href: '#two' },
            'Link Two'
          ), React.createElement(
            'a',
            { href: '#three' },
            'Link Three'
          )] })
      )
    );
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
ReactDOM.render(React.createElement(
  'span',
  null,
  'react-dynam',
  React.createElement(Dynamo, { autoAlign: true, lines: ['ojs', 'ic'], delay: 3500 })
), document.getElementById('project_name'));

},{"react":undefined,"react-dom":undefined,"react-dynamojs":undefined}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvcmhvZmZtYW5uL3Byb2dyYW1zL25vZGUvcmVhY3QtY29tcG9uZW50L3JlYWN0LWR5bmFtb2pzL2V4YW1wbGUvc3JjL2V4YW1wbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3QixJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDcEMsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7O0FBRXZDLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUMxQixRQUFNLEVBQUMsa0JBQUc7QUFDUixXQUNFOzs7TUFDRTs7OztPQUFpQjtNQUNqQjs7VUFBRyxTQUFTLEVBQUMsU0FBUzs7UUFBTSxvQkFBQyxNQUFNLElBQUMsU0FBUyxNQUFBLEVBQUMsS0FBSyxFQUFFLENBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxNQUFNLENBQUMsQUFBQyxFQUFDLEtBQUssRUFBRSxFQUFFLEFBQUMsRUFBQyxLQUFLLEVBQUUsSUFBSSxBQUFDLEdBQUU7O09BQWlDO01BQ3ZJOztVQUFHLFNBQVMsRUFBQyxTQUFTOztRQUF3QixvQkFBQyxNQUFNLElBQUMsU0FBUyxNQUFBLEVBQUMsS0FBSyxFQUFFLElBQUksQUFBQyxFQUFDLEtBQUssRUFBRSxJQUFJLEFBQUMsRUFBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxBQUFDLEdBQUU7O09BQTZDO01BQzNLOztVQUFHLFNBQVMsRUFBQyxTQUFTOztRQUFNLG9CQUFDLE1BQU0sSUFBQyxTQUFTLE1BQUEsRUFBQyxLQUFLLE1BQUEsRUFBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLEtBQUssQ0FBQyxBQUFDLEdBQUU7O09BQWU7TUFDakc7O1VBQUcsU0FBUyxFQUFDLFNBQVM7O1FBQWlELG9CQUFDLE1BQU0sSUFBQyxTQUFTLE1BQUEsRUFBQyxLQUFLLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBVSxFQUFDLFVBQVUsQ0FBQyxBQUFDLEVBQUMsS0FBSyxFQUFFLElBQUksQUFBQyxFQUFDLFFBQVEsRUFBRSxZQUFNO0FBQUUsZ0JBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQUFBQyxFQUFFLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1dBQUMsQUFBQyxHQUFFOztRQUFROztZQUFNLEVBQUUsRUFBQyxTQUFTLEVBQUMsS0FBSyxFQUFFLEVBQUMsS0FBSyxFQUFDLE9BQU8sRUFBQyxBQUFDOztTQUFTO09BQUk7TUFDN1Q7O1VBQUcsS0FBSyxFQUFFLEVBQUMsVUFBVSxFQUFFLFdBQVcsRUFBQyxBQUFDLEVBQUMsU0FBUyxFQUFDLFNBQVM7O1FBQXlCLG9CQUFDLE1BQU0sSUFBQyxTQUFTLE1BQUEsRUFBQyxLQUFLLEVBQUUsSUFBSSxBQUFDLEVBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sQ0FBQyxBQUFDLEdBQUU7T0FBSTtNQUNqSzs7VUFBRyxLQUFLLEVBQUUsRUFBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUMsQUFBQyxFQUFDLFNBQVMsRUFBQyxTQUFTOztRQUFrQixvQkFBQyxNQUFNLElBQUMsU0FBUyxNQUFBLEVBQUMsS0FBSyxFQUFFLElBQUksQUFBQyxFQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsU0FBUyxDQUFDLEFBQUMsR0FBRTs7T0FBa0I7TUFDbkw7O1VBQUcsS0FBSyxFQUFFLEVBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFDLEFBQUMsRUFBQyxTQUFTLEVBQUMsU0FBUzs7UUFBaUMsb0JBQUMsTUFBTSxJQUFDLFNBQVMsTUFBQSxFQUFDLEtBQUssRUFBRSxJQUFJLEFBQUMsRUFBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLE9BQU8sQ0FBQyxBQUFDLEdBQUU7T0FBSTtNQUN4Szs7VUFBRyxTQUFTLEVBQUMsU0FBUzs7UUFBa0Msb0JBQUMsTUFBTSxJQUFDLFNBQVMsTUFBQSxFQUFDLEtBQUssRUFBRSxJQUFJLEFBQUMsRUFBQyxLQUFLLEVBQUUsQ0FBQzs7Y0FBRyxJQUFJLEVBQUMsTUFBTTs7V0FBYSxFQUFDOztjQUFHLElBQUksRUFBQyxNQUFNOztXQUFhLEVBQUM7O2NBQUcsSUFBSSxFQUFDLFFBQVE7O1dBQWUsQ0FBQyxBQUFDLEdBQUU7T0FBSTtLQUMxTCxDQUNOO0dBQ0g7Q0FDRixDQUFDLENBQUM7O0FBRUgsUUFBUSxDQUFDLE1BQU0sQ0FBQyxvQkFBQyxHQUFHLE9BQUcsRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDekQsUUFBUSxDQUFDLE1BQU0sQ0FBQzs7OztFQUFpQixvQkFBQyxNQUFNLElBQUMsU0FBUyxNQUFBLEVBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxBQUFDLEVBQUMsS0FBSyxFQUFFLElBQUksQUFBQyxHQUFFO0NBQU8sRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xudmFyIER5bmFtbyA9IHJlcXVpcmUoJ3JlYWN0LWR5bmFtb2pzJyk7XG5cbnZhciBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj5FeGFtcGxlczwvaDI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImV4YW1wbGVcIj5UaGlzIDxEeW5hbW8gYXV0b0FsaWduIGxpbmVzPXtbJ3RleHQnLCdjb3B5JywndHlwZSddfSBzcGVlZD17NTB9IGRlbGF5PXsxMDAwfS8+IGhhcyBhIHZlcnkgcXVpY2sgdHJhbnNpdGlvbi48L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImV4YW1wbGVcIj5UaGlzIHRleHQgaGFzIGEgbG9uZ2VyIDxEeW5hbW8gYXV0b0FsaWduIHNwZWVkPXsxMDAwfSBkZWxheT17MjAwMH0gbGluZXM9e1snZGVsYXknLCAncGF1c2UnLCAnd2FpdCddfS8+IGFuZCBzbG93ZXIgc3BlZWQgdGhhbiB0aGUgYWJvdmUgZXhhbXBsZS48L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImV4YW1wbGVcIj5UaGlzIDxEeW5hbW8gYXV0b0FsaWduIHBhdXNlIGxpbmVzPXtbJ3RleHQnLCdvbmUnLCd0d28nXX0vPiBpcyBwYXVzZWQuPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJleGFtcGxlXCI+VGhlIGNvdW50ZXIgb3ZlciB0aGVyZSB3aWxsIGluY3JlbWVudCB3aXRoIGVhY2ggPER5bmFtbyBhdXRvQWxpZ24gbGluZXM9e1snY29tcGxldGVkJywgJ2ZpbmlzaGVkJywncmVwZWF0ZWQnXX0gZGVsYXk9ezE1MDB9IGNhbGxiYWNrPXsoKSA9PiB7IHZhciBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudGVyJyk7IGVsLmlubmVySFRNTCA9IE51bWJlcihlbC5pbm5lckhUTUwpICsgMTt9fS8+IGN5Y2xlLiA8c3BhbiBpZD1cImNvdW50ZXJcIiBzdHlsZT17e2Zsb2F0OidyaWdodCd9fT4wPC9zcGFuPjwvcD5cbiAgICAgICAgPHAgc3R5bGU9e3tmb250RmFtaWx5OiAnbW9ub3NwYWNlJ319IGNsYXNzTmFtZT1cImV4YW1wbGVcIj5UaGlzIGlzIG1vbm9zcGFjZSB0ZXh0LiA8RHluYW1vIGF1dG9BbGlnbiBkZWxheT17MTAwMH0gbGluZXM9e1snT25lJywnVHdvJywnVGhyZWUnLCdGb3VyJywnRml2ZSddfS8+PC9wPlxuICAgICAgICA8cCBzdHlsZT17e2ZvbnRGYW1pbHk6ICdjdXJzaXZlJywgZm9udFNpemU6ICcxLjVlbSd9fSBjbGFzc05hbWU9XCJleGFtcGxlXCI+VGhpcyBpcyBzbGlnaHRseSA8RHluYW1vIGF1dG9BbGlnbiBkZWxheT17MTAwMH0gbGluZXM9e1snbGFyZ2VyJywnYmlnZ2VyJywnaGVmdGllciddfS8+IGN1cnNpdmUgdGV4dC48L3A+XG4gICAgICAgIDxwIHN0eWxlPXt7Zm9udEZhbWlseTogJ3NlcmlmJywgZm9udFNpemU6ICcyZW0nfX0gY2xhc3NOYW1lPVwiZXhhbXBsZVwiPlRoaXMgaXMgZXZlbiBiaWdnZXIgc2VyaWYgdGV4dC4gPER5bmFtbyBhdXRvQWxpZ24gZGVsYXk9ezEwMDB9IGxpbmVzPXtbJ09uZScsJ1R3bycsJ1RocmVlJ119Lz48L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImV4YW1wbGVcIj5UaGlzIGV4YW1wbGUgaGFzIHJvdGF0aW5nIGxpbmtzLiA8RHluYW1vIGF1dG9BbGlnbiBkZWxheT17MjAwMH0gbGluZXM9e1s8YSBocmVmPVwiI29uZVwiPkxpbmsgT25lPC9hPiw8YSBocmVmPVwiI3R3b1wiPkxpbmsgVHdvPC9hPiw8YSBocmVmPVwiI3RocmVlXCI+TGluayBUaHJlZTwvYT5dfS8+PC9wPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuUmVhY3RET00ucmVuZGVyKDxzcGFuPnJlYWN0LWR5bmFtPER5bmFtbyBhdXRvQWxpZ24gbGluZXM9e1snb2pzJywgJ2ljJ119IGRlbGF5PXszNTAwfS8+PC9zcGFuPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RfbmFtZScpKTtcbiJdfQ==

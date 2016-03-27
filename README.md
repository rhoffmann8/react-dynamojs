# react-dynamojs

A React implementation of [jdan's](https://github.com/jdan/) [dynamo.js](http://jdan.github.io/dynamo.js/) plugin. Relies on CSS3 transitions instead of JS animations. As such it will not work as intended for IE9 users; however it does provide *minimal* support by swapping out text without animation.

While **react-dynamo** would have been a logical name for the project, I did not want to generate any confusion with utilities relating to AWS's DynamoDB service and opted to add the **js** instead.

This project was bootstrapped using [generator-react-component](https://github.com/JedWatson/generator-react-component).

## Demo & Examples

Live demo: [rhoffmann8.github.io/react-dynamojs](http://rhoffmann8.github.io/react-dynamojs/)

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


Tests are written with Enzyme, Mocha, Chai, and Sinon. Run them with the following command:
```
npm test
```


## Usage

```jsx
var Dynamo = require('react-dynamojs');

<p>This text can <Dynamo delay={1000} speed={500} lines={['change','mutate','vary']}/><p>
```

### Properties

The properties are virtually identical to dynamo.js, with some additions:

* `lines`:  *(Required)* Text items to cycle through. Can be provided as a string or JSX object (see examples below).
* `autoAlign`: Boolean property, does not take a value. If you plan on changing the `font-size` or `line-height` properties of the page dynamically, this property will recalculate properties of the Dynamo `<span>` on each render to align it properly. Not enabled by default to avoid unnecessary calculations.
* `callback`: A function to be called when a cycle has been completed.
* `center`: Center the text.
* `delay`: Time (ms) to wait between transitions. Defaults to 3000ms.
* `onClick`: A function to be called when the text is clicked. This can be used in conjunction with the `pause` property to advance the text by one line per click, by accessing the Dynamo instance through a `ref` attribute and invoking `advance()`.
* `pause`: Stop transitioning.
* `speed`: Speed (ms) of the transition. Defaults to 350ms.

### Examples

Pass `autoAlign` property if `line-height` or `font-size` are subject to change after initial render:

```jsx
<Dynamo autoAlign lines={['one', 'two', 'three']}/>
```

JSX or ReactElements can be passed instead of a string, for example rotating links:

```jsx
<Dynamo lines={[<a href="#one">One</a>, <a href="#two">Two</a>, <a href="#three">Three</a>]}/>
```

Attach a handler to the `callback` property to pause after one completed cycle:

```jsx
onCallback() {
  this.setState({
    pauseDynamo: true
  });
}

render() {
  const lines = ['change', 'rotate', 'cycle'];
  const pause = this.state.pauseDynamo;

  return (
    <p>This text will <Dynamo lines={lines} callback={this.onCallback.bind(this)} pause={pause}/> only once.</p>
  );
}
```

Fire a manual transition (useful if Dynamo is paused, or a quick alignment is necessary after a font-size/line-height change):

```jsx
someEvent() {
  this.refs.dynamo.advance();
}

render() {
  return <Dynamo ref="dynamo" pause lines={[...]}/>;
}
```

### Notes

If using on mobile, don't forget the viewport meta tag:

```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
```

Otherwise, all text will appear out of alignment.

The main Dynamo span is rendered with class `dynamo`, while each text item has a class `dynamo__text`.

For height calculations, a `line-height` value of `normal` is approximated to `1.2`.

### Known Issues

* As stated above, if `font-size` or `line-height` is modified after initial page render, Dynamo elements will be knocked out of alignment until the next tick, provided they have `autoAlign` enabled. However, paused elements will not adjust themselves since the `render()` function is not called. To get around this, `advance()` can be called on a reference to the Dynamo instance. This method can also be leveraged to do a quicker alignment fix on an element with a substantial delay which would normally take longer to correct itself.
* If an element's font size becomes equal to or greater than its line height, some clipping will occur. This is an issue with the original dynamo.js, and while this implementation has taken steps to mitigate it with margin and padding tricks, there is a limit to how much discrepancy between the two properties can exist before usage becomes impractical.

## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License

See LICENSE.txt for details.

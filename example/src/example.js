var React = require('react');
var ReactDOM = require('react-dom');
var Dynamo = require('react-dynamojs');

var App = React.createClass({
  render () {
    return (
      <div>
        <h2>Examples</h2>
        <p className="example">This <Dynamo autoAlign lines={['text','copy','type']} speed={50} delay={1000}/> has a very quick transition.</p>
        <p className="example">This text has a longer <Dynamo autoAlign speed={1000} delay={2000} lines={['delay', 'pause', 'wait']}/> and slower speed than the above example.</p>
        <p className="example">This <Dynamo autoAlign pause lines={['text','one','two']}/> is paused.</p>
        <p className="example">The counter over there will increment with each <Dynamo autoAlign lines={['completed', 'finished','repeated']} delay={1500} callback={() => { var el = document.getElementById('counter'); el.innerHTML = Number(el.innerHTML) + 1;}}/> cycle. <span id="counter" style={{float:'right'}}>0</span></p>
        <p style={{fontFamily: 'monospace'}} className="example">This is monospace text. <Dynamo autoAlign delay={1000} lines={['One','Two','Three','Four','Five']}/></p>
        <p style={{fontFamily: 'cursive', fontSize: '1.5em'}} className="example">This is slightly <Dynamo autoAlign delay={1000} lines={['larger','bigger','heftier']}/> cursive text.</p>
        <p style={{fontFamily: 'serif', fontSize: '2em'}} className="example">This is even bigger serif text. <Dynamo autoAlign delay={1000} lines={['One','Two','Three']}/></p>
        <p className="example">This example has rotating links. <Dynamo autoAlign delay={2000} lines={[<a href="#one">Link One</a>,<a href="#two">Link Two</a>,<a href="#three">Link Three</a>]}/></p>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<span>react-dynam<Dynamo autoAlign lines={['ojs', 'ic']} delay={3500}/></span>, document.getElementById('project_name'));

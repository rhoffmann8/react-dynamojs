import React from 'react';
import ReactDOM from 'react-dom';

export default class Dynamo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentline: 0
    };
  }

  componentDidMount() {
    this.checkHeight();
    this.startDynamo();
  }

  componentWillUpdate() {
    if (this.props.autoAlign) {
      this.checkHeight();
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  /**
   * In the event line-height or font-size changes and knocks alignment out of place,
   * this will correct the height of the dynamo container
   */
  checkHeight() {
    const el = ReactDOM.findDOMNode(this);
    let lineHeight = el.style.lineHeight || window.getComputedStyle(el).lineHeight;
    let fontSize = el.style.fontSize || window.getComputedStyle(el).fontSize;

    fontSize = Number(fontSize.replace('px',''))

    if (lineHeight == 'normal') {
      lineHeight = 1.2 * fontSize;
    } else {
      lineHeight = Number(lineHeight.replace('px', ''));
    }

    // In all honesty, the below calculation is a result of trial
    // and error -- I'm not quite sure why it works as well as it does.
    const height = (lineHeight + (fontSize/4));

    if (height != this.state.height) {
      this.setState({
        height
      });
    }
  }

  startDynamo() {
    const delay = this.props.delay || 3000;
    const speed = this.props.speed || 350;

    const interval = setInterval(() => {
      if (!this.props.pause) {
        this.advance();
      }
    }, speed + delay);

    this.setState({
      interval
    });
  }

  advance() {
    const speed = this.props.speed || 350;

    this.setState({
      isReordering: false
    });

    setTimeout(() => { this.onTransitionEnd() }, speed);
  }

  onTransitionEnd() {
    if (!this.state.isReordering) {
      const currentline = (this.state.currentline + 1) % this.props.lines.length;
      // after animation ends, move divs to correct positions
      this.setState({
        currentline,
        isReordering: true
      });

      if (typeof this.props.callback == 'function' && !currentline) {
        this.props.callback();
      }
    }
  }

  render() {
    let lines;
    if (this.props.lines && this.props.lines.length) {
      lines = [...this.props.lines.slice(this.state.currentline), ...this.props.lines.slice(0,this.state.currentline)];
    } else {
      lines = [];
    }
    const styles = {
      height: this.state.height,
      overflow: 'hidden',
      display: 'inline-block',
      verticalAlign: 'bottom',
      paddingTop: '0.' + (this.state.height/2) + 'em',
      marginBottom: '-0.25em'
    };
    const textStyles = {
      display: 'block',
      paddingBottom: '0.5em',
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

    return (
      <span className="dynamo" style={styles} onClick={this.props.onClick}>
        {lines.map((line, i) => {
          const key = (i+this.state.currentline) % this.props.lines.length;
          return (
            <span key={key} className="dynamo__text" style={textStyles}>{line}</span>
          );
        })}
      </span>
    );
  }
}

Dynamo.propTypes = {
  autoAlign: React.PropTypes.bool,
  callback: React.PropTypes.func,
  center: React.PropTypes.bool,
  delay: React.PropTypes.number,
  lines: React.PropTypes.array.isRequired,
  onClick: React.PropTypes.func,
  pause: React.PropTypes.bool,
  speed: React.PropTypes.number,
}
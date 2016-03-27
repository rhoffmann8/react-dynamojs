import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Dynamo from '../src/Dynamo';

describe('<Dynamo />', () => {
  before(() => {
    sinon.spy(Dynamo.prototype, 'advance');
    sinon.spy(Dynamo.prototype, 'checkHeight');
    sinon.spy(Dynamo.prototype, 'render');
    sinon.spy(Dynamo.prototype, 'onTransitionEnd');
  });

  it('renders the Dynamo component', () => {
    const wrapper = shallow(<Dynamo lines={['one', 'two']}/>)
    expect(wrapper.find(Dynamo)).to.exist;
  })

  it('warns about missing lines PropType', () => {
    const stub = sinon.stub(console, 'error');
    const wrapper = shallow(<Dynamo />);
    expect(stub.calledOnce).to.be.true;
    expect(stub.calledWithExactly('Warning: Failed propType: Required prop `lines` was not specified in `Dynamo`.')).to.be.true;
    stub.restore();
  })

  it('renders no .dynamo__text elements', () => {
    const wrapper = shallow(<Dynamo />);
    expect(wrapper.find('.dynamo__text')).to.be.length(0);
  });

  it('renders three .dynamo__text elements', () => {
    const wrapper = shallow(<Dynamo lines={['one', 'two', 'three']}/>);
    expect(wrapper.find('.dynamo__text')).to.be.length(3);
  });

  it('renders three .dynamo__text elements using JSX', () => {
    const wrapper = shallow(<Dynamo lines={[<a href="#">One</a>, <a href="#">Two</a>, <a href="#">Thre</a>]} />);
    expect(wrapper.find('.dynamo__text')).to.be.length(3);
  })

  it('calls onClick after clicking Dynamo component', () => {
    const onClickCallback = sinon.spy();
    const wrapper = shallow(<Dynamo lines={['one']} onClick={onClickCallback}/>);
    wrapper.find('.dynamo').simulate('click');
    expect(onClickCallback.calledOnce).to.be.true;
  })

  it('pauses and manually triggers a render', (done) => {
    const wrapper = mount(<Dynamo pause delay={100} speed={100} lines={['one', 'two', 'three']}/>);
    expect(wrapper.find('.dynamo__text').first().text()).to.equal('one');

    wrapper.get(0).advance()
    expect(wrapper.state('isReordering')).to.equal(false);
    expect(Dynamo.prototype.render.calledAfter(Dynamo.prototype.advance)).to.be.true;

    setTimeout(() => {
      expect(Dynamo.prototype.onTransitionEnd.calledOnce).to.be.true;
      expect(wrapper.find('.dynamo__text').first().text()).to.equal('two');
      done();
    },400)
  })

  it('calls callback after complete cycle is finished', (done) => {
    const callback = sinon.spy();
    const wrapper = mount(<Dynamo callback={callback} delay={100} speed={100} lines={['one', 'two', 'three']}/>);
    setTimeout(() => {
      expect(callback.calledOnce).to.be.true;
      done();
    },1000);
  })

  it('runs height calculation when autoAlign property is passed', () => {
    const wrapper = mount(<Dynamo autoAlign delay={100} speed={100} lines={['one', 'two', 'three']}/>);
    expect(Dynamo.prototype.checkHeight.called).to.be.true;
  })

  it('centers the text when center property is passed', () => {
    const wrapper = mount(<Dynamo center delay={100} speed={100} lines={['one', 'two', 'three']}/>);
    expect(wrapper.find('.dynamo__text').first().html().indexOf('text-align:center')).to.not.equal(-1);
  })

  after(() => {
    Dynamo.prototype.advance.restore();
    Dynamo.prototype.checkHeight.restore();
    Dynamo.prototype.render.restore();
    Dynamo.prototype.onTransitionEnd.restore();
  })
})
import React, {Component} from 'react';

import store from './stores/CounterStore'

export default class CounterButton extends Component {

  constructor(props: any) {
    super(props)
  }

  onClick() {
    store.dispatch({type: 'INCREMENT'})
  }

  render() {
    return <button onClick={this.onClick}>カウントアップボタン</button>
  }

}
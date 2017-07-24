import React from 'react'
import {connect} from 'react-redux'
import actions from '../actions'
import store from '../index'
import MovableBlock from './movable-block'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.saveLS = this.saveLS.bind(this)
    this.resetLS = this.resetLS.bind(this)
  }

  resetLS() {
    window.localStorage.removeItem('images')
    const initial = [
      {url: 'https://d30y9cdsu7xlg0.cloudfront.net/png/1056699-200.png',top: 0,left: 0},
      {url: 'https://d30y9cdsu7xlg0.cloudfront.net/png/1113974-200.png',top: 0,left: 200},
      {url: 'https://d30y9cdsu7xlg0.cloudfront.net/png/537680-200.png',top: 0,left: 400},
      {url: 'https://d30y9cdsu7xlg0.cloudfront.net/png/922213-200.png',top: 0,left: 600}
    ]
    window.localStorage.setItem('images', JSON.stringify(initial))
  }

  saveLS() {
    window.localStorage.setItem('images', JSON.stringify(this.props.images))
  }

  render() {
    return (
      <div>
        <button onClick={this.saveLS}>Save to LocalStorage</button>
        <button onClick={this.resetLS}>Reset LocalStorage</button>
        {this.props.images.map((image, i) => {
          return (
            <MovableBlock
              top={image.top}
              left={image.left}
              key={i}
              onPositionChange={this.props.changeImagePosition.bind(null, i)}
            >
              <img src={image.url}/>
            </MovableBlock>
          )
        })}
      </div>
    )
  }
}

export default connect(({images}) => ({
  images
}), {
  changeImagePosition: actions.changeImagePosition
})(App)

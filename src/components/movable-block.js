import React from 'react'

class MovableBlock extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      display: "block",
      position: "fixed",
      top: this.props.top || 0,
      left: this.props.left || 0
    }
    this.followMouse = this.followMouse.bind(this)
    this.addMouseTracker = this.addMouseTracker.bind(this)
    this.removeMouseTracker = this.removeMouseTracker.bind(this)
    this.onPositionChange = this.props.onPositionChange || function(){}
  }

  addMouseTracker(e) {
    e.preventDefault()
    e.stopPropagation()
    window.addEventListener('mousemove', this.followMouse)
  }

  followMouse(e) {
    e.preventDefault()
    e.stopPropagation()
    this.setState({
      top: e.clientY - 20,
      left: e.clientX - 20
    }, () => {
      this.onPositionChange(this.state.top, this.state.left)
    })
  }

  removeMouseTracker(e) {
    e.preventDefault()
    e.stopPropagation()
    window.removeEventListener('mousemove', this.followMouse)
  }

  render() {
    const style = Object.assign({}, this.props.style, this.state)
    return (
      <div
        style={style}
        onMouseDown={this.addMouseTracker}
        onMouseUp={this.removeMouseTracker}
      >
        {this.props.children}
      </div>
    )
  }
}

export default MovableBlock

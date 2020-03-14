import React, { Component } from 'react'

interface Props {
  
}
interface State {
  
}

export default class Confirm extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div className="confirm-wrapper confirm-visible">
        <div className="confirm-container">
          <span>This is where the title goes</span>
        </div>
        <div className="confirm-content-container">
          <p>This is where the content goes</p>
        </div>
        <div className="confirm-buttons-container">
          <button className="confirm-cancel">Cancel</button>
          <button className="confirm-okay">Okay</button>
        </div>
      </div>
    )
  }
}

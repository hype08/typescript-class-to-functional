import * as React from 'react'
import './Confirm.css'

interface IProps {
  title: string;
  content: string;
}
interface State {
  
}

export default class Confirm extends React.Component<IProps, State> {
  state = {}

  public render() {
    return (
      <div className="confirm-wrapper confirm-visible">
        <div className="confirm-container">
          <div className="confirm-title-container">
            <span>{this.props.title}</span>
          </div>
        <div className="confirm-content-container">
          <p>{this.props.content}</p>
        </div>
        <div className="confirm-buttons-container">
          <button className="confirm-cancel">Cancel</button>
          <button className="confirm-okay">Okay</button>
        </div>
        </div>
      </div>
    )
  }
}

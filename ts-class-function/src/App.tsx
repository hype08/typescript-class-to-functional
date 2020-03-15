import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import Confirm from './Confirm';

interface IState {
  confirmOpen: boolean;
}
class App extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      confirmOpen: true,
    }
  }

  private handleCancelConfirmClick = () => {
    this.setState({ confirmOpen: false });
  }

  private handleConfirmClick = () => {
    this.setState({ confirmOpen: true });
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <button onClick={this.handleConfirmClick}>Confirm</button>
        <Confirm open={this.state.confirmOpen} title="title" content="content" onCancelClick={this.handleCancelConfirmClick} onOkClick={this.handleConfirmClick}/>
      </div>
    )
  }
}
export default App;

import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import Confirm from './Confirm';

interface IState {
  confirmOpen: boolean;
}
class App extends React.Component<{}, IState> {

  private handleCancelConfirmClick = () => {
    console.log("Cancel clicked");
  }

  private handleOkConfirmClick = () => {
    console.log("Ok clicked");
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
        <Confirm open={true} title="title" content="content" onCancelClick={this.handleCancelConfirmClick} onOkClick={this.handleOkConfirmClick}/>
      </div>
    )
  }
}
export default App;

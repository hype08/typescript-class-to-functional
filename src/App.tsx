import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import { Confirm } from './Confirm';

interface IState {
  confirmOpen: boolean;
  confirmMessage: string;
  confirmVisible: boolean;
  countDown: number
}
class App extends React.Component<{}, IState> {

  private timer: number = 0;

  public componentDidMount() {
    this.timer = window.setInterval(() => this.handleTimerTick(), 1000)

  }
  constructor(props: {}) {
    super(props);
    this.state = {
      confirmMessage: "Press Confirm",
      confirmOpen: false,
      confirmVisible: true,
      countDown: 10
    }
  }

  private handleTimerTick() {
    this.setState(
      {
        confirmMessage: `Please hit the confirm button ${
          this.state.countDown
        } secs to go`,
        countDown: this.state.countDown -1
      },
      () => {
        if (this.state.countDown <= 0) {
          clearInterval(this.timer);
          this.setState({
            confirmMessage: "Too late!",
            confirmVisible: false
          })
        }
      }
    )
  } 

  private handleCancelConfirmClick = () => {
    this.setState({ confirmMessage: "Okay, see you later!", confirmOpen: false });
    clearInterval(this.timer);
  }

  private handleConfirmClick = () => {
    this.setState({ confirmMessage: "Cool, thanks!", confirmOpen: true });
    clearInterval(this.timer);
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
        <p>{this.state.confirmMessage}</p>
        <button onClick={this.handleConfirmClick}>Confirm</button>
        <Confirm open={this.state.confirmOpen} title="title" content="content" onCancelClick={this.handleCancelConfirmClick} onOkClick={this.handleConfirmClick}/>
      </div>
    )
  }
}
export default App;

import React from 'react';
import { HashRouter, Route, NavLink, Switch } from 'react-router-dom'
import './App.css';
import Questions from './Questions'
import Result from './Result'

class App extends React.Component {
  state = {
    firstQuest: '',
    secondQuest: '',
    thirdFirstQuest: '',
    thirdSecondQuest: '',
    thirdThirdQuest: '',
    thirdFourQuest: '',
    thirdFiveQuest: '',
    fourQuest: '',
    fiveQuest: '',
    sixQuest: '',
    sevenQuest: '',
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target
    type === "checkbox" ?
      this.setState({
        [name]: checked
      })
      :
      this.setState({
        [name]: value
      })
  }

  render() {
    const { firstQuest, secondQuest, thirdFirstQuest, thirdSecondQuest, thirdThirdQuest, thirdFourQuest,
      thirdFiveQuest, fourQuest, fiveQuest, sixQuest, sevenQuest } = this.state;
    return (
      <div className="App">
        <HashRouter>
        <NavLink to="/" exact></NavLink>
          <Switch>
            <Route path="/" exact render={() => (<Questions firstQuest={firstQuest} secondQuest={secondQuest}
              thirdFirstQuest={thirdFirstQuest} thirdSecondQuest={thirdSecondQuest} thirdThirdQuest={thirdThirdQuest}
              thirdFourQuest={thirdFourQuest} thirdFiveQuest={thirdFiveQuest} fourQuest={fourQuest}
              fiveQuest={fiveQuest} sixQuest={sixQuest} sevenQuest={sevenQuest} handleChange={this.handleChange} />)} />

            <Route path="/answer" render={() => (<Result firstQuest={firstQuest} secondQuest={secondQuest}
              thirdFirstQuest={thirdFirstQuest} thirdThirdQuest={thirdThirdQuest} thirdFiveQuest={thirdFiveQuest}
              fourQuest={fourQuest} fiveQuest={fiveQuest} sixQuest={sixQuest} sevenQuest={sevenQuest} />)} />
          </Switch>
        </HashRouter>

      </div>
    );
  }
}

export default App
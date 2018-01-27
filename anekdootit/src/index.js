import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: Math.floor(Math.random() * this.props.anecdotes.length),
      pisteet: {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0}
    }
  }

  asetaArvoon = (arvo) => {
    return () => {
      this.setState({selected: arvo})
    }
  }

  lisaaAani = (arvo) => {
    const kopio = {...this.state.pisteet}
    kopio[arvo] += 1
    return () => {
      this.setState({pisteet: kopio})
    }
  }

  render() {
    return (
      <div>
        <p>{this.props.anecdotes[this.state.selected]}</p>
        <p>has {this.state.pisteet[this.state.selected]} votes</p>
      <div>
        <Button handleClick={this.lisaaAani(this.state.selected)} text="vote" />
        <Button handleClick={this.asetaArvoon(Math.floor(Math.random() * this.props.anecdotes.length))} text="Next Anecdote" />
      </div>
      <MostVotes anecdotes={this.props.anecdotes} state={this.state} />
      </div>
    )
  }
}

const MostVotes = (props) => {
  const taulukko = [props.state.pisteet[0], props.state.pisteet[1], props.state.pisteet[2],
    props.state.pisteet[3], props.state.pisteet[4], props.state.pisteet[5]]
  var suurin = Math.max(...taulukko)
  var suurimmanIndeksi = taulukko.indexOf(suurin);
  return (
    <div>
      <h2>anecdote with most votes: </h2>
      <p>{props.anecdotes[suurimmanIndeksi]}</p>
      <p>has {suurin} votes</p>
    </div>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)

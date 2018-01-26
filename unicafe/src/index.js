import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0
    }
  }

  lisaaHyva = () => {
    this.setState({
      hyva: this.state.hyva +1
    })
    console.log(this.state.hyva)
  }

  lisaaNeutraali = () => {
    this.setState({
      neutraali: this.state.neutraali +1
    })
    console.log(this.state.neutraali)
  }

  lisaaHuono = () => {
    this.setState({
      huono: this.state.huono +1
    })
    console.log(this.state.huono)
  }


  render() {
    return (
      <div>
        <h1>anna palautetta</h1>
        <Button handleClick={this.lisaaHyva} text="Hyvä" />
        <Button handleClick={this.lisaaNeutraali} text="Neutraali" />
        <Button handleClick={this.lisaaHuono} text="Huono" />
        <Statistics tilat={this.state} />
      </div>
    )
  }
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
      </button>
  )
}

this.onkoPalautteita = (hyva, neutraali, huono) => {
  if (hyva + neutraali + huono == 0) {
    return (
      0
    )
  } else {
    return (
      1
    )
  }
}

const Statistics = (props) => {
  if (this.onkoPalautteita(props.tilat.hyva, props.tilat.neutraali, props.tilat.huono) == 0) {
    return (
      <div>
        <p>Ei yhtään palautetta annettu</p>
      </div>
    )
  }
  return (
    <div>
      <h1>statistiikka</h1>
      <table>
        <tbody>
          <tr><td>hyvä</td><td>{props.tilat.hyva}</td></tr>
          <tr><td>neutraali</td><td>{props.tilat.neutraali}</td></tr>
          <tr><td>huono</td><td>{props.tilat.huono}</td></tr>
        </tbody>
          <Keskiarvo tilat={props.tilat} />
          <Positiivisia tilat={props.tilat} />
      </table>
    </div>
  )
}

const Positiivisia = (props) => {
  this.positiivisia = () => {
    let positiivisia = 0
    if (props.tilat.hyva + props.tilat.huono + props.tilat.neutraali != 0) {
      positiivisia = 100 * props.tilat.hyva / (props.tilat.hyva + props.tilat.huono + props.tilat.neutraali)
    }
    return (
      positiivisia
    )
  }
  return (
      <tbody>
        <tr>
          <td>positiivisia</td><td>{this.positiivisia()} %</td>
        </tr>
      </tbody>
  )
}

const Keskiarvo = (props) => {
  this.keskiArvo = () => {
    let keskiarvo = 0
    if (props.tilat.hyva + props.tilat.neutraali + props.tilat.huono != 0) {
      keskiarvo = (props.tilat.hyva - props.tilat.huono) / (props.tilat.hyva + props.tilat.huono + props.tilat.neutraali)
    }
    if (keskiarvo < 0) {
      keskiarvo = 0
    }
    return (
      keskiarvo
    )
  }

  return (
      <tbody>
        <tr>
          <td>keskiarvo</td><td>{this.keskiArvo()}</td>
        </tr>
      </tbody>
  )
}




ReactDOM.render(
  <App />,
  document.getElementById('root')
)

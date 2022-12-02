import React, {Component} from 'react';
import Navbar from "./components/navbar";
import Card from "./components/card";

import caffe from './images/caffe.jpeg';
import cappuccino from './images/cappuccino.jpg';
import thecaldo from './images/thecaldo.jpg';


class App extends Component {
  state = {
    cards: [
      {id: 0, nome: "Caffe", prezzo: 1.20, immagine: caffe, quantità: 0},
      {id: 1, nome: "Cappuccino", prezzo: 1.80, immagine: cappuccino, quantità: 0},
      {id: 2, nome: "The Caldo", prezzo: 1.50, immagine: thecaldo, quantità: 0},
    ]
  
  }


  handleDelete = cardId => {
    const cards = this.state.cards.filter(card => card.id !== cardId);
    this.setState({ cards });
  }

  handleIncrement = card => {
    const cards = [...this.state.cards];
    const id = cards.indexOf(card);
    cards[id] = {...card};
    cards[id].quantità++;
    this.setState({cards});
  }


  render() {
    return (
      <>
      <Navbar />
      <div className='container'>
        <h1> COSA DESIDERI ORDINARE ?</h1>
        <hr/>
        <div className='row' >
          {this.state.cards.map(card => (
            <Card
             key={card.id}
             onDelete={this.handleDelete}
             onIncrement={this.handleIncrement}
             card={card} />

          ))}
        </div>
      </div>
    
      </>
    );
  }

}

export default App;

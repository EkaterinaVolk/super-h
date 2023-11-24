import React from 'react'
import Card from './components/card.jsx';
import heroes from "./heroes";

class CardList extends React.Component {
  render() {
      return (
          <React.Fragment>
              <Card name={heroes[0].name} url={heroes[0].url} universe={heroes[0].universe} alterego={heroes[0].alterego} occupation={heroes[0].occupation} superpowers={heroes[0].superpowers} ></Card>
              <Card name={heroes[1].name} url={heroes[1].url} universe={heroes[1].universe} alterego={heroes[1].alterego} occupation={heroes[1].occupation} superpowers={heroes[1].superpowers} ></Card>
              <Card name={heroes[2].name} url={heroes[2].url} universe={heroes[2].universe} alterego={heroes[2].alterego} occupation={heroes[2].occupation} superpowers={heroes[2].superpowers} ></Card>
              <Card name={heroes[3].name} url={heroes[3].url} universe={heroes[3].universe} alterego={heroes[3].alterego} occupation={heroes[3].occupation} superpowers={heroes[3].superpowers} ></Card>
              <Card name={heroes[4].name} url={heroes[4].url} universe={heroes[4].universe} alterego={heroes[4].alterego} occupation={heroes[4].occupation} superpowers={heroes[4].superpowers} ></Card>
              <Card name={heroes[5].name} url={heroes[5].url} universe={heroes[5].universe} alterego={heroes[5].alterego} occupation={heroes[5].occupation} superpowers={heroes[5].superpowers} ></Card>
              <Card name={heroes[6].name} url={heroes[6].url} universe={heroes[6].universe} alterego={heroes[6].alterego} occupation={heroes[6].occupation} superpowers={heroes[6].superpowers} ></Card>
              <Card name={heroes[7].name} url={heroes[7].url} universe={heroes[7].universe} alterego={heroes[7].alterego} occupation={heroes[7].occupation} superpowers={heroes[7].superpowers} ></Card>
              <Card name={heroes[8].name} url={heroes[8].url} universe={heroes[8].universe} alterego={heroes[8].alterego} occupation={heroes[8].occupation} superpowers={heroes[8].superpowers} ></Card>
              <Card name={heroes[9].name} url={heroes[9].url} universe={heroes[9].universe} alterego={heroes[9].alterego} occupation={heroes[9].occupation} superpowers={heroes[9].superpowers} ></Card>
          </React.Fragment>
      );
  }
}

export default CardList;



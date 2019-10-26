import React, { Component } from 'react';
import Card from '../components/Card';

class Cards extends Component {
    constructor(props) {
        super(props);
        this.episodes = null;
        this.state = {
            cards: [],
            disappear: false
        };
        fetch(`https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes`)
        .then(data => data.json())
        .then(({
            _embedded
        }) => {
            this.setState(() => {
                this.episodes = _embedded.episodes;
                return { cards: this.episodesComponents() }
            });
        });
    }

    episodesComponents() {
        return this.episodes.map(({ name, image, summary }, i) => (
            <Card
            disappear={this.state.disappear}
            title={name}
            src={image.medium}
            paragraph={summary}
            key={i}/>
        ));
    }

    toggleDisappear() {
        this.setState({
            disappear: !this.state.disappear,
            cards: this.episodesComponents()
        });
    }

    render() {
        return (
            <div className="row">
                <button onClick={this.toggleDisappear.bind(this)}> Show favorites </button>
                {this.state.cards}
            </div>
        );
    }
}

export default Cards;
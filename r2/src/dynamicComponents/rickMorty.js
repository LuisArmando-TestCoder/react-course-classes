import React, { Component } from 'react';
import Card from '../components/Card';

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        };
        fetch(`https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes`)
        .then(data => data.json())
        .then(({
            _embedded
        }) => {
            console.log(_embedded.episodes);
            this.setState(() => {
                return {
                    cards: _embedded
                    .episodes
                    .map(({ name, image, summary }, i) => (
                        <Card
                        title={name}
                        src={image.medium}
                        paragraph={summary}
                        key={i} />
                    )),
                };
            });
        });
    }
    render() {
        return (
            <div className="row">
                {this.state.cards}
            </div>
        );
    }
}

export default Cards;
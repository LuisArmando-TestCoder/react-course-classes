const root = document.getElementById('root');

function fetchApi() {
  fetch(`https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes`)
    .then(data => data.json())
    .then(({
      _embedded
    }) => {
      const cardsArray = _embedded.episodes.map((props, i) => {
        return React.createElement(Card, {
          key: i + 1 + '_sheep',
          title: props.name,
          src: props.image.medium,
          paragraph: props.summary.replace(/<\/(.*)>/, '').replace(/<(.*)>/, '')
        })
      });

      ReactDOM.render(
        React.createElement('div', {
          className: 'container'
        }, [
          React.createElement('div', {
            key: 20,
            className: 'row'
          }, cardsArray)
        ]),
        root
      );
    });
}

function Title({
  title
}) {
  return React.createElement('h3', {
    className: 'title'
  }, title);
}

function Paragraph({
  paragraph
}) {
  return React.createElement('p', {
    className: 'description'
  }, paragraph);
}

function Image({
  src
}) {
  return React.createElement('img', {
    className: 'img',
    src
  });
}

function Card({ title, paragraph, src }) {
  return React.createElement('div', {
      className: 'card col-sm-12 col-md-4'
    },
    [
      React.createElement(Image, {
        key: 12,
        src
      }),
      React.createElement(Title, {
        key: 10,
        title
      }),
      React.createElement(Paragraph, {
        key: 11,
        paragraph
      }),
    ]
  );
}

fetchApi();
'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return <div className="text">'Hello World.'</div>;
    }

    return (
      <button onClick={ () => this.setState({ liked: true }) }>Like</button>
    );
  }
}

const domContainer = document.querySelector('#Connections');
ReactDOM.render(e(LikeButton), domContainer);

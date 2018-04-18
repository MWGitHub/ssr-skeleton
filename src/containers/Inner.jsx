import React from 'react';

class Inner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      boop: false
    };

    this.handleLoad = this.handleLoad.bind(this);
    this.clicked = this.handleClick.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ boop: true });
    }, 5000);
  }

  handleLoad() {
    console.log('pug image onLoad event fired');
    this.setState({ isLoaded: true });
  }

  handleClick() {
    console.log('pet the pug');
  }

  render() {
    console.log('rerendering boop', this.state.boop, this.state.isLoaded);
    return (
      <div>
        <h1>pug</h1>
        <p>
          <button onClick={this.handleClick}>
            {this.state.boop ? 'boop' : 'button'}
          </button>
        </p>
        <img
          src={'https://i.ytimg.com/vi/wRx3Uvcktm8/maxresdefault.jpg'}
          onLoad={this.handleLoad}
          alt="pug"
        />
      </div>
    );
  }
}

export default Inner;

import React from 'react';

class Inner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      boop: false
    };

    this.handleLoad = this.handleLoad.bind(this);
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

  render() {
    return (
      <div>
        <span>pug</span>
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

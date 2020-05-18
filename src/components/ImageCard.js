import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 }
    this.imgRef = React.createRef();
  }

  componentDidMount() {
    this.imgRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const h = this.imgRef.current.clientHeight;
    const spans = Math.ceil(h / 15);
    this.setState({ spans });
  }

  render() {
    const { urls, description } = this.props.img;
    const { spans } = this.state;

    return (
      <div style={{ gridRowEnd: `span ${spans}` }}>
        <img ref={this.imgRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}

export default ImageCard

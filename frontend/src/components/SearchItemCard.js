import { Component } from "react";

class SearchItemCard extends Component {
  render() {
    const { imageData } = this.props;
    const { urls, alt_description, color } = imageData;

    return (
      <>
        <div className="image-card">
          <div className="image" style={{ backgroundColor: color }}>
            <img src={urls.regular} alt={alt_description} />
          </div>
          <div className="image-desc">
             <h3>{ alt_description }</h3>
          </div>
        </div>
      </>
    );
  }
}

export default SearchItemCard;

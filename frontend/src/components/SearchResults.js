import { Component } from "react";
import { connect } from "react-redux";
import SearchItemCard from "./SearchItemCard";

const mapStateToProps = (state) => ({
  imageList: state.imageList,
});

class SearchResults extends Component {
  renderImages() {
    const { imageList } = this.props;
    const { images } = imageList;
    if (images.length !== 0) {
      return (
        <div className="search-results-wrapper">
          {images.map((imageData) => {
            return <SearchItemCard imageData={imageData} key={imageData.id} />;
          })}
        </div>
      );
    } else {
      return <p>Images not found</p>;
    }
  }
  render() {
    const { imageList } = this.props;
    const { loading, error } = imageList;
    return (
      <>
        <div className="image-search-results">
          <div className="container">
            <h1> Image Search Results </h1>

            {loading ? (
              <p></p>
            ) : error ? (
              <p>{error}</p>
            ) : (
              <>{this.renderImages()}</>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps)(SearchResults);

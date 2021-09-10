import { Component } from "react";
import { imageListDetails } from "../actions/imagesAction";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    searchImages: (query) => {
      imageListDetails(dispatch, query);
    },
  };
};

class SearchComponent extends Component {
  constructor() {
    super();
    this.timer = "";
  }
  inputSearch(query) {
    const { searchImages } = this.props;

    clearTimeout(this.timer);
    this.timer = setTimeout(function () {
      searchImages(query);
    }, 1000);
  }
  render() {
    return (
      <>
        <div className="search-container">
          <div className="container">
            <input
              type="text"
              placeholder="Search Images"
              onChange={(event) => {
                this.inputSearch(event.target.value);
              }}
            />
          </div>
        </div>
      </>
    );
  }
}

export default connect(null, mapDispatchToProps)(SearchComponent);

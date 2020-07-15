import React from 'react';
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    }
    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    };

    this.handleTermChange = this.handleTermChange.bind(this)
    this.handleLocationChange = this.handleLocationChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  getSortByClass(sortByOption) {
    if (sortBy.value = this.sortByOptions)
    return 'active';
    else return '';
  }

  handleSortByChange(sortByOption) {
    this.setState(
      sortBy = this.state
    )
  }

  handleTermChange(event) {
    this.setState(
      {term: event.target.value}
    )
  }

  handleLocationChange(event) {
    this.setState(
      {location: event.target.value}
    )
  }

  handleSearch(event) {
    searchYelp(term, location, sortBy)
    event.preventDefault()
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return <li Onclick={handleSortByChange.bind(this, sortByOptionValue)} className= { getSortByClass(sortByOptionValue) } key={this.sortByOptionValue}>{sortByOption}</li>;
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input onClick={this.handleTermChange} placeholder="Search Businesses" />
          <input onClick={this.handleLocationChange} placeholder="Where?" />
        </div>
        <div className="SearchBar-submit" onClick={this.handleSearch}>
          <a>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';

export function FilterLink(props) {
  function handleFilterClick() {
    props.dispatch(setVisibilityFilter(props.filterName));
  }

  return (
    <li className="FilterLinks"
      onClick={handleFilterClick}><a href="#">{props.children}</a></li>
  );
}

export default connect()(FilterLink);

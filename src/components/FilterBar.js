import React from 'react';
import FilterLink from '../containers/FilterLink';

export default function FilterBar(props) {
  return (
    <ul className="FilterBar">
      <FilterLink filterName={'ALL'}>All</FilterLink>
      <FilterLink filterName={'INCOMPLETE'}>Incomplete</FilterLink>
      <FilterLink filterName={'COMPLETE'}>Complete</FilterLink>
    </ul>
  );
};

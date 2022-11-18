import React, { useContext } from 'react';
import { dataContext } from '../../providers/dataProvider/dataProvider';

function ExpanseList() {
  const { expanseList } = useContext(dataContext);
  return expanseList ? (
    <ul>
      {expanseList.map(({ name, id, value }) => (
        <li key={id}>
          {name}
          {' '}
          {value}
        </li>
      ))}
    </ul>
  ) : <h3>Do not have any expanse</h3>;
}

export default ExpanseList;

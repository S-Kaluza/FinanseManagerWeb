import React, { useContext } from 'react';
import { dataContext } from '../../providers/dataProvider/dataProvider';

function IncomeList() {
  const { incomeList } = useContext(dataContext);
  return incomeList ? (
    <ul>
      {incomeList.map(({ name, id, value }) => (
        <li key={id}>
          {name}
          {' '}
          {value}
        </li>
      ))}
    </ul>
  ) : <h3>Do not have any expanse</h3>;
}

export default IncomeList;

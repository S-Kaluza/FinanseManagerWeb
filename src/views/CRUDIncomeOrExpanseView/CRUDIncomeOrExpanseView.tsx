import React, { useContext } from 'react';
import { useFormik } from 'formik';
import { format } from 'date-fns';
import { initialValues, CRUDIncomeOrExpanseViewValidationSchema } from './CRUDIncomeOrExpanseView.validation';
import { dataContext } from '../../providers/dataProvider/dataProvider';
import { IIncomeOrExpanse } from '../../providers/dataProvider/dataContext.types';

function CRUDIncomeOrExpanseView() {
  const { addExpanse, addIncome } = useContext(dataContext);
  const { handleSubmit, values, handleChange } = useFormik({
    initialValues,
    validationSchema: CRUDIncomeOrExpanseViewValidationSchema,
    onSubmit: () => {
      const incomeOrExpanse : IIncomeOrExpanse = {
        id: '1',
        name: values.name,
        date: values.date,
        value: values.value,
        connected: [],
      };
      console.log(values.isExpanse);
      if (values.isExpanse) {
        addExpanse(incomeOrExpanse);
      } else addIncome(incomeOrExpanse);
    },
  });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          data:
          {' '}
          <input type="date" value={format(values.date, 'yyyy-MM-dd')} name="date" id="date" onChange={handleChange} />
        </label>
        <label>
          name:
          {' '}
          <input type="text" value={values.name} name="name" id="name" onChange={handleChange} />
        </label>
        <label>
          value:
          {' '}
          <input type="text" value={values.value} name="value" id="value" onChange={handleChange} />
        </label>
        <label>
          expanse:
          {' '}
          <input type="checkbox" checked={values.isExpanse} name="isExpanse" id="isExpanse" onChange={handleChange} />
        </label>
        <button type="submit" title="Submit">Sumbit</button>
      </form>
    </div>
  );
}

export default CRUDIncomeOrExpanseView;

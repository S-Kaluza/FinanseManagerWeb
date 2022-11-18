import { useFormik } from 'formik';
import React, { useContext } from 'react';
import { dataContext } from '../../providers/dataProvider/dataProvider';
import { ConvertCurrencyValidationSchema, initialValues } from './CurrencyConvertForm.validation';

function CurrencyConvertForm() {
  const { refetchConvertCurrency, setExchangeData } = useContext(dataContext);
  const { handleSubmit, values, handleChange } = useFormik({
    initialValues,
    validationSchema: ConvertCurrencyValidationSchema,
    onSubmit: () => {
      setExchangeData(values);
      refetchConvertCurrency();
    },
  });
  return (
    <form onSubmit={handleSubmit}>
      <input list="currencyHaveDatalist" id="have" value={values.have} name="have" title="have" onChange={handleChange} />
      <datalist id="currencyHaveDatalist">
        <option value="PLN" />
        <option value="EUR" />
        <option value="JPY" />
        <option value="GBP" />
        <option value="CNY" />
      </datalist>
      <label htmlFor="currencyHaveDatalist">from </label>
      <input list="currencyWantDatalist" id="want" value={values.want} name="want" title="want" onChange={handleChange} />
      <datalist id="currencyWantDatalist">
        <option value="PLN" />
        <option value="EUR" />
        <option value="JPY" />
        <option value="GBP" />
        <option value="CNY" />
      </datalist>
      <input placeholder="Wartość" onChange={handleChange} id="amount" name="amount" />
      <button type="submit">Przelicz</button>
    </form>
  );
}

export default CurrencyConvertForm;

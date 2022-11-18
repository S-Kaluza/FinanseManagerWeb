import * as Yup from 'yup';

export const ConvertCurrencyValidationSchema = Yup.object().shape({
  want: Yup.string().required(),
  have: Yup.string().required(),
  amount: Yup.string().required(),
});

export const initialValues = {
  have: 'PLN',
  want: 'EUR',
  amount: '1',
};

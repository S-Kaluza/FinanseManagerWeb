import * as Yup from 'yup';

export const CRUDIncomeOrExpanseViewValidationSchema = Yup.object().shape({
  date: Yup.date().required(),
  value: Yup.number().required(),
  name: Yup.string().required(),
});

export const initialValues = {
  date: new Date(),
  value: 0,
  name: '',
  isExpanse: false,
};

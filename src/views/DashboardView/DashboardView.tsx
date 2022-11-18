import React, { useContext } from 'react';
import { dataContext } from '../../providers/dataProvider/dataProvider';
import { MainWrapper, HeadWrapper, BodyWrapper } from './DashboardView.styles';
import CurrencyConvertForm from '../../components/CurrencyConvertForm/CurrencyConvertForm';
import IncomeList from '../../components/IncomeList/IncomeList';
import ExpanseList from '../../components/ExpanseList/ExpanseList';

function DashboardView() {
  const { inflation, isFetchingInflation, convertedCurrency } = useContext(dataContext);
  return (
    <MainWrapper>
      <HeadWrapper>
        <h1>
          {isFetchingInflation ? 'Loading...' : inflation}
        </h1>
        <h3>Inflation</h3>
      </HeadWrapper>
      <BodyWrapper>
        <CurrencyConvertForm />
        <h1>{convertedCurrency?.data ? convertedCurrency.data.new_amount : <p>Add value and and currency</p>}</h1>
        <h2>income</h2>
        <IncomeList />
        <h2>Expanse</h2>
        <ExpanseList />
      </BodyWrapper>
    </MainWrapper>
  );
}

export default DashboardView;

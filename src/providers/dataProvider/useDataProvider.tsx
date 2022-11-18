import { useState } from 'react';
import { useQuery } from 'react-query';
import { dataFetch } from '../../api/dataApi';
import { IExchangeSendedData, IIncomeOrExpanse } from './dataContext.types';

function useDataProvider() {
  const [number, setNumber] = useState<number>(10);
  const [incomes, setIncomes] = useState({} as IIncomeOrExpanse);
  const [expanses, setExpases] = useState({} as IIncomeOrExpanse);
  const [exchangeData, setExchangeData] = useState({} as IExchangeSendedData);
  const [incomeList, setIncomeList] = useState([] as IIncomeOrExpanse[]);
  const [expanseList, setExpanseList] = useState([] as IIncomeOrExpanse[]);
  const { isFetching: isFetchingInflation, data: inflation } = useQuery('inflation', dataFetch.getInflation, { });
  const { data: convertedCurrency, isFetched: isFetchedConvertCurrency, refetch: refetchConvertCurrency } = useQuery(['convertData', exchangeData], () => dataFetch.convertCurrency(exchangeData), { });

  const addIncome = (income : IIncomeOrExpanse) => {
    setIncomeList((prev) => [...prev, income]);
  };

  const addExpanse = (expanse : IIncomeOrExpanse) => {
    setExpanseList((prev) => [...prev, expanse]);
  };

  const removeIncome = (id: string) => {
    const tempList = incomeList.filter((income) => income.id !== id);
    setIncomeList(tempList);
  };

  const removeExpanse = (id: string) => {
    const tempList = expanseList.filter((expanse) => expanse.id !== id);
    setExpanseList(tempList);
  };

  return {
    number,
    setNumber,
    inflation: inflation?.data[0].yearly_rate_pct,
    isFetchingInflation,
    incomes,
    setIncomes,
    expanses,
    setExpases,
    convertedCurrency,
    isFetchedConvertCurrency,
    refetchConvertCurrency,
    exchangeData,
    setExchangeData,
    addExpanse,
    addIncome,
    removeExpanse,
    removeIncome,
    incomeList,
    expanseList,
  };
}
export default useDataProvider;

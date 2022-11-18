import React from 'react';
import { AxiosResponse } from 'axios';

export interface IExchangeSendedData {
  have: string,
  want: string,
  amount: string,
}

export interface IExchangeReceivedData {
  old_amount: string,
  old_currency: string,
  new_currency: string,
  new_amount: string
}

export interface IIncomeOrExpanse {
  id: string,
  date: Date,
  value: number,
  name: string,
  connected: number[]
}

export interface IDataInterface {
  data?: number,
  number: number,
  setNumber: React.Dispatch<React.SetStateAction<number>>
  inflation: number;
  isFetchingInflation: boolean;
  incomes: IIncomeOrExpanse,
  setIncomes: React.Dispatch<IIncomeOrExpanse>,
  expanses: IIncomeOrExpanse,
  setExpases: React.Dispatch<IIncomeOrExpanse>,
  convertedCurrency: AxiosResponse<any, any> | undefined,
  isFetchedConvertCurrency: boolean,
  refetchConvertCurrency: () => void,
  exchangeData: IExchangeSendedData,
  setExchangeData: React.Dispatch<IExchangeSendedData>,
  addExpanse: (expanse: IIncomeOrExpanse) => void,
  addIncome: (income: IIncomeOrExpanse) => void,
  removeExpanse: (id: string) => void,
  removeIncome: (id: string) => void,
  incomeList: IIncomeOrExpanse[],
  expanseList: IIncomeOrExpanse[],
}

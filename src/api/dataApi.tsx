import axios from 'axios';
import { IExchangeSendedData } from '../providers/dataProvider/dataContext.types';

export const dataFetch = {
  async getInflation() {
    const res = await axios({
      url: 'https://api.api-ninjas.com/v1/inflation?country=poland',
      headers: { 'X-Api-Key': 'ofHch3J2V+Esbh75mbiXhg==CDJFYF2LaS2V1KY3' },
    });
    return res;
  },
  async convertCurrency(exchangeData: IExchangeSendedData) {
    const res = await axios({
      url: `https://api.api-ninjas.com/v1/convertcurrency?have=${exchangeData.have}&want=${exchangeData.want}&amount=${exchangeData.amount}`,
      headers: { 'X-Api-Key': 'ofHch3J2V+Esbh75mbiXhg==CDJFYF2LaS2V1KY3' },
    });
    return res;
  },
};

export default dataFetch;

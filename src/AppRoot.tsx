import React from 'react';
import { QueryClientProvider } from 'react-query';
import RootNavigator from './navigation/RootNavigator';
import DataProvider from './providers/dataProvider/dataProvider';
import queryClient from './api/queryClient';

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <DataProvider>
          <RootNavigator />
        </DataProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;

import AppProvider from './AppProvider';
import Routes from './Routes';
import { store } from '../../store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider
      store={store}
    >
      <AppProvider>
        <Routes />
      </AppProvider>
    </Provider>
  );
}

export default App;

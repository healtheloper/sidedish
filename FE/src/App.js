import { useEffect } from 'react';

import categoriesApi from './apis/categoriesApi';
import Header from './components/Header';
import Main from './components/Main/Main';
import Modal from './components/Modal/Modal';
import CardInfoContext from './context/ModalCardInfoContext';
import GlobalStyles from './globalStyles';

function App() {
  useEffect(() => {
    categoriesApi.getFoodsByCategory({ type: 'main' });
  }, []);

  return (
    <CardInfoContext>
      <div className="App">
        <GlobalStyles />
        <Header />
        <Main />
        <Modal />
      </div>
    </CardInfoContext>
  );
}

export default App;

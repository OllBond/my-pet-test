import { Provider } from 'react-redux';
import { store /*persistor*/ } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';

import NavBar from './NavBar/NavBar';
import UserRoutes from '../UserRoutes';
import AuthLayout from './AuthLayout/AuthLayout';
import Container from './Container/Container';

function App() {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <AuthLayout>
        <BrowserRouter basename="/my-pet-test">
          <Container>
            <NavBar />
            <UserRoutes />
          </Container>
        </BrowserRouter>
      </AuthLayout>
      {/* </PersistGate> */}
    </Provider>
  );
}

export default App;

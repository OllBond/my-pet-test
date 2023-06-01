// import { Provider } from 'react-redux';
// import { store, persistor } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';

import NavBar from './NavBar/NavBar';
import UserRoutes from '../UserRoutes';
import AuthLayout from './AuthLayout/AuthLayout';

function App() {
  return (
    // <Provider store={store}>
    //   <PersistGate loading={null} persistor={persistor}>
    <AuthLayout>
      <BrowserRouter basename="/my-pet-test">
        <NavBar />
        <UserRoutes />
      </BrowserRouter>
    </AuthLayout>
    //   </PersistGate>
    // </Provider>
  );
}

export default App;

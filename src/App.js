import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthMain from './components/auth/authMain';
import HeaderMain from './components/header/headerMain';
import RegistrMain from './components/registr/registrMain';
import PasswordConfirmMain from './components/auth/passwordConfirm/passwordConfirmMain';
import ListOfClientsMain from './components/listOfClients/listOfClientsMain';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <HeaderMain /> */}
        {/* <AuthMain /> */}
        {/* <RegistrMain /> */}
        {/* <PasswordConfirmMain /> */}
        {/* <ListOfClientsMain /> */}
        <Routes>
          <Route path='/' Component={AuthMain} />
          <Route path='/registration' Component={RegistrMain} />
          <Route path='/passwordConfirm' Component={PasswordConfirmMain} />
          <Route path='/clients' Component={ListOfClientsMain} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthMain from './components/auth/authMain';
import HeaderMain from './components/header/headerMain';
import RegistrMain from './components/registr/registrMain';
import PasswordConfirmMain from './components/auth/passwordConfirm/passwordConfirmMain';
import ListOfClientsMain from './components/listOfClients/listOfClientsMain';
import ClientInfoMain from './components/clientInfo/clientInfoMain';
import SuccessRegistr from './components/registr/successRegistrForm/successRegistrMain';
import EditPasswordMain from './components/auth/editPassword/editPasswordMain';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <HeaderMain /> */}
        {/* <AuthMain /> */}
        {/* <RegistrMain /> */}
        {/* <PasswordConfirmMain /> */}
        {/* <ListOfClientsMain /> */}
        {/* <ClientInfoMain /> */}
        {/* <SuccessRegistr /> */}
        {/* <EditPasswordMain /> */}
        <Routes>
          <Route path='/' Component={AuthMain} />
          <Route path='/registration' Component={RegistrMain} />
          <Route path='/passwordConfirm' Component={PasswordConfirmMain} />
          <Route path='/clients' Component={ListOfClientsMain} />
          <Route path='/clients/id/details' Component={ClientInfoMain} />
          <Route path='/successRegistr' Component={SuccessRegistr} />
          <Route path='/editPassword' Component={EditPasswordMain} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

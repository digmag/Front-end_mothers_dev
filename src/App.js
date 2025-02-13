import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import AuthMain from './components/auth/authMain';
import HeaderMain from './components/header/headerMain';
import RegistrMain from './components/registr/registrMain';
import PasswordConfirmMain from './components/auth/passwordConfirm/passwordConfirmMain';
import ListOfClientsMain from './components/listOfClients/listOfClientsMain';
import ClientInfoMain from './components/clientInfo/clientInfoMain';
import SuccessRegistr from './components/registr/successRegistrForm/successRegistrMain';
import EditPasswordMain from './components/auth/editPassword/editPasswordMain';
import ListOfCompletedWorkMain from './components/listOfCompletedWork/listOfCompletedWorkMain';
import ListOfContractsMain from './components/listOfContracts/listOfContractsMain';
import ListOfManualsMain from './components/listOfManuals/listOfManualsMain';
import { Provider } from 'react-redux';
import store from './store/store';
import AdminPanelMain from './components/adminPanel/adminPanelMain';
import ContractInfoMain from './components/listOfContracts/comp/contractInfo';

function App() {
  return (
    <Provider store={store}>
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
          {/* <ListOfCompletedWorkMain />
        <ListOfContractsMain />
        <ListOfManualsMain /> */}
          {/* <AdminPanelMain /> */}
          <Routes>
            <Route path="*" element={<Navigate to='/login' />} />
            <Route path='/login' Component={AuthMain} />
            <Route path='/registration' Component={RegistrMain} />
            <Route path='/passwordConfirm' Component={PasswordConfirmMain} />
            <Route path='/clients/:id/details' Component={ClientInfoMain} />
            <Route path='/verification' Component={SuccessRegistr} />
            <Route path='/recovery/:id' Component={EditPasswordMain} />
            <Route path='/clients' Component={ListOfClientsMain} />
            <Route path='/contracts' Component={ListOfContractsMain} />
            <Route path='/completedWork' Component={ListOfCompletedWorkMain} />
            <Route path='/manuals' Component={ListOfManualsMain} />
            <Route path='/admin' Component={AdminPanelMain} />
            <Route path='/contract/:id' Component={ContractInfoMain} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>

  );
}

export default App;

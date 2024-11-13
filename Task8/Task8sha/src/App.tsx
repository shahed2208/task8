import './App.css'
import Sidebar from './components/Dashboard/Sidebar/sidebar'
import './components/Login/Login'
import Login from './components/Login/Login'
import Add from './components/Add/Add'
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <>      
      <Provider store={store}>
      <BrowserRouter>
       <Login/>
      </BrowserRouter>
    </Provider>
    </>
  ) 
}
export default App
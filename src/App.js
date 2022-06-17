import './App.css';
import MainPage from "./components/MainPage/MainPage";
import Warehouses from "./components/Warehouses/Warehouses";
import {UserProvider} from './context/userContext';

function App() {
  return (
      <UserProvider>
          <div className="App">
              {/*<MainPage/>*/}
              <Warehouses />
          </div>
      </UserProvider>
  );
}

export default App;

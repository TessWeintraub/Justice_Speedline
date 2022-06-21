import './App.css';
import AppRouter from "./UI/AppRouter/AppRouter";
import {BrowserRouter} from "react-router-dom";
import {UserProvider} from './context/userContext';

function App() {
  return (
      <UserProvider>
        <BrowserRouter>
          <div className="App">
            <AppRouter/>
          </div>
        </BrowserRouter>
      </UserProvider>
  );
}

export default App;

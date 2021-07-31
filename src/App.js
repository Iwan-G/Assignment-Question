import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import VehicleManagement from './Pages/VehicleManagement';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Route path ="/"><VehicleManagement /> </Route>
    </div>
    </BrowserRouter>
  );
}

export default App;

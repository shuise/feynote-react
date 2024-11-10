import {
  BrowserRouter, HashRouter,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";

import './App.css';

import Menu from './pages/menu';

import Homepage from './pages/homepage';
import List from './pages/list';

function App() {
    return (<div className="App">
      <Menu />
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={ <Homepage /> } />
                <Route exact path="/list" element={ <List /> } />
            </Routes>
        </BrowserRouter>
    </div>);
}

export default App;

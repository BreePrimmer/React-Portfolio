import './App.css';
import Portfolio from './components/Portfolio';

import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="portfolio">
      <Portfolio />
      <Outlet />
    </div>
  );
}

export default App;

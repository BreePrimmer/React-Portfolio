import './App.css';
import Portfolio from './components/Portfolio';
import Footer from './components/footer';

import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="portfolio">
      <Portfolio />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import Footer from './components/footer';
import Header from './components/Header';

import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="portfolio">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

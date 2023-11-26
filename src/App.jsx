import './App.css';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


function App() {
  return (
    <>
      
      <NavBar />
      <main className='container'>
      <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;

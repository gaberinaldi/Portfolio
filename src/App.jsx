import './App.css';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';


function App() {
  return (
    <>
      
      <NavBar />
      <main className='container'>
      <Outlet />
      </main>
    </>
  );
}

export default App;

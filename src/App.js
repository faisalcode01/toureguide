// import logo from './logo.svg';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner/Banner';
import Client from './components/Client/Client';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import Newsletter from './components/Newsletter/Newsletter';
import router from './components/Router/Routes';
import Services from './components/Services/Services';

function App() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Services></Services>
      <Client></Client>
      <Newsletter></Newsletter>
      <Footer></Footer>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

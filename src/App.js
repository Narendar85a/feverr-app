import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home';
import Gigs from './pages/gigs/Gigs'
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer';
import MyGigs from './pages/myGigs/MyGigs';
import AddNewGig from './pages/add/AddNewGig'
import Gig from './pages/gig/Gig'
import Order from './pages/orders/Order'
import Messages from './pages/messages/Messages'
import Message from './pages/message/Message'
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import './App.css';

function App() {

  const Layout = () => {
  return (
    <div> 
       <Nav />
       <Outlet />
       <Footer />
      
    </div>
  );
}

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout />,
    children : [
      {
        path: '/',
        element : <Home />,
      },
      {
        path: '/gigs',
        element : <Gigs />,
      },
      {
        path: '/mygigs',
        element : <MyGigs />,
      },
      {
        path: '/orders',
        element : <Order />,
      },
      {
        path: '/messages',
        element : <Messages />,
      },
      {
        path: '/message',
        element : <Message />,
      },
      {
        path: '/add',
        element : <AddNewGig />,
      },
      {
        path: '/gig',
        element : <Gig />,
      },
    ]
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  }
])
return <RouterProvider router = {router} />
}

export default App;

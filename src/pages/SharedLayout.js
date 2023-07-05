import React from 'react';
import { ToastContainer } from 'react-toastify';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const SharedLayout = () => {
  return (
    <>
      <ToastContainer position="top-center" />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;

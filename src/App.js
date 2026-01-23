import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import './assets/css/swap.css';
import './assets/css/bootstrap.min.css';
import './assets/css/swiper.min.css';
import './assets/css/style.css';
import './assets/css/media_query.css';

import HomeSolid from "./pages/HomeSolid.tsx";
import About from "./pages/About.tsx";
import Services from "./pages/Services.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";

import Footer from "./component/Footer.tsx";
import Header from "./component/Header.tsx";
import ScrollTopPage from './component/ScrollTopPage.tsx';
import Preloader from './component/Preloader.tsx';
import ScrollToTopButton from "./component/ScrollToTopButton.tsx";
import SmoothScroll from './hooks/SmoothScroll.ts';
import ContactForm from "./component/ContactForm.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <SmoothScroll />
        <ScrollTopPage />
        <Header />
        <Preloader />
        <Routes>
          <Route path="/" element={<HomeSolid />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ContactForm />
        <Footer />
        <ScrollToTopButton />
      </BrowserRouter>
    </>
  );
}

export default App;

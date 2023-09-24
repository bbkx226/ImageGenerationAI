import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { logo } from './assets';
import { Home, CreatePost } from './page';

const App = () => (
  // BrowserRouter is a component provided by the react-router-dom library that allows you to use client-side routing in your React application. It provides a way to map URLs to different components that should be rendered when the URL matches a certain pattern.
  <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 border-b border-b-[#e6ebf4]">
      <a href='https://www.bbkx.live'><img src={logo} alt="logo" className="w-32 object-contain" /></a>
      <Link to="/" className="font-inter hover:bg-black  font-medium bg-[#333333] text-white px-4 py-2 rounded-md ml-auto">Home</Link>
      <Link to="/create-post" className="font-inter hover:bg-black  font-medium bg-[#333333] text-white px-4 py-2 rounded-md ml-2">Create</Link>
    </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;

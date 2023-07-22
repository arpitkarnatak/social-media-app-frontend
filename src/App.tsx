import React, { useContext, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { IPost, IUser } from './types';
import User from './components/User/User';
import Post from './components/Post/Post';
import { QueryClient, QueryClientProvider } from 'react-query';
import GlobalContextProvider, { GlobalContext } from './context/GlobalContext';
import Home from './pages/Home';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {

  const [user, setUser] = useState<any>(undefined)

  const [posts, setAllPosts] = useState<IPost[]>([])


  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalContextProvider>
        <div className="App">
          <Header />
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </BrowserRouter>
        </div>
      </GlobalContextProvider>
    </QueryClientProvider>
  );
}

export default App;

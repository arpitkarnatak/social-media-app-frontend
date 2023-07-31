import React from 'react';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import GlobalContextProvider from './context/GlobalContext';
import Home from './pages/Home';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile';
import Post from './pages/Post';



function App() {
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
              <Route path='/user/:userId' element={<Profile />} />
              <Route path='/post/:postId' element={<Post />} />
            </Routes>
          </BrowserRouter>
        </div>
      </GlobalContextProvider>
    </QueryClientProvider>
  );
}

export default App;

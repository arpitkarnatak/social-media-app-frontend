import React from "react";
import "App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalContextProvider from "context/GlobalContext";
import Home from "pages/Home";
import Header from "components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "pages/Profile";
import Post from "pages/Post";
import ScrollToTopButton from "components/ScrollToTop";
import { Title36, Title64 } from "styles/typography";

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
          <ScrollToTopButton />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user/:userId" element={<Profile />} />
              <Route path="/post/:postId" element={<Post />} />
            </Routes>
          </BrowserRouter>
        </div>
      </GlobalContextProvider>
    </QueryClientProvider>
  );
}

export default App;

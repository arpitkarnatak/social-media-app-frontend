import React, { Suspense, lazy } from "react";
import "App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalContextProvider from "context/GlobalContext";
import Header from "components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTopButton from "components/ScrollToTop";
import LoadingPlaceholderAndCover from "styles/cover";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  const Home = lazy(() => import("pages/Home"))
  const Profile = lazy(() => import("pages/Profile"))
  const Post = lazy(() => import("pages/Post"))
  
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalContextProvider>
        <div className="App">
          <Header />
          <ScrollToTopButton />
          <BrowserRouter>
            <Suspense fallback={<LoadingPlaceholderAndCover />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user/:userId" element={<Profile />} />
                <Route path="/post/:postId" element={<Post />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </div>
      </GlobalContextProvider>
    </QueryClientProvider>
  );
}

export default App;

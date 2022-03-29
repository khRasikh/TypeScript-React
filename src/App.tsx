import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import {
  BrowserRouter as Routers,
  Routes,
  Route,
  Link,
} from "react-router-dom";

export function Product() {
  return <>HI</>;
}

function App() {
  return (
    <>
      <Routers>
        <Header />
        <div className="min-h-full lg:text-left text-gray-600 p-8 bg-gray-700">
          Welcome to TypeScript-React front style using Tailwind
          <Link to="/">First</Link>
        </div>
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
        <Footer />
      </Routers>
    </>
  );
}

export default App;

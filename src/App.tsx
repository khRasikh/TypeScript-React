import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import PassToAnother from "./Components/Propss";
import PropsApp from "./Components/Propss";

import {
  BrowserRouter as Routers,
  Routes,
  Route,
  Link,
} from "react-router-dom";

export function Product() {
  return (
    <>
      <div className="min-h-full lg:text-left text-gray-600 p-8 bg-gray-700">
        <h3>Navigate to MasterFronentd lessons: </h3>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link to="/propsa">Props in React</Link>
          <Link to="/propsb">Propsb in React</Link>
        </button>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Routers>
        <Header />
        {/* <div className="min-h-full lg:text-left text-gray-600 p-8 bg-gray-700">
          Welcome to TypeScript-React front style using Tailwind
          <Link to="/">First</Link>
        </div> */}
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/propsa" element={<PassToAnother />} />
          <Route path="/propsb" element={<PropsApp />} />
        </Routes>
        <Footer />
      </Routers>
    </>
  );
}

export default App;

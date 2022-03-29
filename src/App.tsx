import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import PassToAnother from "./Components/Propss";
import PropsApp from "./Components/Propss";
import UseState from "./Components/UseState";

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
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded">
          <Link to="/propsa">Props in React</Link>
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
          <Link to="/propsb">Props Example</Link>
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
          <Link to="/usestate">Props Example</Link>
        </button>
      </div>
      <div className="min-h-full lg:text-left text-gray-600 p-8 bg-gray-700 grid grid-cols-3 gap-4 content-start ...">
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
            <Link to="/usestate">Props Example</Link>
          </button>
        </div>
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
            <Link to="/usestate">Props Example</Link>
          </button>
        </div>
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
            <Link to="/usestate">Props Example</Link>
          </button>
        </div>
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
            <Link to="/usestate">Props Example</Link>
          </button>
        </div>
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
            <Link to="/usestate">Props Example</Link>
          </button>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Routers>
        <Header />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/propsa" element={<PassToAnother />} />
          <Route path="/propsb" element={<PropsApp />} />
          <Route path="/usestate" element={<UseState />} />
        </Routes>
        <Footer />
      </Routers>
    </>
  );
}

export default App;

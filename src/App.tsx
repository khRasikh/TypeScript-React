import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import PassToAnother from "./Components/Propss";
import PropsApp from "./Components/Propss";
import UseState from "./Components/UseState";
import UseEffect from "./Components/UseEffect";
import UseRefTypeB from "./Components/UseRef";
import UseContextType from "./Components/useContext";
import UseReducerType from "./Components/UseReducer";

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
      </div>
      <div className="min-h-full lg:text-left text-gray-600 p-8 bg-gray-700 grid grid-cols-4 gap-4 content-start ...">
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
            <Link to="/usestate">Props Example</Link>
          </button>
        </div>
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
            <Link to="/usestate">UseState Example</Link>
          </button>
        </div>
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
            <Link to="/useeffect">UseEffect Example</Link>
          </button>
        </div>
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
            <Link to="/useref">UseRef Example</Link>
          </button>
        </div>
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
            <Link to="/usecontext">UseContext Example</Link>
          </button>
        </div>

        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
            <Link to="/usereducer">UseReducer Example</Link>
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
          <Route path="/useeffect" element={<UseEffect />} />
          <Route path="/useref" element={<UseRefTypeB />} />
          <Route path="/usecontext" element={<UseContextType />} />
          <Route path="/usereducer" element={<UseReducerType />} />
        </Routes>
        <Footer />
      </Routers>
    </>
  );
}

export default App;

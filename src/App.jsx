import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import { Route , Routes } from "react-router-dom";
const App = () => {
  return (
    <div>
      <div className="bg-slate-900">
        <Navbar></Navbar>
      </div>

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/cart" element={<Cart></Cart>} />
      </Routes>
    </div>
  )
};

export default App;

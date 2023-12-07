import Navbar from "../components/Navbar.tsx";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-600 font-font items-center">
      <Navbar />
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default Home;

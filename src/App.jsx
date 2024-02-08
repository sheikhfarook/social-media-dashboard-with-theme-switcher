import "./App.css";
import DarkMode from "./components/header/darkmode";
import DashBoardComponent from "./components/header/dashboard/dashboard";

function App() {
  return (
    <div className="md:w-[1110px] m-auto my-[5%] font-inter max-sm:w-[326px] ">
      <DarkMode />
      <DashBoardComponent />
    </div>
  );
}

export default App;

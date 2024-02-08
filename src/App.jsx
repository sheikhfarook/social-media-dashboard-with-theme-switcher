import "./App.css";
import DarkMode from "./components/header/darkmode";
import DashBoardComponent from "./components/header/dashboard/dashboard";
import TodaysView from "./components/todaysview";

function App() {
  return (
    <div className="md:w-[1110px] m-auto my-[5%] font-inter max-sm:w-[326px] ">
      <DarkMode />
      <DashBoardComponent />
      <TodaysView />
    </div>
  );
}

export default App;

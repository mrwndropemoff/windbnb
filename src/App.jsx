import "./App.css";
import Content from "./components/Content";
import SearchBar from "./components/SearchBar";
import LandingPage from "./page/LandingPage";

export default function App() {
  return (
    <div className="flex flex-row h-screen items-center justify-center">
      <LandingPage />
    </div>
  );
}

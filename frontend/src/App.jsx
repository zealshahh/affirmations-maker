import { useState } from "react";
import Navbar from "./components/Navbar";
import Affirmations from "./pages/Affirmations";
import About from "./pages/About";
import Resources from "./pages/Resources";

export default function App() {
  const [currentPage, setCurrentPage] = useState("affirmations");

  const renderPage = () => {
    switch (currentPage) {
      case "affirmations":
        return <Affirmations />;
      case "about":
        return <About />;
      case "resources":
        return <Resources />;
      default:
        return <Affirmations />;
    }
  };

  return (
    <div>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
}
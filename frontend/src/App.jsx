import { useRef } from "react";
import AffirmationDisplay from "./components/AffirmationDisplay";
import AddAffirmation from "./components/AddAffirmation";
import Navbar from "./components/Navbar"

export default function App() {
  const displayRef = useRef();

  const handleAffirmationAdded = () => {
    if (displayRef.current) {
      displayRef.current.getNewAffirmation();
    }
  };

  return (
    
    <div className="mt-20 mx-auto bg-transparent ">
      <h1 className=" bg-transparent flex justify-center text-5xl font-bold mb-6 text-center text-cyan-800">Digital Affirmations</h1>
      <Navbar> </Navbar>
      <AffirmationDisplay ref={displayRef} />

      <AddAffirmation onAdded={handleAffirmationAdded} />

    </div>
  );
}

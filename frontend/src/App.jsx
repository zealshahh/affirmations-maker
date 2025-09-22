import { useRef } from "react";
import AffirmationDisplay from "./components/AffirmationDisplay";
import AddAffirmation from "./components/AddAffirmation";

export default function App() {
  const displayRef = useRef();

  const handleAffirmationAdded = () => {
    if (displayRef.current) {
      displayRef.current.getNewAffirmation();
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Digital Affirmations</h1>

      <AffirmationDisplay ref={displayRef} />

      <AddAffirmation onAdded={handleAffirmationAdded} />
    </div>
  );
}

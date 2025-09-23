import React, { useRef } from "react";
import AffirmationDisplay from "../components/AffirmationDisplay";
import AddAffirmation from "../components/AddAffirmation";

export default function Affirmations() {
  const displayRef = useRef();

  const handleAffirmationAdded = () => {
    if (displayRef.current) {
      displayRef.current.getNewAffirmation();
    }
  };

  return (
    <div className="mt-20 mx-auto bg-transparent">
      <h1 className="flex justify-center text-5xl font-bold mb-6 text-cyan-800 text-center">
        Digital Affirmations
      </h1>

      <AffirmationDisplay ref={displayRef} />

      <AddAffirmation onAdded={handleAffirmationAdded} />
    </div>
  );
}
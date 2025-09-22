import { useState, useEffect, forwardRef, useImperativeHandle } from "react"; 

const API_URL = import.meta.env.VITE_API_URL; 

const AffirmationDisplay = forwardRef((props, ref) => {
  console.log("API_URL:", import.meta.env.VITE_API_URL);
  const [affirmation, setAffirmation] = useState("");

  const getNewAffirmation = async () => {
    try {
      const res = await fetch(`${API_URL}/affirmations`);
      const data = await res.json();
      setAffirmation(data.affirmation);
    } catch (err) {
      console.error("Error fetching affirmation!", err);
      setAffirmation("Unable to fetch affirmation");
    }
  };

  useImperativeHandle(ref, () => ({
    getNewAffirmation,
  }));

  useEffect(() => {
    getNewAffirmation();
  }, []);

  return (
    <div className="flex justify-center mt-10">
  {/* Affirmation box */}
  <div className="p-6 w-96 h-56 border rounded shadow-sm bg-gray-50 flex flex-col">
    {/* Header */}
    <h2 className="text-xl font-semibold text-black text-center mb-2">
      Today's Affirmation:
    </h2>

    {/* Affirmation text */}
    <p className="text-gray-700 text-center flex-grow overflow-auto">
      {affirmation}
    </p>

    {/* Button at the bottom */}
    <button
      className="bg-pink-800 hover:bg-blue-600 text-pink-200 px-4 py-2 rounded mt-4"
      onClick={getNewAffirmation}
    >
      Get Another
    </button>
  </div>
</div>
  );
});

export default AffirmationDisplay;

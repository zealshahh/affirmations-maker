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
    <div className="p-6 mb-6 border rounded shadow-sm bg-gray-50">
      <h2 className="text-xl font-semibold mb-2 text-black">Today's Affirmation:</h2>
      <p className="mb-4 text-gray-700">{affirmation}</p>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        onClick={getNewAffirmation}
      >
        Get Another
      </button>
    </div>
  );
});

export default AffirmationDisplay;

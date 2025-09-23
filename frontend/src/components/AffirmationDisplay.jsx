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
      console.error("Error fetching affirmation", err);
      setAffirmation("Unable to fetch affirmations");
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
      <div className="p-6 w-96 h-56 -mt-1 border rounded shadow-sm bg-blue-50 flex flex-col">
        <h2 className="text-xl font-semibold text-black text-center mb-2">
          Today's Affirmation:
        </h2>

        <p className="flex items-center rounded text-center justify-center text-cyan-900 text-3xl flex-grow overflow-auto">
        {affirmation}
        </p>

        <button
          className="bg-sky-800 active:bg-sky-800 hover:bg-blue-900 text-pink-100 px-4 py-2 rounded mt-4"
          onClick={getNewAffirmation}
        >
          affirm again! 💗
        </button>
      </div>
    </div>
  );
});

export default AffirmationDisplay;
import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

export default function AddAffirmation({ onAdded }) {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    try {
      const res = await fetch(`${API_URL}/affirmation`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ affirmation: input }),
      });
      const data = await res.json();
      setMessage(data.message || data.error);
      setInput("");
      if (onAdded) onAdded();
    } catch (err) {
      console.error("Error adding affirmation:", err);
      setMessage("Error adding affirmation.");
    }
  };

  return (
    <div className="bg-blue-50 p-6 border border-blue-900 rounded shadow-sm mt-4">
      <h2 className="text-xl font-semibold mb-2 text-black">
        Add your own affirmation!
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-black">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your affirmation here..."
          className="border px-3 py-2 rounded border-blue-900 text-cyan-900"
        />
        <button
          type="submit"
          className="bg-sky-800 hover:bg-blue-900 active:bg-sky-800 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
      {message && <p className="mt-2 text-gray-800">{message}</p>}
    </div>
  );
}

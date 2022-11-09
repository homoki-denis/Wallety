import silhouette from "./assets/silhouette.png";
import { useState } from "react";

export default function App() {
  // States
  const [value, setValue] = useState(0);

  // Functions
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You just submit ${value} avatars`);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="px-2.5">
      <div className="space-y-8 bg-white flex justify-center items-center flex-col shadow-2xl main-border py-20 px-32 ">
        <div className="flex justify-center items-center flex-col">
          <h2 className="text-2xl font-extrabold my-2 text-center">
            YOUR WALLETY IS CONNECTED!
          </h2>
          <p className="text-base font-medium mb-5">
            How many avatars do you want?
          </p>
          <img src={silhouette} alt="bear" className="h-16" />
          <form className="flex justify-center items-center flex-col">
            <input
              type="number"
              className="rounded-full w-6/12 text-center my-3 text-xl font-bold input-border p-2.5"
              value={value}
              onChange={handleChange}
            />
            <button
              onClick={handleSubmit}
              className="btn rounded-full font-bold py-4 px-16 my-5 text-2xl"
            >
              MINT NOW
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

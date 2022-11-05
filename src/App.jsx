import silhouette from "./assets/silhouette.png";

export default function App() {
  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen ">
        <div className=" w-1/3 h-1/2  space-y-8 bg-white flex justify-center items-center flex-col shadow-lg main-border">
          <div className="flex justify-center items-center flex-col">
            <h2 className="text-2xl font-extrabold my-2">
              YOUR WALLETY IS CONNECTED!
            </h2>
            <p className="text-lg font-medium mb-5">
              How many avatars do you want?
            </p>
            <img src={silhouette} alt="bear" className="h-16" />
            <form className="flex justify-center items-center flex-col">
              <input
                type="number"
                className="rounded-full w-6/12 text-center my-3 text-xl font-bold input-border p-2.5"
              />
              <button className="btn rounded-full font-bold py-4 px-16 my-5 text-2xl">
                MINT NOW
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

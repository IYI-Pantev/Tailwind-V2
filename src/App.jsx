import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-yellow-300 bg-black">Hello Tailwind</h1>
      <p className="text-lg font-bold mt-4 text-cyan-400">
        Tailwind makes styling easy
      </p>
      <div className="bg-gray-200 p-4 m-4 rounded-2xl">
        Background color demo
      </div>
      <div className="bg-green-300 p-4 m-4 border-green-900 border-2 rounded-4xl">
        Border demo
      </div>
      <div className="grid grid-cols-[1.5fr_0.75fr_0.75fr] gap-3.5 mt-4">
        <div className=" bg-blue-200 p-4 text-red-700 hover:bg-blue-400">1</div>
        <div className="bg-blue-400 p-4 text-orange-400">2</div>
        <div className="bg-blue-800 p-4 text-emerald-500">3</div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4  bg-gray-200 mt-4 p-4">
        <p className="text-xl font-bold">Text 1</p>
        <p className="text-xl font-bold">Text 2</p>
        <p className="text-xl font-bold">Text 3</p>
      </div>
      <table
        style={{ backgroundColor: "#11121c", color: "white" }}
        className="table-auto border-collapse border-2 mt-4 border-gray-300"
      >
        <thead>
          <tr className="border border-gray-500">
            <th className="border border-gray-500 px-4 py-2">Song</th>
            <th className="border border-gray-500 px-4 py-2">Artist</th>
            <th className="border border-gray-500 px-4 py-2">Year</th>
          </tr>
        </thead>
        <tbody style={{ backgroundColor: "#212834", color: "#9a9ca4" }}>
          <tr className="border border-gray-700">
            <td className="border border-gray-700 px-4 py-2">
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </td>
            <td className="border border-gray-700 px-4 py-2">
              Malcolm Lockyer
            </td>
            <td className="border border-gray-700 px-4 py-2">1961</td>
          </tr>
          <tr className="border border-gray-700">
            <td className="border border-gray-700 px-4 py-2">Witchy Woman</td>
            <td className="border border-gray-700 px-4 py-2">The Eagles</td>
            <td className="border border-gray-700 px-4 py-2">1972</td>
          </tr>
          <tr className="border border-gray-700">
            <td className="border border-gray-700 px-4 py-2">Shining Star</td>
            <td className="border border-gray-700 px-4 py-2">
              Earth, Wind, and Fire
            </td>
            <td className="border border-gray-700 px-4 py-2">1975</td>
          </tr>
        </tbody>
      </table>
      <button className="bg-sky-500 rounded-lg text-white font-bold px-6 py-4 m-4 hover:bg-sky-300 transition duration-300">
        Click me
      </button>
      <button className="px-6 py-2 m-4 bg-red-500 text-white rounded-lg hover:bg-red-700 transition duration-500 ease-in-out transform hover:scale-110">
        Hover me
      </button>
      <div className="max-w-sm rounded-lg shadow-lg bg-indigo-100 p-6">
        <h2 className="text-2xl font-bold mb-4">Tailwind Card</h2>
        <p className="text-gray-700">This is a card built with Tailwind CSS</p>
        <button className="bg-sky-500 rounded-lg text-white font-bold px-4 py-2 m-4 hover:bg-sky-300 transition duration-300">
          Read More
        </button>
      </div>
      <div className="bg-[#ff5733] p-4 m-4 border-green-900 border-2 rounded-4xl">
        Border demo
      </div>
      <div className="bg-mint-500 p-4 m-4 border-green-900 border-2 rounded-4xl">
        Border demo
      </div>
    </>
  );
}

export default App;

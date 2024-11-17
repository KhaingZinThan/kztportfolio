import "./App.css";

function App() {
  return (
    <div className="">
      <div className="bg-red-100 h-16 flex items-center justify-between p-10">
        <span>Logo</span>
        <div className="flex space-x-9">
          <span>DOCS</span>
          <span>ABOUT</span>
          <span>IMG</span>
        </div>
      </div>
      <div className="bg-blue-300  p-8 text-center">
        <h2 className="my-6 mx-6 bg-pink-700 text-2xl font-bold">My Project</h2>
        <div className="bg-pink-600 p-4 mt-4 grid grid-cols-3 gap-6 w-3/4 mx-auto">
          <div className="bg-green-300">
            <div className="bg-white h-28">image</div>
            <div className="text-left p-4">
              <h2 className="text-xl">Shoes!</h2>
              <p>If a dog chews shoes </p>
            </div>
            <div className="flex justify-end p-2">
              <button className="bg-blue-800 rounded-md p-3">Buy Now</button>
            </div>
          </div>
          <div className="bg-gray-500">card2</div>
          <div className="bg-purple-300">card3</div>
        </div>
      </div>
      <div className="bg-yellow-200 h-16 text-center flex items-center justify-center"><p>@Copyright</p></div>
    </div>
  );
}

export default App;

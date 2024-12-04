import './index.css';

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-pink-50 via-pink-100 to-pink-300">
      <button
        className="w-48 h-24 bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full shadow-lg 
                   transition duration-300 transform hover:scale-105"
      >
        CLICK ME
      </button>
    </div>
  );
}

export default App;

import './index.css';
import confetti from 'canvas-confetti';
import Song from './assets/Paige.mp3';
import { useState, useEffect } from 'react';
import cat from './assets/cat.gif';
import cat2 from './assets/cat2.gif';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  const song = new Audio(Song);
  song.volume = 0.5;

  // Add an event listener to reset isPlaying when the song ends
  useEffect(() => {
    song.addEventListener('ended', () => {
      setIsPlaying(false);
    });

    // Cleanup to prevent memory leaks
    return () => {
      song.removeEventListener('ended', () => {
        setIsPlaying(false);
      });
    };
  }, [song]);

  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x: 0.5, y: 0.5 }, // Center of the screen
    });

    if (!isPlaying) {
      setIsPlaying(true);
      song.play().catch((error) => {
        console.error('Error playing song:', error);
        setIsPlaying(false);
      });
    }
  };

  const randomPosition = () => ({
    top: `${Math.random() * 90}%`,
    left: `${Math.random() * 90}%`,
  });

  return (
    <div className="relative flex justify-center items-center h-screen bg-gradient-to-br from-pink-50 via-pink-100 to-pink-300 overflow-hidden">
      <button
        className="w-48 h-24 bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full shadow-lg 
                   transition duration-300 transform hover:scale-105"
        onClick={handleConfetti}
      >
        CLICK ME
      </button>

      {isPlaying && (
        <>
          {/* Cat2 GIF placed below the button */}
          <img
            className="absolute bottom-16"
            src={cat2}
            alt="Special Cat"
          />

          {/* 10 randomly placed Cat GIFs */}
          {Array.from({ length: 25 }).map((_, index) => (
            <img
              key={index}
              src={cat}
              alt={`Cat ${index + 1}`}
              className="absolute"
              style={randomPosition()}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default App;

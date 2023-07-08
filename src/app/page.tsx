"use client";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";

const vocab = [
  { letter: "A", word: "Apple", picture: "/vocab_img/apple.jpeg" },
  { letter: "B", word: "Ball", picture: "/vocab_img/ball.webp" },
  {
    letter: "C",
    word: "Cat",
    picture: "/vocab_img/cat.webp",
    sound: "/sounds/cat.mp3",
  },
  {
    letter: "D",
    word: "Dog",
    picture: "/vocab_img/dog.webp",
    sound: "/sounds/dog.mp3",
  },
  {
    letter: "E",
    word: "Elephant",
    picture: "/vocab_img/elephant.webp",
    sound: "/sounds/elephant.wav",
  },
  { letter: "F", word: "Fox", picture: "/vocab_img/fox.jpeg" },
  { letter: "G", word: "Giraffe", picture: "/vocab_img/giraffe.jpeg" },
  { letter: "H", word: "Hat", picture: "/vocab_img/hat.jpeg" },
  { letter: "I", word: "Icecream", picture: "/vocab_img/icecream.jpeg" },
  { letter: "J", word: "Jug", picture: "/vocab_img/jug.jpeg" },
  { letter: "K", word: "Kite", picture: "/vocab_img/kite.jpeg" },
  { letter: "L", word: "Lion", picture: "/vocab_img/lion.jpeg" },
  { letter: "M", word: "Mango", picture: "/vocab_img/mango.jpeg" },
  { letter: "N", word: "Nest", picture: "/vocab_img/nest.jpeg" },
  { letter: "O", word: "Orange", picture: "/vocab_img/orange.jpeg" },
  { letter: "P", word: "Parrot", picture: "/vocab_img/parrot.jpeg" },
  { letter: "Q", word: "Quiet", picture: "/vocab_img/quiet.jpeg" },
  { letter: "R", word: "Rabbit", picture: "/vocab_img/rabbit.jpeg" },
  { letter: "S", word: "Snake", picture: "/vocab_img/snake.jpeg" },
  { letter: "T", word: "Train", picture: "/vocab_img/train.jpeg" },
  { letter: "U", word: "Umbrella", picture: "/vocab_img/umbrella.jpeg" },
  { letter: "V", word: "Van", picture: "/vocab_img/van.jpeg" },
  { letter: "W", word: "Watch", picture: "/vocab_img/watch.jpeg" },
  { letter: "X", word: "Xylophone", picture: "/vocab_img/xylophone.jpeg" },
  { letter: "Y", word: "Yak", picture: "/vocab_img/yak.jpeg" },
  { letter: "Z", word: "Zip", picture: "/vocab_img/zip.jpeg" },
];

export default function Home() {
  const inputRef = useRef<HTMLAudioElement>(null);
  let [count, setCount] = useState(0);
  let [internalCount, setInternalCount] = useState("picture");

  const prev = useCallback(() => {
    if (internalCount === "letter") {
      setInternalCount("picture");
    } else if (internalCount === "picture") {
      setCount(count - 1);
      setInternalCount("picture");
    }
  }, [count, internalCount]);

  const next = useCallback(() => {
    if (internalCount === "picture") {
      setInternalCount("letter");
    } else if (internalCount === "letter") {
      setCount(count + 1);
      setInternalCount("picture");
    }
  }, [count, internalCount]);

  useEffect(() => {
    const onKeyDown = function (event: KeyboardEvent) {
      // Handle the keypress event here
      console.log("Keypress event:", event.key);
      if (event.key === "ArrowLeft") {
        // Handle the left arrow key
        prev();
        console.log("Left arrow key pressed");
      } else if (event.key === "ArrowRight") {
        // Handle the right arrow key
        next();
        console.log("Right arrow key pressed");
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [next, prev]);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.play();
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex">
        <button disabled={count === 0} onClick={prev} className="p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        <div className="h-[500px] w-[500px] text-center">
          {internalCount === "picture" ? (
            <div>
              {vocab[count].sound && (
                <audio controls autoPlay ref={inputRef} className="invisible">
                  <source src={vocab[count].sound} />
                  Your browser does not support the audio element.
                </audio>
              )}
              <Image
                src={vocab[count][internalCount]}
                onClick={handleClick}
                alt="image"
                className="rounded-md"
                height={500}
                width={500}
              />
            </div>
          ) : (
            <div className="">
              <div className="text-[200px] font-bold">
                {vocab[count].letter}
              </div>
              <div className="text-[80px]">{vocab[count].word}</div>
            </div>
          )}
        </div>
        <button
          className="p-4"
          disabled={count === vocab.length - 1 && internalCount == "letter"}
          onClick={next}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
    </main>
  );
}

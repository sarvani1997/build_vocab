"use client";
import Image from "next/image";
import { vocab } from "../constants";
import { Alphabet } from "../constants";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";

export default function AlphaPage() {
  const router = useRouter();
  const params = useParams();
  const alpha = params.alpha;
  const inputRef = useRef<HTMLAudioElement>(null);

  let [internalCount, setInternalCount] = useState("picture");
  const alphaObj = vocab.find((al) => {
    return al.letter === alpha.toUpperCase();
  }) as Alphabet;

  const next = useCallback(() => {
    if (alphaObj.id === vocab.length && internalCount == "letter") {
      return;
    } else if (internalCount === "picture") {
      setInternalCount("letter");
    } else if (internalCount === "letter") {
      const nextAlpha = vocab[alphaObj.id].letter;
      router.push(nextAlpha);
    }
  }, [internalCount, alphaObj.id, router]);

  const prev = useCallback(() => {
    if (alphaObj.id === 1) {
      return;
    }
    const prevAlpha = vocab[alphaObj.id - 2].letter;
    router.push(prevAlpha);
  }, [alphaObj.id, router]);

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
        <button disabled={alphaObj.id === 1} onClick={prev} className="p-4">
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
              {alphaObj.sound && (
                <audio controls autoPlay ref={inputRef} className="invisible">
                  <source src={alphaObj.sound} />
                  Your browser does not support the audio element.
                </audio>
              )}
              <Image
                src={alphaObj.picture}
                onClick={handleClick}
                alt="image"
                className="rounded-md"
                height={500}
                width={500}
              />
            </div>
          ) : (
            <div className="">
              <div className="text-[200px] font-bold">{alphaObj.letter}</div>
              <div className="text-[80px]">{alphaObj.word}</div>
            </div>
          )}
        </div>
        <button
          className="p-4"
          disabled={alphaObj.id === vocab.length && internalCount == "letter"}
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

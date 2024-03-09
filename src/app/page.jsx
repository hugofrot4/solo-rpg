"use client";
import { Header } from "@/components/Header";
import { useState } from "react";

export default function Home() {
  // estados texto
  const [textInput, setTextInput] = useState();
  const [textInputEnter, setTextInputEnter] = useState();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setTextInputEnter(textInput);
    }
  };

  return (
    <main className="flex min-h-screen flex-col ">
      <Header />
      <div className="flex h-full">
        <div className="flex flex-1 border-r border-white w-full h-[calc(100vh-95px)]"></div>
        <div className="flex flex-[2] border-r border-white w-full h-[calc(100vh-95px)] flex-col">
          <div className="flex flex-[2] border-b border-white bg-[#241929]">
            <p>{textInputEnter}</p>
          </div>
          <div className="flex flex-1">
            <textarea
              className="flex-1 outline-[#AABD59] bg-[#6B5067] p-4"
              name=""
              id=""
              cols="30"
              rows="10"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              onKeyDown={handleKeyDown}
            ></textarea>
          </div>
        </div>
        <div className="flex flex-1 border-r border-white w-full h-[calc(100vh-95px)]"></div>
      </div>
    </main>
  );
}

"use client";
import { Header } from "@/components/Header";
import { useState } from "react";
import { FaTrashCan } from "react-icons/fa6";

export default function Home() {
  // estados texto
  const [textInput, setTextInput] = useState("");
  const [historyText, setHistoryText] = useState([]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      const formatMessage = {
        id: Date.now(),
        who: "Você",
        text: textInput,
      };
      setHistoryText((prevState) => [...prevState, formatMessage]);
      setTextInput("");
    }
  };

  const handleRemoveText = (idToRemove) => {
    setHistoryText((prevState) =>
      prevState.filter((item) => item.id !== idToRemove)
    );
  };

  return (
    <main className="flex min-h-screen flex-col ">
      <Header />
      <div className="flex h-full">
        <div className="flex flex-1 border-r border-white w-full h-[calc(100vh-95px)]"></div>
        <div className="flex flex-[2] border-r border-white w-full h-[calc(100vh-95px)] flex-col">
          <div className="flex flex-[2] border-b border-white bg-[#241929] flex-col gap-2 p-4">
            {historyText &&
              historyText.length > 0 &&
              historyText.map((item) => (
                <div key={item.id} className="flex text-xl justify-between">
                  <div className="flex items-center">
                    <p className="text-[#AABD59] font-semibold">{item.who}:</p>
                    <p className="ml-1">{item.text}</p>
                  </div>
                  <button onClick={() => handleRemoveText(item.id)}>
                    <FaTrashCan
                      size={20}
                      className="text-[#d48f40] opacity-10 hover:opacity-100 duration-200"
                    />
                  </button>
                </div>
              ))}
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

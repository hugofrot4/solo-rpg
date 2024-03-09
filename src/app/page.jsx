"use client";
import { Header } from "@/components/Header";
import { useEffect, useState } from "react";
import { FaTrashCan } from "react-icons/fa6";

export default function Home() {
  useEffect(() => {
    const prevHistory = localStorage.getItem("history");
    if (prevHistory) {
      const historyData = JSON.parse(prevHistory);
      setHistoryText(historyData);
    }
  }, []);

  // estados texto
  const [textInput, setTextInput] = useState("");
  const [historyText, setHistoryText] = useState([]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey && textInput.trim() !== "") {
      event.preventDefault();
      const formatMessage = {
        id: Date.now(),
        who: "Estória",
        text: textInput,
      };
      setHistoryText((prevState) => {
        const updatedHistory = [...prevState, formatMessage];
        localStorage.setItem("history", JSON.stringify(updatedHistory));
        return updatedHistory;
      });
      setTextInput("");
    }
  };

  const handleRemoveText = (idToRemove) => {
    setHistoryText((prevState) => {
      const updatedHistory = prevState.filter((item) => item.id !== idToRemove);
      localStorage.setItem("history", JSON.stringify(updatedHistory));
      return updatedHistory;
    });
  };

  const handleDeleteHistory = () => {
    setHistoryText([]);
    localStorage.removeItem("history");
  };

  return (
    <main className="flex min-h-screen flex-col ">
      <Header />
      <div className="flex h-full">
        <div className="flex flex-1 border-r border-white w-full h-[calc(100vh-83px)] p-4">
          <div className="flex flex-col gap-2">
            <p className="text-lg font-semibold">Dados salvos:</p>
            <div className="flex gap-1">
              <button
                onClick={handleDeleteHistory}
                className="px-4 py-2 bg-[#D69040] uppercase text-base font-semibold tracking-wide rounded hover:bg-[#eca14b] duration-200"
              >
                Excluir estória
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-[2] border-r border-white w-full h-[calc(100vh-83px)] flex-col">
          <div className="flex h-[60vh] overflow-auto border-b border-white bg-[#2F2136] flex-col gap-2 p-4">
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
          <div className="flex flex-1 p-4 flex-col gap-2">
            <p className="text-lg font-semibold">Escreva a estória:</p>
            <textarea
              className="flex-1 outline-[#AABD59] bg-[#6B5067] p-4 resize-none"
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
        <div className="flex flex-1 h-[calc(100vh-95px)]"></div>
      </div>
    </main>
  );
}

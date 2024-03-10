"use client";
import { Header } from "@/components/Header";
import { useEffect, useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
import { FaQuestionCircle } from "react-icons/fa";

export default function Home() {
  useEffect(() => {
    const prevStory = localStorage.getItem("story");
    if (prevStory) {
      const storyData = JSON.parse(prevStory);
      setStoryText(storyData);
    }
  }, []);

  // estados texto
  const [textInput, setTextInput] = useState("");
  const [storyText, setStoryText] = useState([]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey && textInput.trim() !== "") {
      event.preventDefault();
      const formatMessage = {
        id: Date.now(),
        who: "Estória",
        text: textInput,
      };
      setStoryText((prevState) => {
        const updatedStory = [...prevState, formatMessage];
        localStorage.setItem("story", JSON.stringify(updatedStory));
        return updatedStory;
      });
      setTextInput("");
    }
  };

  const handleRemoveText = (idToRemove) => {
    setStoryText((prevState) => {
      const updatedStory = prevState.filter((item) => item.id !== idToRemove);
      localStorage.setItem("story", JSON.stringify(updatedStory));
      return updatedStory;
    });
  };

  const handleDeleteStory = () => {
    setStoryText([]);
    localStorage.removeItem("story");
  };

  const hoverInQuestion = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.classList.remove("hidden");
    }
  };

  const hoverOutQuestion = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.classList.add("hidden");
    }
  };

  const handleAnswer = (item) => {
    const randomNumber = Math.random();
    switch (item) {
      case "QI":
        if (randomNumber <= 1 && randomNumber >= 0.9) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Não, e...",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        } else if (randomNumber < 0.9 && randomNumber >= 0.2) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Não",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        } else if (randomNumber < 0.2 && randomNumber >= 0.1) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Não, mas...",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        } else if (randomNumber < 0.1 && randomNumber >= 0.08) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Sim, mas...",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        } else if (randomNumber < 0.08 && randomNumber >= 0.03) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Sim",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        } else if (randomNumber < 0.03) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Sim, e...",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        }
        break;
      case "MI":
        if (randomNumber <= 1 && randomNumber >= 0.9) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Não, e...",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        } else if (randomNumber < 0.9 && randomNumber >= 0.3) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Não",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        } else if (randomNumber < 0.3 && randomNumber >= 0.2) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Não, mas...",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        } else if (randomNumber < 0.2 && randomNumber >= 0.15) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Sim, mas...",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        } else if (randomNumber < 0.15 && randomNumber >= 0.05) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Sim",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        } else if (randomNumber < 0.05) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Sim, e...",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        }
        break;
      case "I":
        if (randomNumber <= 1 && randomNumber >= 0.9) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Não, e...",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        } else if (randomNumber < 0.9 && randomNumber >= 0.4) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Não",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        } else if (randomNumber < 0.4 && randomNumber >= 0.3) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Não, mas...",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        } else if (randomNumber < 0.3 && randomNumber >= 0.25) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Sim, mas...",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        } else if (randomNumber < 0.25 && randomNumber >= 0.08) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Sim",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        } else if (randomNumber < 0.08) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Sim, e...",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        }
        break;
      case "QIM":
        if (randomNumber <= 1 && randomNumber >= 0.9) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Não, e...",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        } else if (randomNumber < 0.9 && randomNumber >= 0.4) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Não",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        } else if (randomNumber < 0.5 && randomNumber >= 0.4) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Não, mas...",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        } else if (randomNumber < 0.4 && randomNumber >= 0.3) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Sim, mas...",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        } else if (randomNumber < 0.3 && randomNumber >= 0.1) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Sim",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        } else if (randomNumber < 0.1) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Sim, e...",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        }
        break;
      case "50/50":
        if (randomNumber < 0.2) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Não, e...",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        } else if (randomNumber < 0.4 && randomNumber >= 0.2) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Não",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        } else if (randomNumber < 0.5 && randomNumber >= 0.4) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Não, mas...",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        } else if (randomNumber < 0.6 && randomNumber >= 0.5) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Sim, mas...",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        } else if (randomNumber < 0.8 && randomNumber >= 0.6) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Sim",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        } else if (randomNumber <= 1 && randomNumber >= 0.8) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Sim, e...",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        }
        break;
      case "QP":
        if (randomNumber <= 1 && randomNumber >= 0.9) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Não, e...",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        } else if (randomNumber < 0.9 && randomNumber >= 0.7) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Não",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        } else if (randomNumber < 0.7 && randomNumber >= 0.6) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Não, mas...",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        } else if (randomNumber < 0.6 && randomNumber >= 0.5) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Sim, mas...",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        } else if (randomNumber < 0.5 && randomNumber >= 0.1) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Sim",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        } else if (randomNumber < 0.1) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Sim, e...",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        }
        break;
      case "P":
        if (randomNumber <= 1 && randomNumber >= 0.95) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Não, e...",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        } else if (randomNumber < 0.95 && randomNumber >= 0.75) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Não",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        } else if (randomNumber < 0.75 && randomNumber >= 0.7) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Não, mas...",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        } else if (randomNumber < 0.7 && randomNumber >= 0.6) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Sim, mas...",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        } else if (randomNumber < 0.6 && randomNumber >= 0.1) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Sim",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        } else if (randomNumber < 0.1) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Sim, e...",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        }
        break;
      case "MP":
        if (randomNumber <= 1 && randomNumber >= 0.95) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Não, e...",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        } else if (randomNumber < 0.95 && randomNumber >= 0.85) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Não",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        } else if (randomNumber < 0.85 && randomNumber >= 0.8) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Não, mas...",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        } else if (randomNumber < 0.8 && randomNumber >= 0.7) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Sim, mas...",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        } else if (randomNumber < 0.7 && randomNumber >= 0.1) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Sim",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        } else if (randomNumber < 0.1) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Sim, e...",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        }
        break;
      case "CC":
        if (randomNumber <= 1 && randomNumber >= 0.97) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Não, e...",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        } else if (randomNumber < 0.97 && randomNumber >= 0.92) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Não",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        } else if (randomNumber < 0.92 && randomNumber >= 0.9) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Não, mas...",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        } else if (randomNumber < 0.9 && randomNumber >= 0.8) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Sim, mas...",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        } else if (randomNumber < 0.8 && randomNumber >= 0.1) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Sim",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        } else if (randomNumber < 0.1) {
          const formatMessage = {
            id: Date.now(),
            who: "Resposta do Mestre",
            text: "Sim, e...",
          };
          setStoryText((prevState) => {
            const updatedStory = [...prevState, formatMessage];
            localStorage.setItem("story", JSON.stringify(updatedStory));
            return updatedStory;
          });
        }
        break;
    }
  };

  // estados rolagem de dados
  const [diceAmount, setDiceAmount] = useState(1);

  const handleRollDices = (type) => {
    const resultados = [];
    let sum = 0;

    for (let i = 0; i < diceAmount; i++) {
      const resultado = Math.floor(Math.random() * type) + 1;
      resultados.push(resultado);
      sum += resultado;
    }

    const formatMessage = {
      id: Date.now(),
      who: "Sistema",
      text: `Resultado da rolagem de ${diceAmount} d${type} é ${sum} = ${resultados.join(
        " + "
      )}`,
    };
    setStoryText((prevState) => {
      const updatedStory = [...prevState, formatMessage];
      localStorage.setItem("story", JSON.stringify(updatedStory));
      return updatedStory;
    });
  };

  return (
    <main className="flex min-h-screen flex-col ">
      <Header />
      <div className="flex h-full">
        <div className="flex flex-1 border-r border-white w-full h-[calc(100vh-83px)] p-4 flex-col gap-3">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1 relative w-max">
              <p className="text-lg font-semibold">Fazer pergunta:</p>
              <FaQuestionCircle
                size={16}
                color="#DAE084"
                onMouseOver={() => hoverInQuestion("answer")}
                onMouseLeave={() => hoverOutQuestion("answer")}
              />
              <div
                id="answer"
                className="hidden absolute left-[100%] top-[100%] w-full bg-[#6B5067] p-3 rounded-tr rounded-br rounded-bl"
              >
                <p className="text-sm font-semibold">
                  Faça uma pergunta e clique no botão que mais representa a
                  probabilidade daquilo acontecer.
                </p>
              </div>
            </div>
            <div className="flex gap-1 flex-wrap">
              <button
                onClick={() => handleAnswer("QI")}
                className="px-4 py-2 bg-[#AABD59] uppercase text-xs font-semibold tracking-wide rounded hover:bg-[#DAE084] duration-200"
              >
                Quase impossível
              </button>
              <button
                onClick={() => handleAnswer("MI")}
                className="px-4 py-2 bg-[#AABD59] uppercase text-xs font-semibold tracking-wide rounded hover:bg-[#DAE084] duration-200"
              >
                Muito improvável
              </button>
              <button
                onClick={() => handleAnswer("I")}
                className="px-4 py-2 bg-[#AABD59] uppercase text-xs font-semibold tracking-wide rounded hover:bg-[#DAE084] duration-200"
              >
                improvável
              </button>
              <button
                onClick={() => handleAnswer("QIM")}
                className="px-4 py-2 bg-[#AABD59] uppercase text-xs font-semibold tracking-wide rounded hover:bg-[#DAE084] duration-200"
              >
                quase improvável
              </button>
              <button
                onClick={() => handleAnswer("50/50")}
                className="px-4 py-2 bg-[#AABD59] uppercase text-xs font-semibold tracking-wide rounded hover:bg-[#DAE084] duration-200"
              >
                50/50
              </button>
              <button
                onClick={() => handleAnswer("QP")}
                className="px-4 py-2 bg-[#AABD59] uppercase text-xs font-semibold tracking-wide rounded hover:bg-[#DAE084] duration-200"
              >
                Quase provável
              </button>
              <button
                onClick={() => handleAnswer("P")}
                className="px-4 py-2 bg-[#AABD59] uppercase text-xs font-semibold tracking-wide rounded hover:bg-[#DAE084] duration-200"
              >
                provável
              </button>
              <button
                onClick={() => handleAnswer("MP")}
                className="px-4 py-2 bg-[#AABD59] uppercase text-xs font-semibold tracking-wide rounded hover:bg-[#DAE084] duration-200"
              >
                muito provável
              </button>
              <button
                onClick={() => handleAnswer("CC")}
                className="px-4 py-2 bg-[#AABD59] uppercase text-xs font-semibold tracking-wide rounded hover:bg-[#DAE084] duration-200"
              >
                coisa certa
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1 relative w-max">
              <p className="text-lg font-semibold">Rolar dados:</p>
              <FaQuestionCircle
                size={16}
                color="#DAE084"
                onMouseOver={() => hoverInQuestion("roll")}
                onMouseLeave={() => hoverOutQuestion("roll")}
              />
              <div
                id="roll"
                className="hidden absolute left-[100%] top-[100%] w-full bg-[#6B5067] p-3 rounded-tr rounded-br rounded-bl"
              >
                <p className="text-sm font-semibold">
                  Digite quantos dados você vai rolar e clique no botão do dato
                  correspondente.
                </p>
              </div>
            </div>
            <div>
              <label htmlFor="dice-amount">Quantidade: </label>
              <input
                type="text"
                name="dice-amount"
                id="dice-amount"
                value={diceAmount}
                onChange={(e) => setDiceAmount(e.target.value)}
                className="bg-[#6B5067] p-1 outline-[#AABD59] w-12 rounded"
              />
            </div>
            <div className="flex gap-1 flex-wrap">
              <button
                onClick={() => handleRollDices(2)}
                className="px-4 py-2 bg-[#AABD59] uppercase text-xs font-semibold tracking-wide rounded hover:bg-[#DAE084] duration-200"
              >
                d2
              </button>
              <button
                onClick={() => handleRollDices(3)}
                className="px-4 py-2 bg-[#AABD59] uppercase text-xs font-semibold tracking-wide rounded hover:bg-[#DAE084] duration-200"
              >
                d3
              </button>
              <button
                onClick={() => handleRollDices(4)}
                className="px-4 py-2 bg-[#AABD59] uppercase text-xs font-semibold tracking-wide rounded hover:bg-[#DAE084] duration-200"
              >
                d4
              </button>
              <button
                onClick={() => handleRollDices(5)}
                className="px-4 py-2 bg-[#AABD59] uppercase text-xs font-semibold tracking-wide rounded hover:bg-[#DAE084] duration-200"
              >
                d5
              </button>
              <button
                onClick={() => handleRollDices(6)}
                className="px-4 py-2 bg-[#AABD59] uppercase text-xs font-semibold tracking-wide rounded hover:bg-[#DAE084] duration-200"
              >
                d6
              </button>
              <button
                onClick={() => handleRollDices(7)}
                className="px-4 py-2 bg-[#AABD59] uppercase text-xs font-semibold tracking-wide rounded hover:bg-[#DAE084] duration-200"
              >
                d7
              </button>
              <button
                onClick={() => handleRollDices(8)}
                className="px-4 py-2 bg-[#AABD59] uppercase text-xs font-semibold tracking-wide rounded hover:bg-[#DAE084] duration-200"
              >
                d8
              </button>
              <button
                onClick={() => handleRollDices(9)}
                className="px-4 py-2 bg-[#AABD59] uppercase text-xs font-semibold tracking-wide rounded hover:bg-[#DAE084] duration-200"
              >
                d9
              </button>
              <button
                onClick={() => handleRollDices(10)}
                className="px-4 py-2 bg-[#AABD59] uppercase text-xs font-semibold tracking-wide rounded hover:bg-[#DAE084] duration-200"
              >
                d10
              </button>
              <button
                onClick={() => handleRollDices(12)}
                className="px-4 py-2 bg-[#AABD59] uppercase text-xs font-semibold tracking-wide rounded hover:bg-[#DAE084] duration-200"
              >
                d12
              </button>
              <button
                onClick={() => handleRollDices(20)}
                className="px-4 py-2 bg-[#AABD59] uppercase text-xs font-semibold tracking-wide rounded hover:bg-[#DAE084] duration-200"
              >
                d20
              </button>
              <button
                onClick={() => handleRollDices(100)}
                className="px-4 py-2 bg-[#AABD59] uppercase text-xs font-semibold tracking-wide rounded hover:bg-[#DAE084] duration-200"
              >
                d100
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg font-semibold">Armazenamento de estórias:</p>
            <div className="flex gap-1">
              <button
                onClick={handleDeleteStory}
                className="px-4 py-2 bg-[#D69040] uppercase text-xs font-semibold tracking-wide rounded hover:bg-[#eca14b] duration-200"
              >
                Excluir estória
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-[2] border-r border-white w-full h-[calc(100vh-83px)] flex-col">
          <div className="flex h-[60vh] overflow-auto border-b border-white bg-[#2F2136] flex-col gap-2 p-4">
            {storyText &&
              storyText.length > 0 &&
              storyText.map((item) => (
                <div key={item.id} className="flex text-xl justify-between">
                  <div className="flex items-center">
                    <p
                      className={
                        item.who === "Resposta do Mestre"
                          ? "text-[#D69040] font-semibold"
                          : item.who === "Estória"
                          ? "text-[#AABD59] font-semibold"
                          : item.who === "Sistema" &&
                            "text-[#6B5067] font-semibold"
                      }
                    >
                      {item.who}:
                    </p>
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

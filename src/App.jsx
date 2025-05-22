import "./App.css";
import Lists from "./Lists";

const listElements = [
  {
    name: "Reaction",
    score: "80",
    emo: { img: "/src/assets/icon-reaction.svg" },
    colorp: "#e7a5a2",
    colors: "#fff6f7",
  },
  {
    name: "Memory",
    score: "92",
    emo: { img: "/src/assets/icon-memory.svg" },
    colorp: "#f1ce83",
    colors: "#fffaf4",
  },
  {
    name: "Verbal",
    score: "61",
    emo: { img: "/src/assets/icon-verbal.svg" },
    colorp: "#56c0a8",
    colors: "#f2fdf9",
  },
  {
    name: "Visual",
    score: "73",
    emo: { img: "/src/assets/icon-visual.svg" },
    colorp: "#5f65bb",
    colors: "#f4f4fe",
  },
];
function App() {
  return (
    <div className="flex justify-center items-center min-h-screen font-hanken bg-[#ecf2ff]">
      <div className="flex w-[80vh] h-[55vh] bg-white rounded-3xl">
        {/* Sol (mavi) kutu */}
        <div
          style={{
            background:
              "linear-gradient(to bottom, hsl(252,100%,67%), hsl(241,81%,54%))",
          }}
          className="flex-1/2 flex flex-col px-10 items-center gap-4 p-8 rounded-3xl"
        >
          <h1 className="text-[hsl(241,100%,89%)] text-xl">Your Result</h1>
          <div
            style={{
              background:
                "linear-gradient(to bottom, hsla(256,72%,46%,1), hsla(241,72%,46%,0))",
            }}
            className="flex flex-col items-center justify-center px-12 py-10 rounded-full"
          >
            <span className="text-5xl text-white font-bold">76</span>
            <span className="text-sm text-[hsl(241,100%,89%)]">of 100</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center gap-2">
            <h1 className="text-white font-bold text-2xl mt-2">Great</h1>
            <p className="text-[hsl(241,100%,89%)] text-sm">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </div>

        {/* Sağ (beyaz) kutu */}
        <div className="flex-1/2 flex flex-col h-auto bg-white gap-3 p-8 rounded-r-3xl">
          <h1 className="font-bold text-[#303b59] text-lg">Summary</h1>
          {listElements.map((item, index) => (
            <Lists
              name={item.name}
              score={item.score}
              emo={item.emo}
              colorp={item.colorp}
              colors={item.colors}
            />
          ))}
          <button className="bg-[#303b59] text-sm rounded-3xl transition duration-300  px-1 py-3 mt-3  text-white hover:bg-[hsl(241,81%,54%)]  hover:cursor-pointer">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

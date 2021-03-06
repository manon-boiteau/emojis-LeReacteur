import "./App.css";
import { useState } from "react";
import Search from "./components/Search";
import Line from "./components/Line";
import Footer from "./components/Footer";
import emojis from "./emojis.json";

function App() {
  const [result, setResult] = useState(emojis.slice(0, 20)); // only the 20 first of the full list

  const keyUp = (event) => {
    let results = [];

    for (let i = 0; i < emojis.length; i++) {
      if (emojis[i].keywords.indexOf(event.target.value.toLowerCase()) !== -1) {
        if (results.length <= 20) {
          results.push(emojis[i]); // keep 20 results on page
        } else {
          break;
        }
      }
    }
    setResult(results);
  };

  return (
    <div>
      <Search keyUp={keyUp} />
      <div>
        {result.map((emoji, index) => {
          return (
            <Line
              className="line"
              key={index}
              symbol={emoji.symbol}
              title={emoji.title}
              text="Click to copy!"
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;

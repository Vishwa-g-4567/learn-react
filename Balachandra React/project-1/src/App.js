import { useState } from "react";
import ChangeBoxBgColor from "./ChangeBoxBgColor";
import InputColor from "./InputColor";
import ToggleButton from "./ToggleButton";

function App() {
  const [currentColorInputText, setCurrentColorInputText] = useState("");
  const [currentHexCode, setCurrentHexCode] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <div className="w-full h-screen bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] flex flex-col gap-5 justify-center items-center">
      <ChangeBoxBgColor
        currentColorInputText={currentColorInputText}
        currentHexCode={currentHexCode}
        isDarkText={isDarkText}
      />
      <InputColor
        currentColorInputText={currentColorInputText}
        setCurrentColorInputText={setCurrentColorInputText}
        setCurrentHexCode={setCurrentHexCode}
      />
      <ToggleButton isDarkText={isDarkText} setIsDarkText={setIsDarkText} />
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  const randomNum = (length) => {
    return Math.floor(Math.random() * length);
  };
  const handleCreateRandomHEXColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomNum(hex.length)];
    }

    // console.log(hexColor);
    setColor(hexColor);
  };
  const handleCreateRandomRGBColor = () => {
    const r = randomNum(256);
    const g = randomNum(256);
    const b = randomNum(256);
    setColor(`rgb(${r},${g},${b})`);
  };
  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRGBColor();
    else handleCreateRandomHEXColor();
  }, typeOfColor);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>create HEX color</button>
      <button onClick={() => setTypeOfColor("rgb")}>create RGB color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHEXColor
            : handleCreateRandomRGBColor
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColor;

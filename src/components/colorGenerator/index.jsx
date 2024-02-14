// todo: copy to clipboard
import { useState } from "react";
import "./style.css";
const RandomColor = () => {
    const [typeofColor, setTypeOfColor] = useState("hex");
    const [color, setColor] = useState("#000000");

    const randomColorUtility = (length) => {
        return Math.floor(Math.random() * length);
    };

    const handleCreateRandomHexColor = () => {
        const hex = [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            "a",
            "b",
            "c",
            "d",
            "e",
            "f"
        ];
        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)];
        }
        setColor(hexColor);
    };

    const handleCreateRandomRgbColor = () => {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);
        setColor(`rgb(${r},${g},${b})`);
    };
    return (
        <div
            className='container'
            style={{
                width: "100vw",
                height: "100vh",
                background: color
            }}
        >
            <div className='buttons'>
                <button onClick={() => setTypeOfColor("hex")}>
                    Create Hex Color
                </button>
                <button onClick={() => setTypeOfColor("rgb")}>
                    Create RGB Color
                </button>
                <button
                    onClick={
                        typeofColor === "hex"
                            ? handleCreateRandomHexColor
                            : handleCreateRandomRgbColor
                    }
                >
                    Generate Random Color
                </button>
            </div>
            <div className='text'>
                <h3>{typeofColor === "hex" ? "Hex Color" : "RGB Color"}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    );
};

export default RandomColor;

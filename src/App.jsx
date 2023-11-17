import patterndesk from "./assets/pattern-divider-desktop.svg";
import patternmobile from "./assets/pattern-divider-mobile.svg";
import { useState, useEffect } from "react";

const App = () => {
    const [advice, setAdvice] = useState("");
    const [id, setId] = useState(1);

    const fetchAdvice = async () => {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        // console.log(data.slip);
        setAdvice(data.slip.advice);
        setId(data.slip.id);
    };

    useEffect(() => {
        fetchAdvice();
    }
    , []);

    return (
        <div className="flex h-screen justify-center items-center bg-[#1f2633]">
            {" "}
            <div className="relative flex flex-col items-center justify-center bg-[#333b4a] w-[480px] p-8 gap-5 rounded-md manrope mx-3">
                {" "}
                <h3 className=" text-[#52ffa8]">Advice #{id}</h3>
                <p className=" text-[28px] text-[#cee3e9] text-center pb-2">
                    {advice}
                </p>
                <img className="pb-5 md:block hidden" src={patterndesk} alt="divider" />
                <img className="pb-5 md:hidden" src={patternmobile} alt="divider" />
                <div
                    className="bg-[#52ffa8] rounded-full p-3 absolute -bottom-5 cursor-pointer hover:shadow-custom"
                    onClick={fetchAdvice}
                >
                    <img
                        className=" "
                        width={20}
                        height={20}
                        src="icon-dice.svg"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default App;

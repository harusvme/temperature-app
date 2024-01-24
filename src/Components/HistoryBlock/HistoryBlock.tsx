import React from "react";
import HistoryButton from "../Button/HistoryButton";
import "./HistoryBlock.scss";

const HistoryBlock: React.FC = () => {
    const days = 0;

    return (
        <div className="history-block">
            <div className="counter-label">{`Дней без душноты ${days}`}</div>
            <HistoryButton
                onClick={() => console.log("Кнопка")}
                buttonText="История"
            />
        </div>
    );
};

export default HistoryBlock;

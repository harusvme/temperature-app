import React from "react";
import "./HistoryButton.scss";

interface HistoryButtonProps {
    onClick: () => void;
    buttonText: string;
}

const HistoryButton: React.FC<HistoryButtonProps> = ({
    onClick,
    buttonText,
}) => {
    return (
        <button className="history-button" onClick={onClick}>
            <span className="button-text">{buttonText}</span>
            <span className="arrow">&#8594;</span>
        </button>
    );
};

export default HistoryButton;

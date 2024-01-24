import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Reducers/store";
import "./StatusBlock.scss";

const StatusBlock: React.FC = () => {
    const status = useSelector((state: RootState) => state.status);

    return (
        <div className={`status-block ${status}`}>
            <div className="status-message">
                {status === "normal"
                    ? "Душнила доволен вами"
                    : "Душнила не доволен вами"}
            </div>
            <div className="indicators-message">
                {status === "normal"
                    ? "Все показатели в норме"
                    : "CO2 превышают норму"}
            </div>
        </div>
    );
};

export default StatusBlock;

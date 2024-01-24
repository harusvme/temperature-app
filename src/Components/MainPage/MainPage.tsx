import React from "react";
import Header from "../Header/Header";
import LogoBlock from "../LogoBlock/LogoBlock";
import StatusBlock from "../StatusBlock/StatusBlock";
import TemperatureBlock from "../TemperatureBlock/TemperatureBlock";
import HistoryBlock from "../HistoryBlock/HistoryBlock";
import "./MainPage.scss";

const MainPage: React.FC = () => {
    return (
        <div className="wrapper">
            <Header />
            <StatusBlock />
            <HistoryBlock />
            <LogoBlock />
            <TemperatureBlock />
        </div>
    );
};

export default MainPage;

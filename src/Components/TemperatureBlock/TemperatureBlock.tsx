import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Reducers/store";
import "./TemperatureBlock.scss";

const TemperatureBlock: React.FC = () => {
    const dispatch = useDispatch();
    const status = useSelector((state: RootState) => state.status);
    const [data, setData] = useState<{ co2: string; temp: string } | null>(
        null
    );

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "http://dushnila.gooddelo.com/data"
                );
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("Ошибка:", error);
            }
        };

        fetchData();

        const interval = setInterval(() => {
            fetchData();
        }, 60000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (data) {
            const { co2, temp } = data;
            const newStatus =
                parseFloat(temp) > 27 || parseFloat(co2) > 800
                    ? "exceed"
                    : "normal";
            dispatch({ type: "SET_STATUS", payload: { status: newStatus } });
        }
    }, [data, dispatch]);

    return (
        <div className={`temperature-block ${status}`}>
            {data && (
                <>
                    <div>{data.temp} °C</div>
                    <p>Температура </p>
                    <div>{data.co2} ppm</div>
                    <p>CO2</p>
                </>
            )}
        </div>
    );
};

export default TemperatureBlock;

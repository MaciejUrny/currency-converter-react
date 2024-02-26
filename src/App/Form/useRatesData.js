import { useEffect, useState } from "react";
import { getRatesData } from "./useGetRatesData";

export const useRateData = () => {
    const [ratesData, setRateData] = useState({
        state: "loading",
    });

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await getRatesData();
                const { lastDate } = response.meta;

                setRateData({
                    state: "success",
                    rates: response.data,
                    date: lastDate,
                });
            }
            catch (error) {
                setRateData({
                    state: "error",
                });
            }
        };
        setTimeout(fetchRates, 1000);
    }, []);
    return ratesData;
};
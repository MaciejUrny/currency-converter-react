import axios from "axios";

const urlDataApi = "https://api.currencyapi.com/v3/latest?apikey=cur_live_wGrdHqnccqnyociyJnNg0kLKkYZNgaqtLPF4S2hL&currencies=&base_currency=PLN";

export const getRatesData = async () => {
    const response = await axios.get(urlDataApi);
    if (response.status !== 200) {
        throw new Error();
    }
    return response.data;
};
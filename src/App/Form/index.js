import "./style.css";
import { useState } from "react";
import { currencies } from "../currencies";

const Form = () => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <legend className="form__legend">Kalkulator walut</legend>
                <p>
                    <label
                    ><span className="form__labelText">Kwota w zł [PLN]:*</span>
                        <input
                            className="form__field"
                            type="number"
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                            placeholder="Wpisz kwotę w zł"
                            min="0"
                            step="0.01"
                            required
                            autoFocus
                        />
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">Przelicz na:*</span>
                        <select
                            className="form__field"
                            value={currency}
                            onChange={({ target }) => setCurrency(target.value)}
                        >
                            {currencies.map((currency => (
                                <option
                                    key={currency.short}
                                    value={currency.short}
                                >
                                    {currency.name}
                                </option>
                            )))}
                        </select>
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">Wynik:</span>
                        <input
                            className="form__field js-result"
                            type="text"
                        />
                    </label>
                </p>
                <p className="form__additionalInformation">
                    * Pola obowiązkowe.<br />Przeliczono według kursu walut NBP z dnia:
                    04.11.2022 r.
                </p>
                <button className="form__button">Przelicz</button>
            </fieldset>
        </form>
    )
};

export default Form;
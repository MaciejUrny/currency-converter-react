import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import { Clock } from "./Clock";
import {
    StyledForm,
    Fieldset,
    AppTitle,
    RowTitle,
    InputField,
    SelectField,
    Information,
    CalculateButton
} from "./styled";

const Form = () => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState(null);

    const calculateResult = (currency, amount) => {
        const rate = currencies.find(({ short }) => short === currency).value;

        setResult({
            sourceAmount: +amount,
            sourceRate: rate,
            targetAmount: amount / rate,
            currency,
        });
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Fieldset>
                <AppTitle className="form__legend">Kalkulator walut</AppTitle>
                <Clock />
                <p>
                    <label>
                        <RowTitle>Kwota w zł [PLN]:*</RowTitle>
                        <InputField
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
                        <RowTitle>Przelicz na:*</RowTitle>
                        <SelectField
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
                        </SelectField>
                    </label>
                </p>
                <Result result={result} />
                <Information>
                    * Pola obowiązkowe.<br />Przeliczono według kursu walut NBP z dnia:
                    04.11.2022 r.
                </Information>
                <CalculateButton>Przelicz</CalculateButton>
            </Fieldset>
        </StyledForm>
    )
};

export default Form;
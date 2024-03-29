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
    Information,
    CalculateButton,
    Loading,
    Failure
} from "./styled";
import { useRateData } from "./useRatesData";

const Form = () => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState(null);
    const ratesData = useRateData();

    const calculateResult = (currency, amount) => {
        const rate = ratesData.rates[currency].value;

        setResult({
            sourceAmount: +amount,
            sourceRate: rate,
            targetAmount: amount * rate,
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
                {ratesData.state === "loading" ? (
                    <Loading>
                        Ładuję kursy walut. Proszę czekać &#128513;
                    </Loading>
                ) : ratesData.state === "error" ? (
                    <Failure>
                        Wystąpił problem. Sprawdź swoje połączenie z internetem i spróbuj ponownie.
                    </Failure>
                ) : (
                    <>
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
                                <InputField
                                    as="select"
                                    value={currency}
                                    onChange={({ target }) => setCurrency(target.value)}
                                >
                                    {ratesData.rates && Object.keys(ratesData.rates).map((currency => (
                                        <option
                                            key={currency}
                                            value={currency}
                                        >
                                            {currency}
                                        </option>
                                    )))}
                                </InputField>
                            </label>
                        </p>
                        <Result result={result} />
                        <Information>
                            * Pola obowiązkowe.<br />Przeliczono według aktualnego kursu walut.
                        </Information>
                        <CalculateButton>Przelicz</CalculateButton>
                    </>
                )}
            </Fieldset>
        </StyledForm>
    )
};

export default Form;
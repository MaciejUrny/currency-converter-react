import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    }

    *, ::after, ::before {
    box-sizing: inherit;
    }

    body {
    font-family: "Montserrat", sans-serif;
    max-width: 500px;
    margin: auto;
    background-image: url(https://media.istockphoto.com/vectors/money-banknotes-and-coins-drawing-vector-id499480988?b=1&k=20&m=499480988&s=612x612&w=0&h=QIeZOuhwvgeS8XwKf1KNgwnRxor5j8JbK-9fU8X-R74=);
    background-repeat: no-repeat;
    background-position: center 25%;
    background-size: 75%;
    }
`;
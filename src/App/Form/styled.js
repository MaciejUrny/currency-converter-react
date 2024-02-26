import styled from "styled-components";

export const StyledForm = styled.form`
    padding: 40px 0;
`;

export const Fieldset = styled.fieldset`
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.color.crimson};
    background-color: ${({ theme }) => theme.color.white};
`;

export const AppTitle = styled.legend`
    font-weight: bold;
    padding: 10px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.red};
    color: ${({ theme }) => theme.color.white};
`;

export const RowTitle = styled.span`
    font-weight: bold;
    display: inline-block;
    width: 175px;
    margin-left: 5px;
`;

export const InputField = styled.input`
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.color.crimson};
    padding: 5px;
    text-align: center;
    max-width: 285px;
    width: 100%;
    margin-top: 3px;
`;

export const Information = styled.p`
    color: ${({ theme }) => theme.color.red};
    font-style: italic;
    font-weight: bold;
    font-size: 14px;
    line-height: 1.5;
`;

export const CalculateButton = styled.button`
    font-weight: bold;
    padding: 10px;
    border-radius: 5px;
    background-color: hsl(0, 100%, 50%);
    color: white;
    border: none;
    width: 100%;

    &:hover {
        filter: brightness(80%);
    }

    &:active {
        filter: brightness(90%)
    }
`;

export const Loading = styled.p`
    color: ${({ theme }) => theme.color.teal};
    text-align: center;
    font-weight: bold;
`;

export const Failure = styled.p`
    color: ${({ theme }) => theme.color.crimson};
    text-align: center;
    font-weight: bold;
`;
import styled from "styled-components";

export const ResultField = styled.div`
    background-color: ${({theme}) => theme.color.white};
    border-radius: 5px;
    border: 1px solid ${({theme}) => theme.color.crimson};
    padding: 10px;
    text-align: center;
    font-weight: bold;
    margin: 0px 10px 0px 10px;
`;
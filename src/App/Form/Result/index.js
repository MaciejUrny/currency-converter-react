import { ResultField } from "./styled";

export const Result = ({ result }) => (
    <p>
        {result && (
            <ResultField>
                {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;/&nbsp;
                {result.sourceRate.toFixed(2)}&nbsp;=&nbsp;
                {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
            </ResultField>
        )}
    </p>
);
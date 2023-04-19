import "./style.css";

export const Result = ({ result }) => (
    <p>
        {result && (
            <div className="container">
                {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;/&nbsp;
                {result.sourceRate.toFixed(2)}&nbsp;=&nbsp;
                {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
            </div>
        )}
    </p>
);
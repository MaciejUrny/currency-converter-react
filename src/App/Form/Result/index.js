import "./style.css";

export const Result = ({ result }) => (
    <>
        {result !== undefined && (
            <div className="container">
                <p>
                    {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;/&nbsp;
                    {result.sourceRate.toFixed(2)}&nbsp;=&nbsp;
                    {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                </p>
            </div>
        )}
    </>
);
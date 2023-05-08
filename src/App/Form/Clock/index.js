import "./style.css";
import { useCurrentDate } from "./useCurrentDate";

export const Clock = () => {

    const formattedDate = useCurrentDate();

    return (
        <div className="clock">
            Dzisiaj jest{" "} {formattedDate}
        </div>
    );
}
import { Timer } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

export const Clock = () => {

    const date = useCurrentDate();

    const formattedDate = date.toLocaleString(undefined, {
        weekday: "long",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        day: "numeric",
        month: "long"
    });

    return (
        <Timer>
            Dzisiaj jest{" "} {formattedDate}
        </Timer>
    );
}
import { Timer } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

export const Clock = () => {

    const formattedDate = useCurrentDate();

    return (
        <Timer>
            Dzisiaj jest{" "} {formattedDate}
        </Timer>
    );
}
import { useRef,memo } from "react";

export const Counts =memo( ({bioData}) => {
    const renderCount = useRef(0);

    console.log("Render count before increment:", renderCount.current);

    return (
        <div className="mt-3 font-display text-center">
            <p>Nothing Changed Here But I've Now Rendered:
                <span className="text-red-600">{renderCount.current++} time(s)</span>
                <p>My Name is {bioData.name}</p>
            </p>
        </div>
    );
});


export default memo(Counts);
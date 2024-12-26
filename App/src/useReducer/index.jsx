import { useReducer} from "react";

export const RedudcerComp = () => {
    const initialState = {
        count : 0,
        inc:2,
        dec:2
    }
    const reducer = (state, action) => {
        console.log(state, action);
        // if(action.type === "INCREMENT"){
        //     return state + 1;
        // }
        // if(action.type === "DECREMENT"){
        //     return state - 1;
        // }
        // if(action.type === "REST"){
        //     return (state = 0);
        // }

         
        switch(action.type){
            case "INCREMENT":
            return {
                ...state,
                count:state.count + 1};

              case "DECREMENT":
                return {
                    ...state,
                    count:state.count - 1};

                 case "REST":
                    return {...state,count:0};

                default:
                    return state;
        }



    };
    // const [counter, setCounter] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(useReducer(reducer, 0));
    return (
        <div className={`p-4 h-screen flex flex-col justify-center items-center transition-all`}>
        <h1>{state.count}</h1>
        <button onClick={() => dispatch({type:"INCREMENT"})}>Increment</button>
        <button onClick={() => dispatch({type:"DECREMENT"})}>Decrement</button>
        <button onClick={() => dispatch ({type: "REST"})}>Rest</button>
        </div>
    );
};
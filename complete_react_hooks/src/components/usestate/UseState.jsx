import React,{ useState } from "react";


const UseState = () => {
const [count, setCount] = useState(0);

return (
    <>
    
        <div>
        <button onClick={() => setCount(count + 1)}> Counter Add</button>
        <p>The Current Cunt is:-{count}</p>
        <button
            onClick={() => (count === 0 ? setCount(0) : setCount(count - 1))}>
            Counter Remove
        </button>
        </div>
    
    </>
);
};






export default UseState;
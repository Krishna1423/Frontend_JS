import React, {useState, useEffect} from "react";

export default function Counter(){
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count+1)}>Increment</button>
        </div>
    );
}

// function DataFetching(){
//     const[data, setData] = useState([]);

//     useEffect(() => {
//        fetch('https://jsonplaceholder.typicode.com/posts')
//        .then((response) => response.json())
//        .then((data) => setData(data));
//     },[]);

//     return(
//         <div>
//             <h2> Posts </h2>
//             <u1>
//                 {data.map((post) => (
//                     <li key ={post.id}>{post.title}</li>
//                 ))}
//             </u1>
//         </div>
//     )
// }

// export default DataFetching;
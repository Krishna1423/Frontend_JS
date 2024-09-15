import React, {useState, useEffect} from "react";


export default function DataFetching(){
    const[data, setData] = useState([]);

    useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/posts')
       .then((response) => response.json())
       .then((data) => setData(data));
    },[]);

    return(
        <div>
            <h2> Posts </h2>
            <u1>
                {data.map((post) => (
                    <li key ={post.id}>{post.title}</li>
                ))}
            </u1>
        </div>
    )
}
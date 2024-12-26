import { useState } from "react";

// const users = [
//     {name: "vali" , age: 25},
//     {name: "hhh", age:52},
//     {name: "ehji" , age:45},
//     {name: "kjhrkh", age:63},
//     {name: "huytuyrtw", age:78}
// ];


export const DerivedState = () => {
    const [users, setUsers] = useState([
        {name: "vali" , age: 25},
        {name: "hhh", age:30},
        {name: "ehji" , age:35},
        {name: "kjhrkh", age:45},
    ]);


    console.log(users);

const userCount = users.length;
const AverageAge = users.reduce((accum , curElem)=> accum + curElem.age,0)
    return(
        <div className="main-div">
            <h1>Users List</h1>
            <ul>

                {users.map((curElem, index)=>{
                    return(
                        <li key={index}>{curElem.name} - {curElem.age} year old </li>
                    )
                })}
            </ul>
            <p>Total Usrs : {userCount}</p>
            <p>Average Age : {AverageAge}</p>
        </div>
    );
};
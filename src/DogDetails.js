import React from 'react';
import { useParams, Redirect, Link} from 'react-router-dom';


const DogDetails = ({dogList}) => {
    const {name} = useParams();
    const dogArray = dogList.filter((dog) => dog.name === name);
    const d = dogArray[0];

    if (!d) return <Redirect to="/dogs"/>

    return (
        <div className="DogDetails">
            <h1>{d.name}</h1>
            <img 
            src={d.src}
            width="450px"
            alt = {"pic of " + d.name}
            />

            <p>Age: {d.age}</p>
            Facts:
            <ol>
                {d.facts.map((f) => {
                    return <li key ={f}> {f} </li>
                })}
            </ol>
            <Link to ="/dogs">Go Back</Link>
        </div>
    )
}

export default DogDetails;
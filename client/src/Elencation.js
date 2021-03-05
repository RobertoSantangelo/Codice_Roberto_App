import './App.css';
import React, { useState } from 'react';

let array = [];

function Elencation() {
    const [base, setBase] = useState([]);

    const callAPI = () => {
        fetch("http://localhost:9000/testAPI")
            .then((res) => {
                console.log(res.json().then((resu) => {
                    array = resu;
                    console.log('ecco l array', array);
                    setBase(array);
                    console.log('daje', base)
                }));


            });
    }
    callAPI();
    return (
        <div>
            <div>

                {base.map((res) => {
                    return (
                        <div key={res.id}>Query Entry n°{res.id}:
                            {res.username} - {res.password}</div>
                    );
                })}
            </div>

        </div>

    );
}

export default Elencation;
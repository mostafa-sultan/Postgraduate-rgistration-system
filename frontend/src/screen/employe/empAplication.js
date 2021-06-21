import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './style.css'
import { Link, NavLink, useParams } from "react-router-dom";

function CardList() {
    const [result, setData] = useState([]);

    useEffect(() => {
        //   fetch("http://localhost:3001/links/")
        //     .then(response => response.json())
        //     .then(data => setData(data));

        axios.get(`http://localhost:3000/admin`)
            .then(res => {
                var data = res.data;
                setData(data)
                console.log(result)
                console.log(result)
            })

    });
    const dataa = result
    return (
        dataa.map((data) =>
            <>
                <div className="col-md-6">
                    <div className="card" style={{ width: '19rem' }}>
                        <img alt="sub" className="card-img-top" src="https://www.bootdey.com/img/Content/avatar/avatar1.png" />
                        <div className="card-body">
                            <h5 className="card-title"> {data.fristname}</h5>
                            <NavLink className="nav-link" to={"/empDetail/" + data._id}>
                                <p className="card-text"> Show Aplication</p>
                            </NavLink>
          
                        </div>
                    </div>

                </div>
            </>
        )

    );
}
function EmpAplication() {
    return (

        <div className="container">
            <div className="row"> 

                    <h4 className="font-weight-bold mt-0 mb-4">requists</h4>
                    <div className="row pt-2 pb-2">
                        <CardList />

                 




                </div>
            </div>
        </div>


    )
}


export default EmpAplication

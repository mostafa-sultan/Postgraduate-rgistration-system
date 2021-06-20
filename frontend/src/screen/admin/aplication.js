import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './style.css'
import { Link, NavLink, useParams } from "react-router-dom";

function Aplication() {
    let { id } = useParams();
    console.log(id)

    const [userData, setData] = useState([]);
    var flag = true;
    useEffect(() => {
        axios.get(`http://localhost:3000/userApp/` + id)
            .then(res => {
                var data = res.data;
                setData(data)
                console.log(data)
                console.log(userData)
                console.log(userData)
            })

 

    },[]);

    

    // {_id: "60cf6e63bdd0803e141c658c", fristname: "mostafa", lastname: "soltan", email: "admin@gmail.com", password: "sjnhdskjh", …}
    // address: ".,m.dsfkjjdsf"
    // certification: "C:\\fakepath\\FireShot Capture 071 - React cheat sheet - www.developer-cheatsheets.com.png"
    // document: "C:\\fakepath\\FireShot Capture 071 - React cheat sheet - www.developer-cheatsheets.com.png"
    // email: "admin@gmail.com"
    // fristname: "mostafa"
    // img: "C:\\fakepath\\react.pdf"
    // lastname: "soltan"
    // military: "done"
    // password: "sjnhdskjh"
    // phone: "80348734"
    // religion: "Muslim"
    // state: "other"
    // typeOfStudy: "master"
    // __v: 0
    // _id: "60cf6e63bdd0803e141c658c"
    
    return (
        <div>
            <div className="container bootstrap snippets bootdey">
                <div className="panel-body inf-content">
                    <div className="row">
                        <div className="col-md-4"><img className="img-circle img-thumbnail isTooltip" style={{ width: 600 }} title src="https://bootdey.com/img/Content/avatar/avatar7.png" alt data-original-title="Usuario" /></div>
                        <div className="col-md-6"><strong>Information</strong><br />
                            <div className="table-responsive">
                                <table className="table table-user-information">
                                    <tbody>
                                        <tr>
                                            <td><strong> Id Numper </strong></td>

                                            <td className="text-primary">
                                                <input type="text" className="form-control" placeholder="Username" defaultValue={userData._id} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><strong> Name </strong></td>
                                            <td className="text-primary">
                                                <input type="text" className="form-control" placeholder="Username" defaultValue={userData.fristname} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><strong> Lastname </strong></td>
                                            <td className="text-primary">
                                                <input type="text" className="form-control" placeholder="Username" defaultValue={userData.lastname} />

                                            </td>
                                        </tr>
                                        <tr>
                                            <td><strong> Role </strong></td>
                                            <td className="text-primary">
                                                <input type="text" className="form-control" placeholder="Username" defaultValue={userData.typeOfStudy} />

                                            </td>
                                        </tr>
                                        <tr>
                                            <td><strong> Email </strong></td>
                                            <td className="text-primary">
                                                <input type="text" className="form-control" placeholder="Username" defaultValue={userData.email} />

                                            </td>
                                        </tr>
                                        <tr>
                                            <td><strong> military </strong></td>
                                            <td className="text-primary">{userData.military}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <center>
                <button className="btn-danger">Update</button>
                <a href="alksj"> <button className="btn-danger">Delete</button></a>
                <a href="alksj"> <button className="btn-danger">Accept</button></a>
                <a href="alksj"> <button className="btn-danger">Reject</button></a> 
            </center>


        </div>


    )
}

export default Aplication

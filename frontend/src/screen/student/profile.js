import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, NavLink, useParams } from "react-router-dom";

function Profile() {
    let { id } = useParams();
    console.log(id)

   const [userData, setData] = useState([]); 
    useEffect(() => {
        axios.get(`http://localhost:3000/user/` + id)
            .then(res => {
                var data = res.data;
                setData(data)
                console.log(data)
                console.log(userData)
                console.log(userData)
            })

 

    },[]);
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
            <form className="">
            <div className="form-row">
            <div className="col-md-3 mb-3">
            <br/> 
              <h2 htmlFor="validationTooltip05">upload document</h2>
              <input
                type="file"
                className="form-control"
                id="document"
                placeholder="documents" 
                required
              />              
              <input
              type="submit"
              className="form-control"
              id="submit"
              placeholder="Upload"  
            />
              <div className="invalid-tooltip">Please provide a valid zip.</div>
            </div>
          </div>
            </form>
<center><h1>FILES</h1></center>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">file name</th>
                        <th scope="col">file type</th>
                        <th scope="col">download</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>dl reacher</td>
                        <td>pdf</td>
                        <td><button className="btn btn-secondary">downlode</button>   </td>
                    </tr>
                    <tr>
                        <td>algorism </td>
                        <td>pdf</td>
                        <td><button className="btn btn-secondary">downlode</button>   </td>
                    </tr>
                    <tr>
                        <td>computer vision</td>
                        <td>pdf</td>
                        <td><button className="btn btn-secondary">downlode</button>   </td>
                    </tr> 
                </tbody>
            </table>

        </div>


    )
}

export default Profile

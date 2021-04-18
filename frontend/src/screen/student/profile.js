import React from 'react'

function Profile() {
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
                                            <td><strong> Identificacion </strong></td>
                                            <td className="text-primary">123456789</td>
                                        </tr>
                                        <tr>
                                            <td><strong> Name </strong></td>
                                            <td className="text-primary">Bootdey</td>
                                        </tr>
                                        <tr>
                                            <td><strong> Lastname </strong></td>
                                            <td className="text-primary">Bootstrap</td>
                                        </tr>
                                        <tr>
                                            <td><strong> Username </strong></td>
                                            <td className="text-primary">bootnipets</td>
                                        </tr>
                                        <tr>
                                            <td><strong> Role </strong></td>
                                            <td className="text-primary">Admin</td>
                                        </tr>
                                        <tr>
                                            <td><strong> Email </strong></td>
                                            <td className="text-primary">noreply@email.com</td>
                                        </tr>
                                        <tr>
                                            <td><strong> created </strong></td>
                                            <td className="text-primary">20 jul 20014</td>
                                        </tr>
                                        <tr>
                                            <td><strong> Modified </strong></td>
                                            <td className="text-primary">20 jul 20014 20:00:00</td>
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
              <label htmlFor="validationTooltip05">document</label>
              <input
                type="file"
                className="form-control"
                id="document"
                placeholder="documents" 
                required
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
                        <td>Mark</td>
                        <td>pdf</td>
                        <td><button className="btn btn-secondary">downlode</button>   </td>
                    </tr>
                    <tr>
                        <td>Mark</td>
                        <td>pdf</td>
                        <td><button className="btn btn-secondary">downlode</button>   </td>
                    </tr>
                    <tr>
                        <td>Mark</td>
                        <td>pdf</td>
                        <td><button className="btn btn-secondary">downlode</button>   </td>
                    </tr> 
                </tbody>
            </table>

        </div>


    )
}

export default Profile

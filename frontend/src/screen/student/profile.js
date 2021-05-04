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
                                            <td><strong> Id Numper </strong></td>
                                            <td className="text-primary">123456789</td>
                                        </tr>
                                        <tr>
                                            <td><strong> Name </strong></td>
                                            <td className="text-primary">most</td>
                                        </tr>
                                        <tr>
                                            <td><strong> Lastname </strong></td>
                                            <td className="text-primary">team</td>
                                        </tr>
                                        <tr>
                                            <td><strong> Role </strong></td>
                                            <td className="text-primary">Ms Student</td>
                                        </tr>
                                        <tr>
                                            <td><strong> Email </strong></td>
                                            <td className="text-primary">m@email.com</td>
                                        </tr>
                                        <tr>
                                            <td><strong> created </strong></td>
                                            <td className="text-primary">20 jul 20014</td>
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

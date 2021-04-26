
// import React from 'react'; 
import React, { Component } from "react";

class registrationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      errors: {},
    };
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields["fristname"]) {
      formIsValid = false;
      errors["fristname"] = "Cannot be empty";
    }
    if (typeof fields["fristname"] !== "undefined") {
      if (!fields["fristname"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["fristname"] = "Only letters";
      }
    }

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  contactSubmit(e) {
    e.preventDefault();
    if (this.handleValidation()) {
      alert("Form submitted");
    } else {
      alert("Form has errors.");
    }
    console.log(this.state);
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  render() {
    return (
      <div>
        <center><h1>REGISTERING FORM</h1></center>
        <br />

        <form
          className="needs-validation"
          onSubmit={this.contactSubmit.bind(this)}
        >
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label htmlFor="validationTooltip01">First name</label>
              <input
                type="text"
                className="form-control"
                id="validationTooltip01"
                placeholder="First name"
                onChange={this.handleChange.bind(this, "fristname")}
                value={this.state.fields["fristname"]}
                required
              />
              <span style={{ color: "red" }}>{this.state.errors["name"]}</span>
              <div className="valid-tooltip">Looks good!</div>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="validationTooltip02">Last name</label>
              <input
                type="text"
                className="form-control"
                id="validationTooltip02"
                placeholder="Last name"
                onChange={this.handleChange.bind(this, "lastname")}
                value={this.state.fields["lastname"]}
                required
              />
              <span style={{ color: "red" }}>
                {this.state.errors["lastname"]}
              </span>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="validationTooltipUsername">email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Username"
                aria-describedby="validationTooltipUsernamePrepend"
                onChange={this.handleChange.bind(this, "email")}
                value={this.state.fields["email"]}
                required
              />
              <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
            </div>
          </div>
          <div />

          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label htmlFor="validationTooltipUsername">password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="password"
                aria-describedby="validationTooltipUsernamePrepend"
                onChange={this.handleChange.bind(this, "password")}
                value={this.state.fields["password"]}
                required
              />
              <span style={{ color: "red" }}>{this.state.errors["password"]}</span>
            </div> 
          </div>

          <div className="form-row">
          <div className="col-md-3 mb-3">
              <label htmlFor="validationTooltip04">Type of study</label>
              <select
                className="custom-select my-1 mr-sm-2"
                id="state"
                onChange={this.handleChange.bind(this, "typeOfStudy")}
                value={this.state.fields["typeOfStudy"]}
              >
                <option selected>Choose...</option>
                <option value={"master"}>master</option>
                <option value="PhD">PhD</option> 
              </select>

              <div className="invalid-tooltip">
                Please provide a valid state.
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <label htmlFor="validationTooltip04">Religion</label>
              <select
                className="custom-select my-1 mr-sm-2"
                id="state"
                onChange={this.handleChange.bind(this, "religion")}
                value={this.state.fields["religion"]}
              >
                <option selected>Choose...</option>
                <option value={"Muslim"}>Muslim</option>
                <option value="Christian">Christian</option>
                <option value="other">other</option>
              </select>

              <div className="invalid-tooltip">
                Please provide a valid state.
              </div>
            </div>
          </div>

        <div className="form-row">
            <div className="col-md-4 mb-3">
              <label htmlFor="validationTooltipUsername">phone</label>
              <input
                type="tet"
                className="form-control"
                id="phone"
                placeholder="phone"
                aria-describedby="validationTooltipUsernamePrepend"
                onChange={this.handleChange.bind(this, "phone")}
                value={this.state.fields["phone"]}
                required
              />
              <span style={{ color: "red" }}>{this.state.errors["phone"]}</span>
            </div> 
          </div>
          
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label htmlFor="validationTooltip03">address</label>
              <input
                type="text"
                className="form-control"
                id="validationTooltip03"
                placeholder="address"
                onChange={this.handleChange.bind(this, "address")}
                value={this.state.fields["address"]}
                required
              />
              <span style={{ color: "red" }}>
                {this.state.errors["address"]}
              </span>
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="validationTooltip04">Social status</label>
              <select
                className="custom-select my-1 mr-sm-2"
                id="state"
                onChange={this.handleChange.bind(this, "state")}
                value={this.state.fields["state"]}
              >
                <option selected>Choose...</option>
                <option value={"marid"}>marid</option>
                <option value="singel">singel</option>
                <option value="other">other</option>
              </select>

              <div className="invalid-tooltip">
                Please provide a valid state.
              </div>
            </div>
          </div>
          <div className="form-row">
  
            <div className="col-md-3 mb-3">
              <label htmlFor="validationTooltip04">the military situation</label>
              <select
                className="custom-select my-1 mr-sm-2"
                id="state"
                onChange={this.handleChange.bind(this, "military")}
                value={this.state.fields["military"]}
              >
                <option selected>Choose...</option>
                <option value={"done"}>done</option>
                <option value="no">not done</option>
                <option value="other">other</option>
              </select>

              <div className="invalid-tooltip">
                Please provide a valid state.
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-3 mb-3">
              <label htmlFor="validationTooltip05">img</label>
              <input
                type="file"
                className="form-control"
                id="img"
                placeholder="img"
                onChange={this.handleChange.bind(this, "img")}
                value={this.state.fields["img"]}
                required
              />
              <div className="invalid-tooltip">Please provide a valid zip.</div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-3 mb-3">
              <label htmlFor="validationTooltip05">certification</label>
              <input
                type="file"
                className="form-control"
                id="certification"
                placeholder="certification"
                onChange={this.handleChange.bind(this, "certification")}
                value={this.state.fields["certification"]}
                required
              />
              <div className="invalid-tooltip">Please provide a valid zip.</div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-3 mb-3">
              <label htmlFor="validationTooltip05">document</label>
              <input
                type="file"
                className="form-control"
                id="document"
                placeholder="documents"
                onChange={this.handleChange.bind(this, "document")}
                value={this.state.fields["document"]}
                required
              />
              <div className="invalid-tooltip">Please provide a valid zip.</div>
            </div>
          </div>
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </form>
        ;
      </div>
    );
  }
}

export default registrationForm;

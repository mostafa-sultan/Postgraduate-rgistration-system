
// import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import React, { Component } from "react";

class FormsPage extends Component {
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
              <label htmlFor="validationTooltip04">State</label>
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

export default FormsPage;
// import React from 'react';
// import { useForm } from "react-hook-form";
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as Yup from 'yup';
// import React, { Component } from 'react';

// class form extends Component {
//     render() {
//         return (
//             <div>

//             </div>
//         );
//     }
// }

// export default form;

// function FormsPage() {
//     // form validation rules 
//     const validationSchema = Yup.object().shape({
//         title: Yup.string()
//             .required('Title is required'),
//         firstName: Yup.string()
//             .required('First Name is required'),
//         lastName: Yup.string()
//             .required('Last name is required'),
//         dob: Yup.string()
//             .required('Date of Birth is required')
//             .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'Date of Birth must be a valid date in the format YYYY-MM-DD'),
//         email: Yup.string()
//             .required('Email is required')
//             .email('Email is invalid'),
//         password: Yup.string()
//             .min(6, 'Password must be at least 6 characters')
//             .required('Password is required'),
//         confirmPassword: Yup.string()
//             .oneOf([Yup.ref('password'), null], 'Passwords must match')
//             .required('Confirm Password is required'),
//         acceptTerms: Yup.bool()
//             .oneOf([true], 'Accept Ts & Cs is required')
//     });

//     // functions to build form returned by useForm() hook
//     const { register, handleSubmit, reset, errors } = useForm({
//         resolver: yupResolver(validationSchema)
//     });

//     function onSubmit(data) {
//         // display form data on success
//         alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
//     }

//     return (
//         <div className="card m-3">
//             <h5 className="card-header">React - Form Validation Example with React Hook Form</h5>
//             <div className="card-body">
//                 <form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
//                     <div className="form-row">
//                         <div className="form-group col">
//                             <label>Title</label>
//                             <select name="title" ref={register} className={`form-control ${errors.title ? 'is-invalid' : ''}`}>
//                                 <option value=""></option>
//                                 <option value="Mr">Mr</option>
//                                 <option value="Mrs">Mrs</option>
//                                 <option value="Miss">Miss</option>
//                                 <option value="Ms">Ms</option>
//                             </select>
//                             <div className="invalid-feedback">{errors.title?.message}</div>
//                         </div>
//                         <div className="form-group col-5">
//                             <label>First Name</label>
//                             <input name="firstName" type="text" ref={register} className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} />
//                             <div className="invalid-feedback">{errors.firstName?.message}</div>
//                         </div>
//                         <div className="form-group col-5">
//                             <label>Last Name</label>
//                             <input name="lastName" type="text" ref={register} className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} />
//                             <div className="invalid-feedback">{errors.lastName?.message}</div>
//                         </div>
//                     </div>
//                     <div className="form-row">
//                         <div className="form-group col">
//                             <label>Date of Birth</label>
//                             <input name="dob" type="date" ref={register} className={`form-control ${errors.dob ? 'is-invalid' : ''}`} />
//                             <div className="invalid-feedback">{errors.dob?.message}</div>
//                         </div>
//                         <div className="form-group col">
//                             <label>Email</label>
//                             <input name="email" type="text" ref={register} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
//                             <div className="invalid-feedback">{errors.email?.message}</div>
//                         </div>
//                     </div>
//                     <div className="form-row">
//                         <div className="form-group col">
//                             <label>Password</label>
//                             <input name="password" type="password" ref={register} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
//                             <div className="invalid-feedback">{errors.password?.message}</div>
//                         </div>
//                         <div className="form-group col">
//                             <label>Confirm Password</label>
//                             <input name="confirmPassword" type="password" ref={register} className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`} />
//                             <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
//                         </div>
//                     </div>
//                     <div className="form-group form-check">
//                         <input name="acceptTerms" type="checkbox" ref={register} id="acceptTerms" className={`form-check-input ${errors.acceptTerms ? 'is-invalid' : ''}`} />
//                         <label for="acceptTerms" className="form-check-label">Accept Terms & Conditions</label>
//                         <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
//                     </div>
//                     <div className="form-group">
//                         <button type="submit" className="btn btn-primary mr-1">Register</button>
//                         <button className="btn btn-secondary" type="reset">Reset</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }


// export default FormsPage;
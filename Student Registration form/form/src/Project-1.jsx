import React, { useState } from "react";
import "./Project1.css";

function Project1() {

  const [form, setForm] = useState({
    name: "",
    aadhaarName: "",
    dob: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    course: "",
    college: "",
    aadhaar: "",
    photo: ""
  });

  const [errors, setErrors] = useState({});

  const change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let e = {};

    if (!form.name) e.name = "Name is required";

    if (!form.aadhaarName)
      e.aadhaarName = "Aadhaar name is required";
    else if (
      form.name.toLowerCase() !== form.aadhaarName.toLowerCase()
    )
      e.aadhaarName = "Name does not match Aadhaar";

    if (!form.dob) e.dob = "DOB is required";

    if (!form.email)
      e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      e.email = "Invalid email";

    if (!form.password)
      e.password = "Password is required";
    else if (form.password.length < 6)
      e.password = "Minimum 6 characters";

    if (!form.phone) e.phone = "Phone is required";
    if (!form.gender) e.gender = "Gender is required";
    if (!form.address) e.address = "Address is required";
    if (!form.city) e.city = "City is required";
    if (!form.state) e.state = "State is required";
    if (!form.pincode) e.pincode = "Pincode is required";
    if (!form.course) e.course = "Course is required";
    if (!form.college) e.college = "College is required";
    if (!form.aadhaar) e.aadhaar = "Aadhaar number is required";
    if (!form.photo) e.photo = "Photo is required";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();

    if (validate())
      alert("Form submitted successfully!");
  };

  const clear = () => {
    setForm({
      name: "",
      aadhaarName: "",
      dob: "",
      email: "",
      password: "",
      phone: "",
      gender: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      course: "",
      college: "",
      aadhaar: "",
      photo: ""
    });

    setErrors({});
  };

  const photoChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const img = new Image();

      img.onload = () => {
        if (img.width === 300 && img.height === 300) {
          setForm({ ...form, photo: file.name });
        } else {
          setErrors({
            ...errors,
            photo: "Photo must be exactly 300 × 300 px"
          });
        }
      };

      img.src = URL.createObjectURL(file);
    }
  };

  return (
    <div className="registration-page">

      <div className="registration-card">

        <h1 className="registration-heading">
          Student Registration
        </h1>

        <p className="registration-subtitle">
          Please fill in your details
        </p>

        <form className="registration-form" onSubmit={submit}>

          <div className="form-group">
            <label className="form-label">Name *</label>
            <input
              className="form-input"
              name="name"
              value={form.name}
              onChange={change}
              placeholder="Enter your name"
            />
            <p className="error-message">{errors.name}</p>
          </div>

          <div className="form-group">
            <label className="form-label">Aadhaar Card Name *</label>
            <input
              className="form-input"
              name="aadhaarName"
              value={form.aadhaarName}
              onChange={change}
              placeholder="Enter Aadhaar name"
            />
            <p className="error-message">{errors.aadhaarName}</p>
          </div>

          <div className="form-group">
            <label className="form-label">Date of Birth *</label>
            <input
              className="form-input"
              type="date"
              name="dob"
              value={form.dob}
              onChange={change}
            />
            <p className="error-message">{errors.dob}</p>
          </div>

          <div className="form-group">
            <label className="form-label">Email *</label>
            <input
              className="form-input"
              type="email"
              name="email"
              value={form.email}
              onChange={change}
              placeholder="example@gmail.com"
            />
            <p className="error-message">{errors.email}</p>
          </div>

          <div className="form-group">
            <label className="form-label">Password *</label>
            <input
              className="form-input"
              type="password"
              name="password"
              value={form.password}
              onChange={change}
              placeholder="Minimum 6 characters"
            />
            <p className="error-message">{errors.password}</p>
          </div>

          <div className="form-group">
            <label className="form-label">Phone *</label>
            <input
              className="form-input"
              name="phone"
              value={form.phone}
              onChange={change}
              placeholder="Enter phone number"
            />
            <p className="error-message">{errors.phone}</p>
          </div>

          <div className="form-group">
            <label className="form-label">Gender *</label>
            <select
              className="form-input"
              name="gender"
              value={form.gender}
              onChange={change}
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <p className="error-message">{errors.gender}</p>
          </div>

          <div className="form-group">
            <label className="form-label">Address *</label>
            <textarea
              className="form-textarea"
              name="address"
              value={form.address}
              onChange={change}
              placeholder="Enter your address"
            />
            <p className="error-message">{errors.address}</p>
          </div>

          <div className="form-group">
            <label className="form-label">City *</label>
            <input
              className="form-input"
              name="city"
              value={form.city}
              onChange={change}
              placeholder="Enter city"
            />
            <p className="error-message">{errors.city}</p>
          </div>

          <div className="form-group">
            <label className="form-label">State *</label>
            <input
              className="form-input"
              name="state"
              value={form.state}
              onChange={change}
              placeholder="Enter state"
            />
            <p className="error-message">{errors.state}</p>
          </div>

          <div className="form-group">
            <label className="form-label">Pincode *</label>
            <input
              className="form-input"
              name="pincode"
              value={form.pincode}
              onChange={change}
              placeholder="Enter pincode"
            />
            <p className="error-message">{errors.pincode}</p>
          </div>

          <div className="form-group">
            <label className="form-label">Course *</label>
            <input
              className="form-input"
              name="course"
              value={form.course}
              onChange={change}
              placeholder="Enter course"
            />
            <p className="error-message">{errors.course}</p>
          </div>

          <div className="form-group">
            <label className="form-label">College *</label>
            <input
              className="form-input"
              name="college"
              value={form.college}
              onChange={change}
              placeholder="Enter college name"
            />
            <p className="error-message">{errors.college}</p>
          </div>

          <div className="form-group">
            <label className="form-label">Aadhaar Number *</label>
            <input
              className="form-input"
              name="aadhaar"
              value={form.aadhaar}
              onChange={change}
              placeholder="Enter Aadhaar number"
            />
            <p className="error-message">{errors.aadhaar}</p>
          </div>

          <div className="form-group">
            <label className="form-label">
              Photo * <span>(300 × 300 px)</span>
            </label>

            <input
              className="photo-input"
              type="file"
              accept="image/*"
              onChange={photoChange}
            />

            <p className="error-message">{errors.photo}</p>
          </div>

          <div className="form-buttons">

            <button
              className="submit-btn"
              type="submit"
            >
              Submit
            </button>

            <button
              className="clear-btn"
              type="button"
              onClick={clear}
            >
              Clear
            </button>

          </div>

        </form>
      </div>
    </div>
  );
}

export default Project1;
import React, { useState } from 'react'
import "./register.css"
import mainImage from "../images/register-page-img.png"

const Register = () => {

  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: ""
  })

  const handleInput = (e) => {

    let name = e.target.name
    let value = e.target.value

    setUser({
      ...user,
      [name]: value  // dynamic for getting value of input of 4 fields
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch("http://localhost:5001/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log("response data : ", response);

      if (response.ok) {
        const responseData = await response.json();
        alert("registration successful");
        setUser({ username: "", email: "", phone: "", password: "" });
        console.log(responseData);
      } else {
        console.log("error inside response ", "error");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <>
      <div className='main-container-register'>

        <div className='image-div'>
          <img src={mainImage} alt='form picture' className='register-image' />
        </div>



        <div className='form-main-div'>

          <form onSubmit={handleSubmit}>
            <h1 style={{ textAlign: "center", color: "#C0C0C0" }}>Registration Form</h1>
            <br />
            <div className='field' >
              <label htmlFor='username' className='register-form-label'>username</label><br />
              <input type='text' name='username' placeholder='username' id='username' className='register-form-input' required autoComplete='off' value={user.name} onChange={handleInput} />
              <br /><br />
              <label htmlFor='email' className='register-form-label'>email</label><br />
              <input type='email' name='email' placeholder='email' id='email' className='register-form-input' required autoComplete='off' value={user.email} onChange={handleInput} />
              <br /><br />
              <label htmlFor='phone' className='register-form-label'>phone</label><br />
              <input type='number' name='phone' placeholder='phone' id='phone' className='register-form-input' required autoComplete='off' value={user.phone} onChange={handleInput} />
              <br /><br />
              <label htmlFor='password' className='register-form-label'>password</label><br />
              <input type='password' name='password' placeholder='password' id='password' className='register-form-input' required autoComplete='off' value={user.password} onChange={handleInput} />

              <br /><br />

              <button type='submit'>Register now</button>
            </div>
          </form>
        </div>

      </div>
    </>
  )
}

export default Register
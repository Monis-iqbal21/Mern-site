import React, { useState } from 'react'

const Login = () => {

const [user , setUser] = useState({
  user:"",
  password: ""
})

const handleInput = (e)=>{
  let name = e.target.name
  let value = e.target.value

  setUser({
    ...user,
    [name] : value,
  })

  


}

const handleSubmit =async (e)=>{
  e.preventDefault()
  console.log(user)
  try {
    
  
  const response = await fetch(`http://localhost:5001/api/auth/contact`,{
    method : "POST",
    headers: {
      'Content-Type':"application/json",
      
    },
   body : JSON.stringify(user),
  });
} catch (error) {
    console.log("login front end error :" +  error)
}
}
  return (
    <>
      <div>
        <div>
          <div>
            <img src="" alt='form picture login' />
          </div>
          <div className='grid'>

            <form onSubmit={handleSubmit}>
              <h1>Registration Form</h1>
              <br />
              
              <label htmlFor='email'>email</label>
              <input type='email' name='email' placeholder='email' id='email' required autoComplete='off' value={user.email} onChange={handleInput} />

              <label htmlFor='password'>password</label>
              <input type='password' name='password' placeholder='password' id='password' required autoComplete='off' value={user.password} onChange={handleInput} />

              <br />

              <button type='submit'>Register now</button>

            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
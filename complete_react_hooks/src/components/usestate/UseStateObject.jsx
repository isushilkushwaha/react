import React, { useState } from "react";

const UseStateObject = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleInput = (event) => {
    const name = event.target.name;

    const value = event.target.value;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    
      
        <div>
          <h2>Register</h2>
          <div>
            <form>
              <div>
                <input
                  type="text"
                  name="username"
                  placeholder="Name"
                  value={formData.username}
                  onChange={handleInput}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInput}
                />
              </div>

              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInput}
                />
              </div>
              <div>
                <input
                  type="password"
                  name="confirm_password"
                  placeholder="confirm-password"
                  value={formData.confirm_password}
                  onChange={handleInput}
                />
              </div>
              <div>
                <button>Create Account</button>
              </div>
            </form>
            <div>
              <p>{`My name is ${formData.username} and email is ${formData.email}`}</p>
            </div>
          </div>
        </div>
      
    
  );
};



export default UseStateObject;
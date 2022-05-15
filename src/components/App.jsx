import React, { useState } from "react";

function App() {

  const [hover, setHover] = useState(false)
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  const [contactHeading, setContactHeading] = useState({
    fNameHeading: "",
    lNameHeading: "",
    emailHeading: ""
  });

  function handleChange (e) {
    
    const {name, value} = e.target;

    setContact( (prevValue) => {
      return{
        ...prevValue,
        [name]: value
      }
    })
  }

  return (
    <div className="container">
      <h1>
        Hello {contactHeading.fNameHeading} {contactHeading.lNameHeading}
      </h1>
      <p>{contactHeading.emailHeading}</p>
      <form onSubmit={(e)=> e.preventDefault()}>
        <input name="fName" placeholder="First Name" value={contact.fName} onChange={handleChange}/>
        <input name="lName" placeholder="Last Name" value={contact.lName} onChange={handleChange}/>
        <input name="email" placeholder="Email" value={contact.email} onChange={handleChange}/>
        <button 
          onClick={() => 
            setContactHeading({
              fNameHeading: contact.fName, 
              lNameHeading: contact.lName, 
              emailHeading: contact.email}) + 
            setContact({
              fName: "", 
              lName: "", 
              email: ""})}
          style={{background: hover ? "black" : "white"}}
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
        >Submit</button>
      </form>
    </div>
  );
}

export default App;

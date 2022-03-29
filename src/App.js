import React, { useState} from 'react';

import './App.css';

import TeamForm from './Form';

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {
const [team, setTeam] = useState([]);
const [values, setValues] = useState({name: "", email: "", role: ""})
const [formError, setFormError] = useState("");

const onSubmit = () => {

  const newMember = {
    name: values.name.trim(),
    email: values.email.trim(),
    role: values.role
  }

  if (!newMember.name || !newMember.email || !newMember.role) {
    setFormError("Enter All Data For All Fields!");
    return;
  }

  setTeam([values, ...team]);
  setValues({name: "", email: "", role: ""});
  setFormError('')
}

const onChange = (name, value) => {
  setValues({...values, [name]: value})
}

  return (
    <div className="App">
      <h1>Team Builder</h1>
      { formError && <p className='error'>{formError}</p> }
      <TeamForm
        values={values}
        update={onChange}
        submit={onSubmit}
      />
      {team.map((member, idx)=> {
        return (
          <div key={idx}>
            {member.name}, {member.email}, {member.role}
          </div>
        )
      })}
    </div>
  );
}

export default App;

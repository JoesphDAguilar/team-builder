import React, {useState} from 'react';

import logo from './logo.svg';
import './App.css';

import TeamForm from './Form';

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {
const [team, setTeam] = useState([]);

const [formValues, setFormValues] = useState(initialFormValues);
const [formError, setFormError] = useState("");

const updateForm = (inputName, inputValue) => {
  setFormValues({...formValues, [inputName]: inputValue});
}

const submitForm = () => {
  const newMember = {
    name: formValues.name.trim(),
    email: formValues.email.trim(),
    role: formValues.role
  }

  if (!newMember.name || !newMember.email || !newMember.role) {
    setFormError('Enter All Fields!');
    return;
  }
}



  return (
    <div className="App">
      <h1>Team Builder</h1>
      <TeamForm
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
    </div>
  );
}

export default App;

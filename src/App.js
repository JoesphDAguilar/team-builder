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




  return (
    <div className="App">
      <h1>Team Builder</h1>
      <TeamForm
        values={formValues}
      />
    </div>
  );
}

export default App;

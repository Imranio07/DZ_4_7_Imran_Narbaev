import { useState } from "react";
import './index.css';

export default function App() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  const [messageForName, setMessageForName] = useState('');
  const [messageForNumber, setMessageForNumber] = useState('');
  const [messageForEmail, setMessageForEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
      setMessageForName(`Your name is ${firstName}`);
      setMessageForEmail(`Your Email ${email}`);
      setMessageForNumber(`Your phone Number  ${number}`);

  };

  return (
    <form>
      <div>
        <label>
          ФИО: <br/>
          <input class="register" value={firstName} onChange={e => setFirstName(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Number:
            <br/>
          <input class="register"
              type="number"
              name="number"
              value={number} onChange={e => setNumber(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          email: <br/>
          <input class="register"
              type="email"
              name="email"
              value={email} onChange={e => setEmail(e.target.value)}
          />
        </label>
      </div>
      <input class="submit"
        type="submit"
        value="Submit"
        onClick={handleSubmit}
      />
      <p class="output">{messageForName}</p>
        <p class="output">{messageForNumber}</p>
        <p class="output">{messageForEmail}</p>
    </form>
  );
}
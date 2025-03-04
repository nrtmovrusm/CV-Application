import React, {useState, useRef, useEffect} from 'react';
import HeadingView from './HeadingView';
import EduForm from './EduForm';
import PracticalExpForm from './PracticalExpForm';

function CVCreator() {
  const [name, setName] = useState("Michael Scott");
  const [email, setEmail] = useState("michael.scott@dundermifflin.com");
  const [number, setNumber] = useState("1-800-WORLDBEST");
  const [activeSection, setActiveSection] = useState(-1);
  const [lastFocus, setLastFocus] = useState('');

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const numberInputRef = useRef();

  useEffect(() => {
    if (lastFocus === 'name' && nameInputRef.current) {
      nameInputRef.current.focus();
    } else if (lastFocus === 'number' && numberInputRef.current) {
      numberInputRef.current.focus();
    } else if (lastFocus === 'email' && emailInputRef.current) {
      emailInputRef.current.focus();
    }
  })

  function HeadingForm() {
    return (
      <section className='editHeader'>
      <label htmlFor='name'>
      Name: <input id={name} value={name} ref={nameInputRef} onChange={e => {
        setName(e.target.value);
        setLastFocus('name');
      }}/>
    </label>
    <label htmlFor='email'>
      E-mail: <input id={email} value={email} ref={emailInputRef} onChange={e => {
        setEmail(e.target.value);
        setLastFocus('email');}}/>
    </label>
    <label htmlFor='number'>
      Number: <input id={number} value={number} ref={numberInputRef} onChange={e => {
        setNumber(e.target.value);
        setLastFocus('number')}}/>
      </label>
    </section>
    )
  }

  return (
    <>
      <div class='headerSection'>
        <HeadingView name={name} email={email} number={number}/>
        {activeSection==='header' && <HeadingForm/>}
        <button className='editHeader' onClick={()=>{
          if (activeSection !== 'header') {
            setActiveSection('header')
          } else {
            setActiveSection(-5)
          }}}>
          {activeSection === 'header' ? 'Save' : 'Edit'}
        </button>
      </div>

      <EduForm/>

      <PracticalExpForm/>

    </>
  )
}

export default CVCreator;
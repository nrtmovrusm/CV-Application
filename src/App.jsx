import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  return (
    <div>
      <CVCreator/>
    </div>
  )
}

function CVCreator() {
  const [name, setName] = useState("John Snow");
  const [email, setEmail] = useState("iknownothing@gmail.com");
  const [number, setNumber] = useState("888-888-8888");
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
      <HeadingView name={name} email={email} number={number}/>
      {activeSection==='header' && <HeadingForm/>}
      <button className='edit' onClick={()=>{
        if (activeSection !== 'header') {
          setActiveSection('header')
        } else {
          setActiveSection(-5)
        }}}>
        {activeSection === 'header' ? 'Save' : 'Edit'}
      </button>
      <HeadingView name={name} email={email} number={number}/>
    </>
  )
}

function HeadingView({name, email, number}) {
  return (
    <div className='CVView'>
      <h1>{name}</h1>
      <h2>{email} | {number}</h2>
    </div>
  )
}

export default App

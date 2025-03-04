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

      <EduForm/>

    </>
  )
}

function HeadingView({name, email, number}) {
  return (
    <div className='headingView'>
      <h1>{name}</h1>
      <h2>{email} | {number}</h2>
    </div>
  )
}

const initialEduExp = [
  { id: 0, school: 'University of Scranton', degree: 'Bachelor of Arts in Communication', startDate: '1995', endDate: '2000' },
];

function EduForm() {
  const [eduExp, setEduExp] = useState(initialEduExp);
  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [addExperienceActive, setAddExperienceActive] = useState(false);

  // Function to update educational experience at a given index
  const updateEduExp = (index, updatedEdu) => {
    setEduExp(prevEduExp => {
      const newEduExp = [...prevEduExp];
      newEduExp[index] = { ...newEduExp[index], ...updatedEdu }; // Update the item at the given index
      return newEduExp;
    });
  };

  return (
    <>
      <EduView eduExp={eduExp} setEduExp={setEduExp} updateEduExp={updateEduExp}/>
      
      {addExperienceActive && 
        <>
          <form>
            <label>
              School:
              <input value={school} onChange={e => setSchool(e.target.value)} />
            </label>
            <label>
              Degree:
              <input value={degree} onChange={e => setDegree(e.target.value)} />
            </label>
            <label>
              Start Date:
              <input value={startDate} onChange={e => setStartDate(e.target.value)} />
            </label>
            <label>
              End Date:
              <input value={endDate} onChange={e => setEndDate(e.target.value)} />
            </label>
          </form>

          <button onClick={() => {
            setEduExp([
              ...eduExp,
              { id: eduExp.length, school, degree, startDate, endDate }
            ]);
            setSchool('');
            setDegree('');
            setStartDate('');
            setEndDate('');
          }}>Add New Experience</button>
        </>
      }

      <button onClick={() => {
        setAddExperienceActive(prevState => {
          const newState = !prevState;
          console.log(newState);
          return newState;
        })
      }}>{addExperienceActive ? 'Done Adding Experiences' : 'Add Experiences+'}</button>
    </>
  );
}

function EduView({eduExp, setEduExp, updateEduExp}) {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <h2>EDUCATIONAL EXPERIENCES</h2>
      {eduExp.map((edu, index) => (
        <div key={edu.id}>
          <h3>{edu.school}</h3>
          <strong>{edu.degree}</strong>, <i>({edu.startDate} - {edu.endDate})</i>
          {activeIndex === index &&
            <>
              <form>
                <label>
                  School Name: <input value={edu.school} onChange={(e) => updateEduExp(index, { school: e.target.value })}/>
                </label>
                <label>
                  Degree: <input value={edu.degree} onChange={(e) => updateEduExp(index, { degree: e.target.value })}/>
                </label>
                <label>
                  Start Date: <input value={edu.startDate} onChange={(e) => updateEduExp(index, { startDate: e.target.value })}/>
                </label>
                <label>
                  End Date: <input value={edu.endDate} onChange={(e) => updateEduExp(index, { endDate: e.target.value })}/>
                </label>
              </form>
            </>
          }
          <button key={edu.id} onClick={() => {
            setActiveIndex(activeIndex === index ? null : index);
          }}> {activeIndex === index ? 'Done' : 'Edit'}</button>

          <button onClick={() => {
            setEduExp(eduExp.filter(exp => exp.id != edu.id))
          }}>Delete</button>
        </div>
      ))}
    </>
  )
}

export default App

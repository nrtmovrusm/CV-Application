import React, { useState } from 'react';
import EduView from './EduView';

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

      <button className='moreExp' onClick={() => {
        setAddExperienceActive(prevState => {
          const newState = !prevState;
          return newState;
        })
      }}>{addExperienceActive ? 'Done Adding Experiences' : 'Add Experiences+'}</button>
    </>
  );
}

export default EduForm;
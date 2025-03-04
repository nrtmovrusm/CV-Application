import React, {useState} from 'react';

function EduView({eduExp, setEduExp, updateEduExp}) {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <h2>EDUCATIONAL EXPERIENCES</h2>
      {eduExp.map((edu, index) => (
        <div key={edu.id} className='eduExperiences'>
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

export default EduView;
import React, { useState } from 'react';

function PracExpView({pracExp, setPracExp, updatePracExp}) {
    const [activeIndex, setActiveIndex] = useState(null);
  
    return (
      <>
        <h2>WORK EXPERIENCES</h2>
        {pracExp.map((prac, index) => (
          <div key={prac.id} className='workExpSection'>
            <h3>{prac.position}, {prac.company}</h3>
            <i>{prac.city}, {prac.state}</i>
            <i>({prac.startDate} - {prac.endDate})</i>
            <li>{prac.mainResponse}</li>
            {activeIndex === index &&
              <>
                <form>
                  <label>
                    Position: <input value={prac.position} onChange={(e) => updatePracExp(index, { position: e.target.value })}/>
                  </label>
                  <label>
                    Company: <input value={prac.company} onChange={(e) => updatePracExp(index, { company: e.target.value })}/>
                  </label>
                  <label>
                    City: <input value={prac.city} onChange={(e) => updatePracExp(index, { city: e.target.value })}/>
                  </label>
                  <label>
                    State: <input value={prac.state} onChange={(e) => updatePracExp(index, { state: e.target.value })}/>
                  </label>
                  <label>
                    Start Date: <input value={prac.startDate} onChange={(e) => updatePracExp(index, { startDate: e.target.value })}/>
                  </label>
                  <label>
                    End Date: <input value={prac.endDate} onChange={(e) => updatePracExp(index, { endDate: e.target.value })}/>
                  </label>
                  <label>
                    Main Responsibilities: <input value={prac.mainResponse} onChange={(e) => updatePracExp(index, { mainResponse: e.target.value })}/>
                  </label>
                </form>
              </>
            }
            <div className='workBtns'>
              <button className='editWorkBtn' key={prac.id} onClick={() => {
                setActiveIndex(activeIndex === index ? null : index);
              }}> {activeIndex === index ? 'Done' : 'Edit'}</button>
    
              <button className='deleteWorkBtn' onClick={() => {
                setPracExp(pracExp.filter(exp => exp.id != prac.id))
              }}>Delete</button>
            </div>
          </div>
        ))}
      </>
    )
}

export default PracExpView;
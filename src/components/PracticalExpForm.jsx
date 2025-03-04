import React, { useState } from 'react';
import PracExpView from './PracExpView';

const initialPracExp = [
    {
        id: 0,
        position: 'Regional Manager', 
        company: 'Dunder Mifflin Scranton', 
        city: 'Scranton', 
        state: 'PA', 
        startDate: '2001', 
        endDate: 'present',
        mainResponse: 'Led the Scranton branch of Dunder Mifflin for over 20 years, consistently achieving top sales rankings in the region despite the occasional "hiccup" in office dynamics.'
    }
]

function PracticalExpForm() {
    const [pracExp, setPracExp] = useState(initialPracExp);
    const [position, setPosition] = useState('');
    const [company, setCompany] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [mainResponse, setMainResponse] = useState('');
    const [addExperienceActive, setAddExperienceActive] = useState(false);

    // Function to update educational experience at a given index
    const updatePracExp = (index, updatedPrac) => {
        setPracExp(prevPracExp => {
        const newPracExp = [...prevPracExp];
        newPracExp[index] = { ...newPracExp[index], ...updatedPrac }; // Update the item at the given index
        return newPracExp;
        });
    };

    return (
        <>
        <PracExpView pracExp={pracExp} setPracExp={setPracExp} updatePracExp={updatePracExp}/>
        
        {addExperienceActive && 
            <>
            <form>
                <label>
                Position:
                <input value={position} onChange={e => setPosition(e.target.value)} />
                </label>
                <label>
                Company:
                <input value={company} onChange={e => setCompany(e.target.value)} />
                </label>
                <label>
                City:
                <input value={city} onChange={e => setCity(e.target.value)} />
                </label>
                <label>
                State:
                <input value={state} onChange={e => setState(e.target.value)} />
                </label>
                <label>
                Start Date:
                <input value={startDate} onChange={e => setStartDate(e.target.value)} />
                </label>
                <label>
                End Date:
                <input value={endDate} onChange={e => setEndDate(e.target.value)} />
                </label>
                <label>
                Main Responsibilities:
                <input text={mainResponse} onChange={e => setMainResponse(e.target.value)} />
                </label>
            </form>

            <button onClick={() => {
                setPracExp([
                ...pracExp,
                { id: pracExp.length, position, company, city, state, startDate, endDate, mainResponse }
                ]);
                setPosition('');
                setCompany('');
                setCity('');
                setState('');
                setStartDate('');
                setEndDate('');
                setMainResponse('');
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

export default PracticalExpForm;
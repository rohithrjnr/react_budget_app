import React, {useContext, useState } from 'react';
import {AppContext } from '../context/AppContext';

const Budget =()=>{
    const {budget} = useContext(AppContext);
    const [newBudget, setNewBudget]= useState(budget);
    const handleBudgetChange =(event) => {
        setNewBudget(event.target.value);
    }
if (newBudget>=2000000 || newBudget<900){
    alert("This is not a good budget");
}
    return (
        <div className='alert alert-secondary'>
            <span>Budget: </span>
            <input type='number' step='10' value={newBudget} onChange={handleBudgetChange}></input>
        </div>

    );
}
export default Budget;


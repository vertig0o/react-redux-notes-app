import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/notes/notesSlice';
import { nanoid } from '@reduxjs/toolkit';

const checkedSvg = <div className='center-block'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 30.000001"  preserveAspectRatio="xMidYMid meet" version="1.0"><defs><path d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656 " clipRule="nonzero" fill="white"></path></defs><path fill="white" d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125 " fillOpacity="1" fillRule="nonzero"></path></svg></div>;

function Form() {
    const [noteColor, setNoteColor] = useState("");
    const [note, setNote] = useState("");
    const [isChecked, setIsChecked] = useState(null);
    const [alertNote, setAlertNote] = useState(null);
    const [alertColor, setAlertColor] = useState(null);

    const handleChoose = (color) => {
        setNoteColor(color);
        setIsChecked(color);
    }
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(note.trim() === '') {
            setAlertNote('Please enter a note!'); 
            return;
        }
        if(noteColor === ''){
            setAlertColor('Please select a color!');
            return;
        }
        await dispatch(addNote({id: nanoid(), note, noteColor}));
        setNote('');
        setAlertNote(null);
        setAlertColor(null);
    }
    
    return (
        
        <div className='mt-4 col-lg-5 col-md-7 col-sm-9 mx-auto search'>
            <textarea rows={5} className='col-12 fw-light' placeholder='Enter your note here...' value={note} onChange={(e) => setNote(e.target.value)}></textarea>
            <div className='d-flex justify-content-between'>
                <div className='ms-3 mb-3 wrap button-container'>
                    <button className='btn-blue hoverOp' onClick={() => handleChoose("#0074e4")}>{isChecked === '#0074e4' ? (<span>{checkedSvg}</span>) : ("\u00a0") }</button>
                    <button className='btn-red hoverOp' onClick={() => handleChoose("#e61717")}>{isChecked === '#e61717' ? (<span>{checkedSvg}</span>) : ("\u00a0") }</button>
                    <button className='btn-purple hoverOp' onClick={() => handleChoose("#a44ec3")}>{isChecked === '#a44ec3' ? (<span>{checkedSvg}</span>) : ("\u00a0") }</button>
                    <button className='btn-yellow hoverOp' onClick={() => handleChoose("#c09731")}>{isChecked === '#c09731' ? (<span>{checkedSvg}</span>) : ("\u00a0") }</button>
                    <button className='btn-green hoverOp' onClick={() => handleChoose("#1db954")}>{isChecked === '#1db954' ? (<span>{checkedSvg}</span>) : ("\u00a0") }</button>
                </div>
                <form onSubmit={handleSubmit}>
                <div className='me-3 wrap'>
                    <button type='submit' className='textAreaBtn hoverOp text-dark center-block fw-light'>Add</button>
                </div>
                </form>
            </div>

            {alertNote && <div className='alert alert-danger' role="alert">{alertNote}</div>}
            {alertColor && <div className='alert alert-danger' role="alert">{alertColor}</div>}

        </div>
      
    )
}

export default Form
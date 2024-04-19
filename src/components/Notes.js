import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeNote } from '../redux/notes/notesSlice';

function Notes() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.items);
  const filtered = useSelector((state) => state.notes.filtered);

  const onClick = async (id) => {
    await dispatch(removeNote(id));
  };

  return (
    <>
      {filtered && filtered.length > 0 ? (
        filtered.map((i) => (
          <div key={i.id} className='mt-4 col-lg-4 col-md-7 col-sm-9 col-xs-12 mx-auto search' style={{ backgroundColor: i.noteColor }}>
            <div className='d-flex justify-content-between'>
              <div className='ms-3 m-3 text-light'>
                {i.note}
              </div>
              <div>
                <button onClick={() => onClick(i.id)} className="buttonSpecs me-3 mt-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        notes.map((i) => (
          <div key={i.id} className='mt-4 col-lg-4 col-md-7 col-sm-8 mx-auto search' style={{ backgroundColor: i.noteColor }}>
            <div className='d-flex justify-content-between'>
              <div className='ms-3 m-3 text-light'>
                {i.note}
              </div>
              <div>
                {/* Button for editing option */}
                {/* <button className="buttonSpecs mt-3 me-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z" /></svg>
                </button> */} 
                <button onClick={() => onClick(i.id)} className="buttonSpecs mt-3 me-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
                  </svg>
                </button>
              </div>
            </div>

          </div>
        ))
      )}
    </>
  );
}

export default Notes;

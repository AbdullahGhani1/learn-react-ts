import { produce } from 'immer';
import { useState } from 'react';

const Bugs = () => {
  const [bugs, setBugs] = useState([
    { id: 1, title: 'Bug 1', fixed: false },
    { id: 2, title: 'Bug 2', fixed: false },
  ]);
  const handleBugs = () => {
    // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
    setBugs(
      produce((draft) => {
        draft[0].fixed = true;
      })
    );
  };
  return (
    <div className="row" id="bugs">
      {bugs.map((bug) => {
        return (
          <div className="col-md-4" key={bug.id}>
            <div className="card mx-4 my-2">
              <div className="card-body">
                <h5 className="card-title">{bug.title}</h5>
                <p className="card-text">{bug.fixed ? 'Fixed' : 'New'}</p>
              </div>
            </div>
          </div>
        );
      })}
      <button
        className="btn btn-secondary col-3 mx-4 my-2"
        onClick={handleBugs}
      >
        Find Bug
      </button>
    </div>
  );
};
export default Bugs;

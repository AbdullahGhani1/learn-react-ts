import { useState } from 'react';
import Button from './Button';
const UpdatingObject = () => {
  const [drink, setDrink] = useState({
    title: 'Sprite',
    price: 120,
  });
  const [tags, setTags] = useState(['happy', 'sweet']);
  const handleObject = () => {
    setDrink((prevState) => {
      return {
        ...prevState,
        title: 'Coke',
      };
    });
    console.log(drink.title);
  };
  const handleArray = () => {
    // Add
    setTags([...tags, 'salty']);
    // remove
    setTags((prevState) => {
      return prevState.filter((tag) => tag !== 'sweet');
    });
    // update
    setTags((prevState) => {
      return prevState.map((tag) => {
        return tag === 'happy' ? 'sad' : tag;
      });
    });
  };
  return (
    <div className="row">
      <div
        className="card card-body bg-light mt-5 mx-5 col-md-4"
        id="updatingObject"
      >
        <button className="btn btn-warning" onClick={handleObject}>
          Update Objects
        </button>
      </div>
      <div
        className="card card-body bg-light mt-5 mx-5 col-md-4"
        id="updatingObject"
      >
        {tags.map((tag, index) => {
          return <p key={index}>{tag}</p>;
        })}
        <Button color="danger" onClick={handleArray}>
          Update Array
        </Button>
      </div>
    </div>
  );
};
export default UpdatingObject;

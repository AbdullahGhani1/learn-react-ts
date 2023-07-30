import { useState } from 'react';
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
    <div className="card card-body bg-light mt-5 mx-5">
      <button className="btn btn-warning" onClick={handleObject}>
        Update Objects
      </button>
      {tags.map((tag, index) => {
        return <p key={index}>{tag}</p>;
      })}

      <p></p>
      <button className="btn btn-warning" onClick={handleArray}>
        Update Array
      </button>
    </div>
  );
};
export default UpdatingObject;

import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
const Like = () => {
  const [isLike, setLike] = useState(false);
  const handleLike = () => {
    setLike(!isLike);
  };
  return (
    <>
      {isLike === true ? (
        <AiFillHeart color="#ff6b81" size={30} onClick={handleLike} />
      ) : (
        <AiOutlineHeart onClick={handleLike} size={30} />
      )}
    </>
  );
};
export default Like;

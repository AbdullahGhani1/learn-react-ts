import { useState } from 'react';
import Button from './Button';

interface Props {
  children: string;
  maxChars?: number;
}
const ExpandableText = ({ children, maxChars = 10 }: Props) => {
  const [isExpended, setIsExpended] = useState(false);
  const handleToggle = () => {
    setIsExpended(!isExpended);
  };
  return (
    <p id="expandableText">
      {isExpended || children.length <= maxChars
        ? children
        : children.substring(0, maxChars) + '...'}
      {children.length > maxChars && (
        <Button onClick={handleToggle} color="success">
          {isExpended ? 'Less' : 'More'}
        </Button>
      )}
    </p>
  );
};
export default ExpandableText;

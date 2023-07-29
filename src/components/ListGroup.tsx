import React from 'react';
import Like from './Like';
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup(props: Props) {
  const { items, heading, onSelectItem } = props;
  const [selectedIndex, setSelectedIndex] = React.useState(-1);
  return (
    <React.Fragment>
      <h1 className="text-center">{heading}</h1>

      {items.length === 0 && <p>No Cities Founds</p>}
      <ul className="list-group">
        {items.map((item, index) => {
          return (
            <li
              key={index}
              className={
                selectedIndex === index
                  ? `list-group-item active`
                  : `list-group-item`
              }
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item);
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {item}
                <Like />
              </div>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
}

export default ListGroup;

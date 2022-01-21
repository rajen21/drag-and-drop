import React, {useState} from 'react';

const ITEMS = [
  { text: 'first', text_id: 1 },
  { text: 'second', text_id: 2 },
  { text: 'third', text_id: 3 },
  { text: 'fourth', text_id: 4 },
  { text: 'fifth', text_id: 5 },
  { text: 'sixth', text_id: 6 },
  { text: 'seventh', text_id: 7 },
  { text: 'eight', text_id: 8 },
]
const DND = () => {
  const [list, setList] = useState([]);
  const [drag, setDrag] = useState({});
  const [dragIndex, setDragIndex] = useState(null);

  const onDragStart = (data) => () => {
    setDrag(data)
  }
  const onDragOver = (data) => {
    data.preventDefault();
  }
  const onDrop = (data) => {
    if(!drag.text_id) return;
    const innerDrop = parseInt(data.target.id) + 1;
    let list_clone = list;
    if(innerDrop) {
      const beforeInnerDropVal = list_clone.slice(0, innerDrop);
      beforeInnerDropVal.push(drag);
      const afterInnerDropVal = list_clone.slice(innerDrop, list.length);
      setList([...beforeInnerDropVal, ...afterInnerDropVal]);
    } else {
      // const list_clone = [...list];
      list_clone.push(drag);
      setList(list_clone);
    }
    setDrag({});
    setDragIndex(null);
  }

  const onInnerDragStart = (data) => () => {
    setDrag(data);
    const index = list.indexOf(data);
    setDragIndex(index);
  };
  const onInnerDragLeave = () => {
    const list_clone = list;
    list_clone.splice(dragIndex, 1);
    setList(list_clone);
    // setDragIndex(null)
  };

  const getElem = (id) => {
    switch (id) {
      case 1:
        return (<div>Hello 1</div>)
      case 2:
        return (<div>Hello 2</div>)
      case 3:
        return (<div>Hello 3</div>)
      case 4:
        return (<div>Hello 4</div>)
      default: return (<div>Default</div>)
    }
  };

  return (
    <div className="lists">
      <div className="list" >
        {ITEMS.map((elem) => (
          <div className="list-item" draggable onDragStart={onDragStart(elem)} key={elem.text_id}>{elem.text}</div>
        ))}
      </div>
      <div
        className="list list2"
        onDragOver={onDragOver}
        onDrop={onDrop}
      >
        {list.map((elem, index) => (
          <div
            className="list-item list-item2"
            id={index}
            draggable
            onDragStart={onInnerDragStart(elem)}
            // onDragEnd={onInnerDragEnd}
            onDragLeave={onInnerDragLeave}
            onDrop={onDrop}
            key={index}
          >
            {elem.text}
          </div>
        ))}
      </div>
    </div>
  )
}

export default DND;

import React from "react";
import { useDrag } from 'react-dnd';

const Picture = ({ id, url, onDragOut, key }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: ((monitor) => ({
      isDragging: !!monitor.isDragging(),
    })),
  }));
  // const onCLick = (data) => {
  //   console.log('hii', data);
  //   // delete data;
  // };
  return <img
    ref={drag}
    src={url}
    onDragLeaveCapture={onDragOut}
    key={key}
    // onClick={onClick}
    width="150px"
    style={{ border: isDragging ? "5px solid pink" : "0px" }} />
}

export default Picture;

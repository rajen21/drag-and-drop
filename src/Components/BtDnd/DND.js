import React, { useState } from "react";
import Picture from "./Picture";
import {useDrag, useDrop} from "react-dnd";
import "../../App.css";

const PictureList = [
  {
    id: 1,
    url: "https://previews.123rf.com/images/kues/kues1501/kues150101591/35048228-young-cool-black-man-thinking.jpg",
  },
  {
    id: 2,
    url: "https://img.favpng.com/11/4/12/stock-photography-businessperson-can-stock-photo-royalty-free-png-favpng-pDHxH9z4e2thFTyW6QzDE4m6C.jpg",
  },
  {
    id: 3,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPHCx18c6NXY4gm7RiV3cWZVxBAA15xCrDgA&usqp=CAU",
  }
]

const DND = () => {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    setBoard((board) => [...board, pictureList[0]]);
  }
  const removeImage = (data) => {
    const filteredBoard = board.filter((elem) => data.target.src !== elem.url);
    setBoard([...filteredBoard]);
  }
  return (
    <div className="d-flex">
      <div className="Pictures">
        {PictureList.map((picture, index) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
      </div>
      <div className="Board" ref={drop}>
        {board.map((picture, index) => {
          return <Picture url={picture.url} onDragOut={removeImage} id={picture.id} />
        })}
      </div>
    </div>
  )
}

export default DND;

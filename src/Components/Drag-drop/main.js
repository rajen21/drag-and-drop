import React, { useState, useEffect } from "react";

const DND = () => {
  const [items, setItems] = useState([
    { text: 'first', text_id: 1 },
    { text: 'second', text_id: 2 },
    { text: 'third', text_id: 3 },
    { text: 'fourth', text_id: 4 },
  ]);
  // const [selectedItem, setSelectedItem] = useState({});
  let list2 = [];
  let aa = '';

  const temp = (elem) => {
    console.log('e', elem)
    aa = elem;
    // return elem;
  }

  useEffect(() => {
    const list_items = document.querySelectorAll('.list-item');
    const lists = document.querySelectorAll('.list');
    let draggedItem = null;

      list_items.forEach((elem) => {
        elem.addEventListener('dragstart', () => {
          draggedItem = elem;
        });

        elem.addEventListener('dragend', function () {
          setTimeout(() => {
            draggedItem.style.display = 'block';
            draggedItem = null;
          }, 0);
        });

        lists.forEach((list) => {
          list.addEventListener('dragover', (e) => {
            e.preventDefault();
          });
          // list.addEventListener('dragenter', (e) => {
          //   e.preventDefault();
          //   list.style.background = 'rgba(0, 0, 0, 0.2)';
          // });
          // list.addEventListener('dragleave', (e) => {
          //   list.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
          // });
          list.addEventListener('drop',  (e) => {
            list.append(draggedItem);
            // list.innerHTML = draggedItem;
            list.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
          });
        });
      });
  }, []);

  return (
    <div className="lists">
      <h2>Drag and Drop</h2>
        <div className="list">
          {items.map((elem, index) => (
            <div className="list-item" draggable="true" key={index}>{elem.text}</div>
          ))}
        </div>
      <div className="list">
        {/*{list2.map((elem, index) => (*/}
        {/*  <div className="list-item" draggable="true" key={index}>{elem.text}</div>*/}
        {/*))}*/}
      </div>
    </div>
  )
}

export default DND;

import React from 'react';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
// import Drag_Drop from './Components/DnD/Drag_Drop';
// import BtDND from './Components/Beatfl_DND/Dnd_bt';
// import DND from "./Components/Drag-drop/main";
import './App.css';
import { DndProvider } from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import DragAndDrop from './Components/BtDnd/DND';
import DND from './Components/DragAndDrop/DND';

function App() {
  return (
    <div className="App">
      <DND />
    </div>
  );
}

export default App;


// <BrowserRouter>
//   <header className="App-header">
//     <Routes>
//       <Route exact path="/bt-dnd" element={<BtDND />} />
//     </Routes>
//   </header>
//   <Routes>
//     <Route exact path="/dnd" element={<Drag_Drop />} />
//     <Route exact path="/" element={<DND />} />
//   </Routes>
// </BrowserRouter>
{/*<Drag_Drop />*/}
import { DndProvider } from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import DragAndDrop from './DND';

const BtDnd = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <DragAndDrop />
      </div>
    </DndProvider>
  )
}

export default BtDnd;

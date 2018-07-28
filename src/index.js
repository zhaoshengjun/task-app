import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import "@atlaskit/css-reset";
import { DragDropContext } from "react-beautiful-dnd";
import initialData from "./initial-data";
import Column from "./Column";

class App extends React.Component {
  state = initialData;

  onDragEnd = result => {};
  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {this.state.columnOder.map(columnId => {
          const column = this.state.columns[columnId];
          const tasks = column.taskIds.map(id => this.state.tasks[id]);

          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </DragDropContext>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

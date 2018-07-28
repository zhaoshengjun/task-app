import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import initialData from "./initial-data";

class App extends React.Component {
    state = initialData;

    render() {
        return this.state.columnOder.map(columnId => {
            const column = this.state.columns[columnId];
            const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

            return column.title;
        })
    }
}

ReactDOM.render( < App / > , document.getElementById('root'));
registerServiceWorker();
import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  border: 3px solid lightgrey;
  border-radius: 50%;
  background: white;
  padding: 8px;
  margin-bottom: 8px;
  display: flex;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDragging ? "lightgreen" : "white")};
  &:focus {
    outline: none;
    border-color: red;
  }
`;

export default class Task extends React.Component {
  render() {
    const isDragDisabled = this.props.task.id === "task-1";
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            innerRef={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            {this.props.task.content[0]}
          </Container>
        )}
      </Draggable>
    );
  }
}

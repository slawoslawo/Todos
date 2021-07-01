import React from "react";
import { useState } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { Todo} from "../../../app/Models/todo";
import { useStore } from "../../../app/stores/store";


export default function TodoDetails() {

  const {todoStore} = useStore();
  const{selectedTodo: todo, openForm, cancelSelectedTodo} = todoStore;  

  if (!todo) return <LoadingComponent />;
  

  return(
    <Card fluid>
      <Card.Content>
        <Card.Header>
        {todo.title}
        </Card.Header>
        <Card.Meta>
        <span>{todo.date}</span>
        </Card.Meta>
        <Card.Description>
        {todo.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
          <Button.Group widths='1'>
            <Button onClick={() => openForm(todo.id)} basic color='grey' content='Edit'></Button>
            <Button onClick={cancelSelectedTodo} basic color='black' content='Cancel'></Button>

          </Button.Group>        
      </Card.Content>
    </Card>
  )

}
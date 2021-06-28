import { observer } from "mobx-react-lite";
import React, { SyntheticEvent, useState } from "react";
import { act } from "react-dom/test-utils";
import { Button, Item, Label, Segment } from "semantic-ui-react";

import { useStore } from "../../../app/stores/store";


export default observer ( function TodoList() {
  const {todoStore} = useStore();
  const {deleteTodo, todosByDate, loading,  } = todoStore
  const [target, setTarget] = useState('');
  function handleTodoDelete(event: SyntheticEvent<HTMLButtonElement> , id:string) {

    setTarget(event.currentTarget.name);
    deleteTodo(id);
  }


  return (
    <Segment>
      <Item.Group divided>
        {todosByDate.map(todo => (
          <Item key={todo.id}>
              <Item.Content>
                <Item.Header as='a'>
                  {todo.title}
                </Item.Header>
                <Item.Meta>
                  {todo.date}
                </Item.Meta>
                <Item.Description>
                  <div>
                    {todo.description}
                  </div>
            
                </Item.Description>
                <Item.Extra>
                  <Button onClick={() => todoStore.selectTodo(todo.id)}  floated='right' content='View' color='grey'>

                  </Button>

                  <Button 
                  name={todo.id}
                  loading={loading && target=== todo.id} onClick={(event) =>
                     handleTodoDelete(event, todo.id)}  floated='right' content='Delete' color='black'>

</Button>
                  <Label basic content={todo.category}/>
                </Item.Extra>
              </Item.Content>
          </Item>
        ))}
      </Item.Group>     
    </Segment>
  )
})
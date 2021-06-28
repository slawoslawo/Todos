import { observer } from "mobx-react-lite";
import React, { ChangeEvent } from "react";
import { useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Todo } from "../../../app/Models/todo";
import { useStore } from "../../../app/stores/store";



export default observer( function TodoForm() {

  const {todoStore} = useStore();
  const {selectedTodo,closeForm, createTodo,updateTodo,loading} = todoStore;
  const initialState = selectedTodo ?? {
    id: '',
    title: '',
    category: '',
    description: '',
    date: '',

  }
  const [todo, setTodo] = useState(initialState);

  function handleSubmit() {
    todo.id ? updateTodo(todo) : createTodo(todo);    
  }
  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const{name, value} = event.target;
    setTodo({...todo, [name]: value})
  }

  return(
    <Segment clearing>
      <Form onSubmit={handleSubmit} autoComplete='off'>
        <Form.Input placeholder='Title' value={todo.title} name='title' 
        onChange={handleInputChange} />
        <Form.TextArea placeholder='Description' value={todo.description} name='description' 
        onChange={handleInputChange}/>
        <Form.Input placeholder='Category' value={todo.category} name='category' 
        onChange={handleInputChange}/>
        <Form.Input type='date' placeholder='Date' value={todo.date} name='date' 
        onChange={handleInputChange}/>
        <Button loading={loading} floated='right' color='blue' type='submit' content='Submit'/>
        <Button onClick={closeForm} floated='right' type='button' content='Cancel'/>
      </Form>
    </Segment>
  )
}) 
import React from "react";
import {Button, Container,  Menu } from "semantic-ui-react";
import { useStore } from "../stores/store";



export default function NavBar() {

  const {todoStore} = useStore();

  return(
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item header>
          
        </Menu.Item>
        <Menu.Item name='Todos'>

        </Menu.Item>
        <Menu.Item>
          <Button  onClick={() =>  todoStore.openForm()} color='grey'  content='Create Todo'></Button>
        </Menu.Item>
      </Container>

    </Menu>
  )
}
import { observer } from "mobx-react-lite";
import React from "react";
import { Grid } from "semantic-ui-react";

import { useStore } from "../../../app/stores/store";
import ActivityDetails from "../details/TodoDetails";
import ActivityForm from "../form/TodoForm";
import ActivityList from "./TodoList";



export default observer( function TodoDashboard() {

  const {todoStore} = useStore();
  const {selectedTodo, editMode} = todoStore;
  return (


    <Grid>
      <Grid.Column width='10'>
      <ActivityList  />
      </Grid.Column>
      <Grid.Column width='6'>
        {selectedTodo && !editMode &&
      <ActivityDetails 
 

      />}
      {editMode &&
      <ActivityForm  />}
      </Grid.Column>
    </Grid>
  )
})
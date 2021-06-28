import React, { useEffect} from 'react';
import { Container} from 'semantic-ui-react';

import NavBar from './NavBar';
import { Fragment } from 'react';
import TodoDashboard from '../../features/todos/dashboard/TodoDashboard';


import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {
  const {todoStore} = useStore();



  useEffect(() => {
    todoStore.loadTodos();
  },[todoStore])




  if(todoStore.loadingInitial) return <LoadingComponent content='Loading app'/>
  return (
    <Fragment>
        <NavBar ></NavBar>
        <Container style={{marginTop: '7em'}}>

          <TodoDashboard />
            
          </Container>
        
    </Fragment>
  );
}

export default observer(App);

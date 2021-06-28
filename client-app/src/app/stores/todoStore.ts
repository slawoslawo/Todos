import {  makeAutoObservable, runInAction} from "mobx"
import agent from "../api/agent";
import { Todo } from "../Models/todo";
import {v4 as uuid } from 'uuid';
import { act } from "react-dom/test-utils";

export default class TodoStore{

  todoRegistry = new Map<string, Todo>();
  selectedTodo: Todo | undefined = undefined;
  editMode = false;
  loading = false;
  loadingInitial = true;


  constructor() {
    makeAutoObservable(this)
  }

  get todosByDate() {
    return Array.from(this.todoRegistry.values()).sort((a, b) => Date.parse(a.date) -
    Date.parse(b.date));

  }

  loadTodos =async  () => {
    try {
      const todos = await agent.Todos.list();
      

        todos.forEach(todo => {
          todo.date = todo.date.split('T')[0];
          this.todoRegistry.set(todo.id, todo);
        })
        this.setLoadingInitial(false);
        
      
    } catch (error) {
      console.log(error)
      
        this.setLoadingInitial(false);
    
      

    }

  }
  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  }
  selectTodo  = (id: string) => {
    this.selectedTodo = this.todoRegistry.get(id);
    

  }
  cancelSelectedTodo =  () => {
 this.selectedTodo = undefined;
  }

  openForm = (id?: string)=> {
    id ? this.selectTodo(id) :this.cancelSelectedTodo();
    this.editMode = true;


  }
  closeForm = () => {
    this.editMode = false;
  }

  createTodo = async (todo: Todo) => {
      this.loading = true;
      todo.id = uuid();
      try {
        await agent.Todos.create(todo);
        runInAction(() => {
          this.todoRegistry.set(todo.id, todo);
          this.selectedTodo = todo;
          this.editMode = false;
          this.loading = false;
          
        })
        
      } catch (error) {

        console.log(error);
        runInAction(() => {
          this.loading = false;

        })
      }
  }
  updateTodo = async (todo:Todo ) => {
    this.loading = true;
    try {
      
      await agent.Todos.update(todo);
      runInAction(()=> {
      this.todoRegistry.set(todo.id, todo)
        this.selectedTodo = todo;
        this.editMode = false;
        this.loading = false;


      })

    } catch (error) {
      console.log(error)
      runInAction(() => {
        this.loading = false;
      })
    }
  }
  deleteTodo = async (id: string) => {
    this.loading = true;
    try {
      await agent.Todos.delete(id);
      runInAction(() => {
       this.todoRegistry.delete(id);
       if (this.selectedTodo?.id ===id) this.cancelSelectedTodo();
       this.loading = false;

      })
    } catch (error) {
      console.log(error)
      runInAction(() => {
        this.loading = false
      })
    }
  }
}

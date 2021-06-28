import axios, { AxiosResponse } from 'axios';
import { request } from 'http';
import { Todo } from '../Models/todo';

const sleep = (delay: number ) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
} 

axios.defaults.baseURL = 'http://localhost:5000/api';

axios.interceptors.response.use(async response => {
 try {
    await sleep(1000);
    return response;
  } catch (error) {
    console.log(error);
    return await Promise.reject(error);
  }
})

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T> (url: string) => axios.get<T>(url).then(responseBody),
  post: <T> (url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
  put: <T> (url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  del: <T> (url: string) => axios.delete<T>(url).then(responseBody),
}

const Todos = {
  list: () => requests.get<Todo[]>('/todos'),
  details: (id: string) => requests.get<Todo>(`/todos/${id}`),
  create: (todo: Todo) => requests.post<void>('/todos', todo),
  update: (todo: Todo) => requests.put<void>(`/todos/${todo.id}`,todo),
  delete: (id: string) => requests.del<void>(`/todos/${id}`)
}
const agent = {
  Todos 
}
export default agent;


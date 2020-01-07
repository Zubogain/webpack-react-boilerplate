const API = "https://jsonplaceholder.typicode.com";
const API_TODO = API + "/todos";

export function fetchTodoList() {
  return fetch(API_TODO).then(response => response.json());
}

export function getTodo(id) {
  return fetch(`${API_TODO}/${id}`).then(response => response.json());
}

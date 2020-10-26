export default class Todo {
  constructor(data) {
    this.id = data._id;
    this.decription = data.description

  }

  get Template() {
    return /*html*/`
  
    <div class="col-11 border rounded shadow my-2">
      <h5 class="text-white mt-1">${this.decription} <button class="text-white close mr-2 float-right" onclick="app.todoController.removeTodo('${this.id}')"><span>&times;</span></button></h5>
    </div>
  
    `
  }
}


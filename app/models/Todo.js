export default class Todo {
  constructor(data) {
    this.id = data._id;
    this.decription = data.description

  }

  get Template() {
    return /*html*/`
  
    <div class="col-11 border rounded shadow my-2">
    
      <h5 class="text-white mt-1">${this.decription} 
      
     

      <button class="text-white close mr-1 float-right" onclick="app.todoController.removeTodo('${this.id}')"><span>&times;</span></button>
      
      <div class="form-check float-right mr-2 mt-1">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1"></label>
    </div>
      
      </h5>
    </div>
  
    `
  }
}


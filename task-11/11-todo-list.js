const todoList =[{ 
  name: 'make dinner',dueDate:'2022-12-22'},{
  name: 'wash dishes',dueDate:'2022-12-22'
} ];
renderTodoList();
function renderTodoList() {
    let todoListHTML = '';

    for (let i =0; i< todoList.length ;i++){
      const todoObject = todoList[i];
     //const name = todoObject.name;
     // const dueDate = todoObject.dueDate;
     const { name , dueDate } = todoObject;
      //destructuring
      //Generating HTML
      const html = `
      <p>
      ${name} ${dueDate}
      
      <button onclick="
      todoList.splice(${i},1);
      renderTodoList();
      ">Delete</button>
      </p>
      `;
      todoListHTML += html;
    }
    console.log(todoListHTML);

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}
function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
  //console.log(name);
  todoList.push({name: name,dueDate: dueDate;);
  console.log(todoList);

  inputElement.value = '';
  renderTodoList();
}

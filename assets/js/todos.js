const existingTodos = JSON.parse(localStorage.getItem("todos")) || [];
const todoData = [];

const addTodo = (todoText) => {
  $("ul").append(
    `<li><span><i class="fa fa-trash"></i></span>${todoText}</li>`
  );
  todoData.push(todoText);
  localStorage.setItem("todos", JSON.stringify(todoData));
};

const deleteTodo = (index) => {
  todoData.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todoData));
};

// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

// Click on X to delete todo
$("ul").on("click", "span", function (event) {
  $(this)
    .parent()
    .fadeOut(500, () => {
      $(this).remove();
    });
  deleteTodo($(this).parent().index());
  event.stopPropagation();
});

$('input[type="text"]').on("keypress", function (event) {
  if (event.which === 13) {
    let todoText = $("#todo").val();
    addTodo(todoText);
    $("#todo").val("");
  }
});

$(".fa-plus").click(function () {
  $('input[type="text"]').fadeToggle();
});

existingTodos.forEach((todo) => {
  addTodo(todo);
});

// localStorage.clear();

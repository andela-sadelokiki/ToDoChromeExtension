var app = angular.module('ToDo',[]);

app.controller('ToDoCtrl', ['$scope', 
  function($scope) {

    $scope.today = new Date();
    $scope.newTaskDate = '';

    if(localStorage.getItem("todoList") === null)
        {
          $scope.todoList = [
          {text:'Watch Furious',done: false,  date:$scope.newTaskDate},
          {text:'Build a Todo App', done:false}
        ];
        localStorage.setItem("todoList", angular.toJson($scope.todoList));
        }
    else
        {
          $scope.todoList = angular.fromJson(localStorage.getItem("todoList"));
        }

   

     $scope.addTask = function(){
      
        if($scope.newTaskDate === null || $scope.newTaskDate === '' )
           {
              alert("input due date!");
           }
        else{
          if($scope.newTask !== "")
            {
               $scope.todoList.push({text:$scope.newTask , date:$scope.newTaskDate, done: false  });
              $scope.newTask = "";

            }
            localStorage.setItem("todoList", angular.toJson($scope.todoList));
    } 
     };


     $scope.delete= function(index){
      
       var completedTask = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(completedTask, function (todo) {
            if (!todo.done) {
                $scope.todoList.push(todo);
            }
            localStorage.setItem("todoList", angular.toJson($scope.todoList));
        });
        
      
  };

   
  }]);

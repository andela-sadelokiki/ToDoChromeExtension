var app = angular.module('ToDo',[]);

app.controller('ToDoCtrl', ['$scope', 
  function($scope) {

    $scope.today = new Date();
    $scope.newTaskDate = '';

   

    $scope.todoList = [
      {text:'Watch Furious',done: false,  date:$scope.newTaskDate},
      {text:'Build a Todo App', done:false}
    ];

   

     $scope.addTask = function(){
      
        if($scope.newTaskDate === null || $scope.newTaskDate === '' )
           {
              alert("input due date!");
           }
        else{
          if($scope.newTask !== "")
            {
               $scope.todoList.push({text:$scope.newTask , done: false , date:$scope.newTaskDate });
              $scope.newTask = "";
            }
    } 
     };


     $scope.delete= function(index){
      //$scope.todoList = _.filter($scope.todoList, //function(todo){
      //return !todo.done;
    //});
       var completedTask = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(completedTask, function (todo) {
            if (!todo.done) {
                $scope.todoList.push(todo);
            }
        });
        
      
  };

   
  }]);

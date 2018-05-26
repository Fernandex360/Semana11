
var miApp=angular.module('app1',[]);
miApp.controller('control1',function($scope){
    $scope.nuevoEmpleado={}
    $scope.nuevoEmpleado1={}
    $scope.empleados=[{id:1,apellido:"Fernandez",nombre:"Erick",edad:19,dni:8828281,nacimiento:'22-10-1999'}];

    $scope.insertar=function(){
        $scope.empleados.push({id:$scope.nuevoEmpleado.length +1,  apellido:$scope.nuevoEmpleado.apellido ,
                                nombre:$scope.nuevoEmpleado.nombre,edad:$scope.nuevoEmpleado.edad,
                                dni:$scope.nuevoEmpleado.dni,nacimiento:$scope.nuevoEmpleado.nacimiento});
      
    }

    $scope.eliminar=function(datos){
        $scope.empleados.splice($scope.empleados.indexOf(datos),1);
    }

    $scope.seleccionar=function(e){
        $scope.nuevoEmpleado1.id=e.nombre;
        $scope.nuevoEmpleado1.nombre=e.nombre;
        $scope.nuevoEmpleado1.apellido=e.apellido;
        $scope.nuevoEmpleado1.edad=e.edad;
        $scope.nuevoEmpleado1.dni=e.dni;
        $scope.nuevoEmpleado1.nacimiento=e.nacimiento;
    }
    $scope.actualizar=function(){
        $.grep($scope.empleados,function(e){
            if (e.id=$scope.nuevoEmpleado1.id){
                e.nombre=$scope.nuevoEmpleado1.nombre;
                e.apellido=$scope.nuevoEmpleado1.apellido;
                e.edad=$scope.nuevoEmpleado1.edad;
                e.dni=$scope.nuevoEmpleado1.dni;
                e.nacimiento=$scope.nuevoEmpleado1.nacimiento;
            }
        });
        
    }
    


});
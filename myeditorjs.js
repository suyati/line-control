// JavaScript source code
var app = angular.module("app", []);
app.controller('ctrl', ['$scope', function ($scope) {  

}]);

app.directive('myeditorjs', function () {    

    return {
        restrict: 'EA',
        require: 'ngModel',
        scope: {
            ngModel: '='
           },
      
        link: function (scope, element, attrs, ngModel) {          

           

            element.Editor();      

           $('#Container_txtEditor').keyup(function () {              
            
               
               
                ngModel.$setViewValue(element.Editor("getText"));

                if (!scope.$root != null && !scope.$root.$$phase) {
                    scope.$apply();
                }

            });      

         
            scope.$watch('ngModel', function (value) {                
               
               
                element.Editor("setText", value);

            })            
            
        }
    };

});
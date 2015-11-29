var incluyeApp = angular.module('incluyeApp', []);


incluyeApp.controller('projectsController', function($scope, $http) {
  console.log('home controller');
  $http({
    method: 'GET',
    url: 'http://incluye.me/app_dev.php/projects'
  }).then(function successCallback(response) {
    var projectsList = [];
    $.each(response.data, function(index, value){
      var newproject = value;
      var display =  value['disability_type'];
      newproject.display = (display.length > 1) ? 'Discapacidad Multiple' : display[0];
      projectsList = [...projectsList,newproject]
    })
    $scope.projectsList = projectsList;
  }, function errorCallback(response) {
  });
});


var incluyeApp = angular.module('incluyeApp', []);


incluyeApp.controller('homeController', function($scope, $http) {
  console.log('home controller');
  $http({
    method: 'GET',
    url: 'http://incluye.me/app_dev.php/projects'
  }).then(function successCallback(response) {
    $scope.projectsList = response.data;
    $.each(response.data, function(index, value){
      var content = '<div class="helping-slide item"> <div class="helping-slide-img"><img src="' + value.image + '" alt=""></div><div class="helping-text text-center"><p>'+ value.name +'</p></div><div class="slider-overlay text-center"><span>1</span></div><div class="helping-slide-hover"><div class="helping-btn"><a href="">Conocer mas</a></div></div></div>';
     var owl = $("#help-now").data('owlCarousel');
      /*       owl.owlCarousel(); */
      owl.addItem(content);
      console.log(value)
    })
    $scope.listde = [1,2,3]
  }, function errorCallback(response) {
  });
});


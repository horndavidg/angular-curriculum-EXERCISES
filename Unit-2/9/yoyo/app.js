// var app = angular.module('yoyoDirectiveApp', [])

// app.controller('YoyoController', ['$scope', function($scope) {
//   $scope.yoyo = {name: 'Duncan Metal Drifter',
//     img: "http://www.toysrus.com/graphics/tru_prod_images/Duncan-Metal-Drifter-Pro-Yo-Yo--pTRU1-8444206dt.jpg"
//   };
// }]);

// app.directive('gsYoyoDetails', function() {
//   return {
//     templateUrl: 'yoyo-details.html',
//   };
// });


var app = angular.module('yoyoDirectiveApp', [])

app.controller('YoyoController', ['$scope', function($scope) {
  $scope.yoyos = [{name: 'Duncan Metal Drifter',
    img: "http://www.toysrus.com/graphics/tru_prod_images/Duncan-Metal-Drifter-Pro-Yo-Yo--pTRU1-8444206dt.jpg"
  }, {name: 'Echo',
    img: "http://cdn.yoyoexpert.com/490/view/images/01.jpg"}, {name: 'SKYHAWK',
    img: "http://cdn6.bigcommerce.com/s-8ndhalpa/products/761/images/2523/LR_3597XP_Rd_3_4__78443.1411494553.1280.1280.jpg?c=2"}];
}]);

app.directive('gsYoyoDetails', function() {
  return {
    templateUrl: 'yoyo-details.html',
    scope: {
      yoyos: '=yoyoData'
    }
  };
});
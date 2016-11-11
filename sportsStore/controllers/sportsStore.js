
//angular.module() is used to define
//   an angular module "sportsStore" when an additional
//   argument ([] in here) is provided.
//   This method returns a Module object.
theApp = angular.module("sportStore", ["customFilters"]);

//angular.module("sportStore") presents the Module object
//  when no second argument. That is same as "theApp" above

//Manual data
//theApp.controller("sportsStoreCtrl", function($scope) {
//    $scope.data = {
//      products:
//      [
//        { name: "Product #1", description: "A product 1",
//          category: "Category #1", price: 100 },
//        { name: "Product #2", description: "A product 2",
//          category: "Category #1", price: 110 },
//        { name: "Product #3", description: "A product 3",
//          category: "Category #2", price: 210 },
//        { name: "Product #4", description: "A product 4",
//          category: "Category #3", price: 202 }
//      ]
//    };
//  });


theApp.constant("dataUrl", "http://192.168.1.218/to_mysql.php")
      .controller("sportsStoreCtrl", function($scope, $http, dataUrl) {
         $scope.data = {};
         $http.get(dataUrl)
           .success(function(data) {
               $scope.data.products = data;
            })
           .error(function(response) {
               $scope.data.error = response.error || response;
            });

      });


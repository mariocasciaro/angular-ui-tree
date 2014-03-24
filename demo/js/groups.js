(function() {
  'use strict';

  angular.module('groupsApp', ['ui.tree'])
  .controller('groupsCtrl', function($scope, $log) {

    $scope.info = "";
    $scope.groups = [{
      "id": 1,
      "type": "group",
      "title": "group 1",
      "categories": [],
    }, {
      "id": 2,
      "title": "group 2",
      "type": "group",
      "categories": [{
        "id": 21,
        "type": "category",
        "title": "category 2.1",
      }, {
        "id": 22,
        "type": "category",
        "title": "category 2.2",
      }],
    }, {
      "id": 3,
      "title": "group 3",
      "type": "group",
      "categories": [{
        "id": 31,
        "type": "category",
        "title": "category 3.1",
      }, {
        "id": 32,
        "type": "category",
        "title": "category 3.2",
      }, {
        "id": 33,
        "type": "category",
        "title": "category 3.3",
      }],
    }, {
      "id": 4,
      "title": "group 4",
      "type": "group",
      "categories": [],
    }];


    $scope.groupsOptions = {
      accept: function(sourceNode, destNodes, destIndex) {
        var data = sourceNode.$modelValue;
        return (data.type == 'group'); // only accept group
      }
    };

    $scope.categoriesOptions = {
      accept: function(sourceNode, destNodes, destIndex) {
        var data = sourceNode.$modelValue;
        return (data.type == 'category'); // only accept category
      },
    };

  });

})();

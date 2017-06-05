(function(){
  'use strict';

  var app = angular.module( 'app', [ 'ui.bootstrap' ] )

  app.controller('phonebookCtrl', PhonebookController);

  function PhonebookController($scope, $uibModal) {

    $scope.phonebook = localStorage.getItem('Phonebook');
    $scope.phonebook = $scope.phonebook ? JSON.parse($scope.phonebook) : [];
    $scope.reverse = false;
    $scope.sortingField = 'name';

    $scope.reverseSort = function () {
      $scope.reverse = !$scope.reverse;
    }
    $scope.openModalForm = function(){
      $uibModal.open({
          templateUrl: 'modal-form.html',
          scope: $scope
      });
    }
    $scope.addUser = function(user) {    
      var newId = new Date().getTime();
      $scope.phonebook.push({
        id: newId,
        name: user.name,
        phone: user.phone
      });
      user.name = '';
      user.phone = '';
      
      localStorage.setItem('Phonebook', JSON.stringify($scope.phonebook));
    }
    $scope.deleteUser = function( id ) {
      $scope.phonebook = $scope.phonebook.filter(function(item){
        if (id != item.id) {
          return item;
        }
      });

      localStorage.setItem('Phonebook', JSON.stringify($scope.phonebook));
    }
  }

})();

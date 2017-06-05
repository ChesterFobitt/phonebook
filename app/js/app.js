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
    $scope.openAddForm = function(){
      $uibModal.open({
          templateUrl: 'modal-form.html',
          scope: $scope
      });
    }
    $scope.addNewUser = function(user) {    
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

/*

  
    $scope.phonebook2 = [
      {
        id: 0,
        name: 'Андрей Валерьевич',
        phone: '+7(846) 334-25-63'
      },
      {
        id: 1,
        name: 'Виталий Алексеевич',
        phone: '+7(846) 334-25-64'
      },
      {
        id: 2,
        name: 'Растислав Андреевич',
        phone: '+7(846) 334-25-64'
      },
      {
        id: 3,
        name: 'Григорий Ивашкин',
        phone: '+7(846) 334-25-65'
      }
    ];


*/
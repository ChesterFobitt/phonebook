'use strict';

var app = angular.module( 'app', [ 'ui.bootstrap' ] )

app.controller('phonebookCtrl', PhonebookController);

function PhonebookController($scope, $uibModal) {
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

  $scope.consLog = function(user){
    console.log(user);
  }


  $scope.phonebook = [
    {
      name: 'Андрей Валерьевич',
      phone: '+7(846) 334-25-63'
    },
    {
      name: 'Виталий Алексеевич',
      phone: '+7(846) 334-25-64'
    },
    {
      name: 'Растислав Андреевич',
      phone: '+7(846) 334-25-64'
    },
    {
      name: 'Григорий Ивашкин',
      phone: '+7(846) 334-25-65'
    }
  ];
  $scope.addNewPerson = function(user) {    
    $scope.phonebook.push({
      name: user.name,
      phone: user.phone
    });
    user.name = '';
    user.phone = '';
  }
  $scope.deletePerson = function( id ) {
    $scope.phonebook.splice( id, 1 );
  }
}

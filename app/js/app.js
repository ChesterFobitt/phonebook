(function(){
  'use strict';

  var app = angular.module( 'app', [ 'ui.bootstrap' ] );

  app.controller('phonebookCtrl', PhonebookController);

  function PhonebookController($scope, $uibModal) {

    // Получаем или создаем запись в локальном хранилище в формате json
    $scope.phonebook = localStorage.getItem('Phonebook');
    $scope.phonebook = $scope.phonebook ? JSON.parse($scope.phonebook) : [];
    
    $scope.reverse = false;
    $scope.sortingField = 'name';
    
    // Переключение направления сортировки 
    $scope.reverseSort = function () {
      $scope.reverse = !$scope.reverse;
    }

    // Открытие модального окна 
    $scope.openModalForm = function(){
      $uibModal.open({
          templateUrl: 'modal-form.html',
          scope: $scope
      });
    }

    // Добавление элемента в список
    $scope.addUser = function(user) {    
      var newId = new Date().getTime();
      $scope.phonebook.push({
        id: newId,
        name: user.name,
        phone: user.phone
      });
      
      // Очистка полей
      user.name = '';
      user.phone = '';

      // Обновляем локальное хранилище
      localStorage.setItem('Phonebook', JSON.stringify($scope.phonebook));
    }
    $scope.deleteUser = function( id ) {
      $scope.phonebook = $scope.phonebook.filter(function(item){
        if (id != item.id) {
          return item;
        }
      });

      // Обновляем локальное хранилище
      localStorage.setItem('Phonebook', JSON.stringify($scope.phonebook));
    }
  }

})();

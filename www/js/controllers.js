angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope) {
  })

  .controller('ChatsCtrl', function ($scope, Chats, $state) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
      Chats.remove(chat);
    };
    goToLogin = function () {
      $state.go('login')
    }
  })

  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('AccountCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  })
  .controller('LoginCtrl', function ($scope, $state) {
    $scope.settings = {
      enableFriends: true
    };
    goToTabs = function () {
      $state.go('tab.chats')
    }
  });

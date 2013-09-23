angular.module('yoAngularApp')
  .controller('MainCtrl', function ($scope) {

    $scope.appointmentList = [];
    $scope.newAppointment = {
      title : "defaultTitle",
      start_date : "2013-09-09",
      end_date : "2013-09-09",
      appointment_with : "Dr. John",
      description: "dentist appointment"
    };

    $scope.addAppointment = function(newAppointment) {
      var appointment = angular.copy(newAppointment);
      $scope.appointmentList.push(appointment);
    };

    $scope.deleteAppointment = function(appointmentIndex) {
      $scope.appointmentList.splice(appointmentIndex,1);
    }

     $scope.toggleEdit = function(appointmentIndex) {
      $scope.editing = !$scope.editing;
      $scope.appointmentIndex = appointmentIndex;
    }   
  });
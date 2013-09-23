angular.module('meetMeApp')
  .controller('MainCtrl', function ($scope) {

    $scope.appointmentList = [];

    $scope.addAppointment = function(newAppointment) {
      var appointment = {
        title : "Default",
        start_date : "2013-09-09",
        end_date : "2013-09-09",
        appointment_with : "Default",
        description: "Default"
      };

      $scope.appointmentList.push(appointment);
      $scope.editAppointment($scope.appointmentList.length - 1);
    };

    $scope.deleteAppointment = function(appointmentIndex) {
      $scope.appointmentList.splice(appointmentIndex,1);
    }

     $scope.editAppointment = function(appointmentIndex) {
      $scope.editing = !$scope.editing;
      $scope.appointmentIndex = appointmentIndex;
    }   
  });
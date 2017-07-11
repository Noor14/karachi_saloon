'use strict';

/**
 * @ngdoc service
 * @name karachiMenSaloonApp.toaster
 * @description
 * # toaster
 * Service in the karachiMenSaloonApp.
 */
angular.module('karachiMenSaloonApp')
  .service('toaster', function (toastr) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.display = function(message){
    toastr.success(message,{
      closeButton: true,
      preventOpenDuplicates: true
    });
    }
  });

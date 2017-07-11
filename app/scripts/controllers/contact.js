'use strict';

/**
 * @ngdoc function
 * @name karachiMenSaloonApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the karachiMenSaloonApp
 */
angular.module('karachiMenSaloonApp')
  .controller('ContactCtrl', function (toaster, postService) {
     var contact = this;
    contact.message = {};
    contact.sendMail = function(){
      postService.mail(contact.message).then(function(res){
       console.log(res,'mail sent');
       toaster.display('Your message has been sent');
       contact.message = {};
     },function(err){
       toaster.display('Your message has not been sent');
       console.log(err,'mail not sent');
     })
    };

  });

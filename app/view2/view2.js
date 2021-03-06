'use strict';

angular.module('myApp.view2', ['ngRoute','textAngular'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])
.config(function($provide){
  $provide.decorator('taOptions', ['taRegisterTool', '$delegate', function(taRegisterTool, taOptions){
    // $delegate is the taOptions we are decorating
    // register the tool with textAngular
    taRegisterTool('colourRed', {
      iconclass: "dscj-icon-qq",
      action: function(){
        this.$editor().wrapSelection('forecolor', 'red');
      }
    });
    // add the button to the default toolbar definition
    taOptions.toolbar[1].push('colourRed');
    return taOptions;
  }]);
  // this demonstrates how to register a new tool and add it to the default toolbar
  $provide.decorator('taOptions', ['$delegate', function(taOptions){
    // $delegate is the taOptions we are decorating
    // here we override the default toolbars and classes specified in taOptions.
    taOptions.forceTextAngularSanitize = true; // set false to allow the textAngular-sanitize provider to be replaced
    taOptions.keyMappings = []; // allow customizable keyMappings for specialized key boards or languages
    taOptions.toolbar = [
      ['bold', 'italics', 'underline', 'ul', 'ol','pre', 'quote'],
      ['insertImage', 'insertVideo']
    ];
    taOptions.classes = {
      focussed: 'focussed',
      toolbar: 'btn-toolbar',
      toolbarGroup: 'btn-group',
      toolbarButton: 'btn-default',
      toolbarButtonActive: 'active',
      disabled: 'disabled',
      textEditor: 'form-control',
      htmlEditor: 'form-control'
    };
    return taOptions; // whatever you return will be the taOptions
  }]);
  // this demonstrates changing the classes of the icons for the tools for font-awesome v3.x
  $provide.decorator('taTools', ['$delegate', function(taTools){
    /*taTools.bold.iconclass = 'icon-bold';
    taTools.italics.iconclass = 'icon-italic';
    taTools.underline.iconclass = 'icon-underline';
    taTools.ul.iconclass = 'icon-list-ul';
    taTools.ol.iconclass = 'icon-list-ol';
    taTools.undo.iconclass = 'icon-undo';
    taTools.redo.iconclass = 'icon-repeat';
    taTools.justifyLeft.iconclass = 'icon-align-left';
    taTools.justifyRight.iconclass = 'icon-align-right';
    taTools.justifyCenter.iconclass = 'icon-align-center';
    taTools.clear.iconclass = 'icon-ban-circle';
    taTools.insertLink.iconclass = 'icon-link';
    taTools.insertImage.iconclass = 'icon-picture';*/
    taTools.clear.iconclass = 'dscj-icon-close';
    // there is no quote icon in old font-awesome so we change to text as follows
    delete taTools.quote.iconclass;
    taTools.quote.buttontext = 'quote';
    return taTools;
  }]);
})
.controller('View2Ctrl', ['$scope',function($scope) {

  $scope.htmlContent = "";
}]);
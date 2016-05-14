angular.module('ionicApp').filter('capitalize', capitalize)
  
 ;

function capitalize() {
  return filter;

  function filter(input) {
    if (input !== null) {
      return input.replace(/\w\S*/g, function (txt) {
        txt = txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        res = txt.replace("-", " ");
        return res;
      });
    }
  }
}
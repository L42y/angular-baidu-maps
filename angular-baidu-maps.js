angular.module('l42y.baidu.maps', []).directive('baiduMaps', function (
  $window
) {
  return {
    restrict: 'A',
    link: function ($scope, $element, $attrs) {
      var map = new $window.BMap.Map($element[0]);
      var mapPoint = $attrs.baiduMapsPoint;
      var mapPointLat = $scope.$eval($attrs.baiduMapsPointLat);
      var mapPointLng = $scope.$eval($attrs.baiduMapsPointLng);
      map.centerAndZoom(
        mapPoint
         ? mapPoint
         : new $window.BMap.Point(mapPointLng, mapPointLat),
        $attrs.baiduMapsZoomLevel
      );
    }
  };
});

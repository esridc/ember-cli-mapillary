export default function getMapillaryLayerConfig() {
  return {
    url: 'https://d2munx5tg0hw47.cloudfront.net/tiles/{z}/{x}/{y}.mapbox',
    maxZoom: 18,
    style: function (/*feature*/) {
      var style = {};
      style.color = 'rgba(0, 255, 0, 0.7)';
      style.size = 3;

      return style;
    }
  };
}

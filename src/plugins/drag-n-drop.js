var DragNDrop = {};
var getCoords = function (el) {
  var box = el.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
};
DragNDrop.install = function(Vue, options) {
  Vue.prototype.$dragNDrop = function(pluginOptions) {
    var mousedowned = false;
    var startPos = {
      x: null,
      y: null
    };

    var shiftPos = {
      x: null,
      y: null
    };


    this.$el.addEventListener('mousedown', function (e) {
      if (e.which != 1) return;

      mousedowned = true;
      startPos.x = e.pageX;
      startPos.y = e.pageY;

      var coords = getCoords(this);
      var shift = {
        x: coords.left,
        y: coords.top
      };


      if (pluginOptions.callbacks && pluginOptions.callbacks.mousedown) {
        pluginOptions.callbacks.mousedown({
          e,
          startPos,
          shiftPos: shift
        });
      }
    });

    this.$el.addEventListener('mousemove', function (e) {
      if (mousedowned) {
        var coords = getCoords(this);
        shiftPos.x = startPos.x - coords.left;
        shiftPos.y = startPos.y - coords.top;

        if (pluginOptions.callbacks && pluginOptions.callbacks.mousemove) {
          pluginOptions.callbacks.mousemove({
            e,
            startPos,
            shiftPos
          });
        }
      }
    });

    this.$el.addEventListener('mouseup', function (e) {
      mousedowned = false;

      if (pluginOptions.callbacks && pluginOptions.callbacks.mouseup) {
        pluginOptions.callbacks.mouseup({
          e
        });
      }
    });
  };
};

export default DragNDrop;
var DragNDrop = {};
var getCoords = function (el) {
  var box = el.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
};

DragNDrop.install = function (Vue, options) {
  Vue.prototype.$dragNDrop = function (pluginOptions) {
    var mousedowned = false;
    var mousedownedEl = pluginOptions.el;
    var startPos = {
      x: null,
      y: null
    };

    var shiftPos = {
      x: null,
      y: null
    };

    pluginOptions.el.addEventListener('mousedown', function (e) {
      if (e.which !== 1) return;

      mousedowned = true;
      mousedownedEl = e.target;
      startPos.x = e.pageX;
      startPos.y = e.pageY;

      var coords = getCoords(this);
      var shift = {
        x: coords.left,
        y: coords.top
      };

      if (pluginOptions && pluginOptions.callbacks.mousedown) {
        pluginOptions.callbacks.mousedown({
          e,
          startPos,
          shiftPos: shift
        });
      }
    });

    function mousemoveHandler (e) {
      if (mousedowned) {
        var coords = getCoords(pluginOptions.el);
        shiftPos.x = startPos.x - coords.left;
        shiftPos.y = startPos.y - coords.top;

        if (pluginOptions && pluginOptions.callbacks.mousemove) {
          pluginOptions.callbacks.mousemove({
            e,
            startPos,
            shiftPos
          });
        }
      }
    }

    if (pluginOptions.mousemoveOnDocument) {
      document.addEventListener('mousemove', mousemoveHandler);
    } else {
      pluginOptions.el.addEventListener('mousemove', mousemoveHandler);
    }

    function mouseupHandler (e) {
      mousedowned = false;
      var nearly = mousedownedEl === e.target;
      if (!nearly) {
        var target = e.target;
        while (target.parentElement !== null) {
          target = target.parentElement;
          if (target === mousedownedEl) {
            nearly = true;
            break;
          }
        }
      }

      if (pluginOptions && pluginOptions.callbacks.mouseup && nearly) {
        pluginOptions.callbacks.mouseup({
          e,
          startPos,
          shiftPos
        });
      }

      mousedownedEl = null;
    }

    if (pluginOptions.mouseupOnDocument) {
      document.addEventListener('mouseup', mouseupHandler);
    } else {
      pluginOptions.el.addEventListener('mouseup', mouseupHandler);
    }
  };
};

export default DragNDrop;

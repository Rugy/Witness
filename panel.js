export var panel = {};

export function sayHello() {
  console.log("Hello")
}

export function createPanel(height, width) {
  panel.height = height;
  panel.width = width;
  panel.maxSize = Math.max(height, width);
  panel.fields = [];
  panel.xLines = [];
  panel.yLines = [];

  fill2DArray(panel.fields, height, width);
  fill2DArray(panel.xLines, height + 1, width);
  fill2DArray(panel.yLines, height, width + 1);
}

function fill2DArray(array, height, width) {
  for (var i = 0; i < height; i++) {
    array.push([]);

    for (var j = 0; j < width; j++) {
      array[i].push({x: i, y: j});
    }
  }
}

import { Line } from "./line.js";

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
  panel.lines = [];

  fill2DArray(panel.fields, height, width);
  fill2DArray(panel.xLines, height + 1, width);
  fill2DArray(panel.yLines, height, width + 1);
  createLines(panel.lines, height, width);
  linkLines(panel.lines);
}

function fill2DArray(array, height, width) {
  for (var i = 0; i < height; i++) {
    array.push([]);

    for (var j = 0; j < width; j++) {
      array[i].push({x: i, y: j});
    }
  }
}

function createLines(array, height, width) {
  for (var i = 0; i < height + width + 1; i++) {
    array.push([]);

    let rowLines = width;
    if (i % 2 == 1) {
      rowLines++;
    }

    for (var j = 0; j < rowLines; j++) {
      array[i].push({x: i, y: j, active: true});
    }
  }
}

function linkLines(lineArray) {

}

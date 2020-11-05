import { sayHello, createPanel, panel } from "./panel.js";
import { canvas, drawPanel, configRender } from "./render.js"

$(document).ready(function() {
  configRender();

  var height = 4;
  var width = 4;

  createPanel(height, width);
  drawPanel(panel);

  console.log(panel);
});

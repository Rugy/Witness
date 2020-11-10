import { sayHello, createPanel, panel } from "./panel.js";
import { canvas, drawPanel, configRender } from "./render.js"
import { initQuotes } from "./quote.js"

$(document).ready(function() {
  configRender();

  var height = 4;
  var width = 4;

  createPanel(height, width);
  drawPanel(panel);
  initQuotes();

  console.log(panel);
});

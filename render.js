export const canvas = $("#panel")[0].getContext("2d");

export function configRender() {
  $("#panel").css("cursor", "pointer");
}

export function drawPanel(panel) {
  var fieldSize = $("#panel")[0].width / panel.maxSize;
  var xLineWidth = 20;
  var yLineWidth = 20;
  var xLineSize;
  var yLineSize;

  panel.fields.forEach((row, i) => {
    row.forEach((item, j) => {
      drawRect(i * fieldSize, j * fieldSize, fieldSize);
    });
  });

  panel.xLines.forEach((item, i) => {

  });

}

function drawRect(x, y, width) {
  canvas.fillStyle = "#aa3333";
  canvas.fillRect(x, y, width, width);
}

function drawLine(x, y, width, height) {

}

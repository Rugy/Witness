export const canvas = $("#panel")[0].getContext("2d");
const lines = [];

export function configRender() {
  $("#panel").on("click", function (e) {
    lines.forEach((line, i) => {
      if (canvas.isPointInPath(line, e.offsetX, e.offsetY)) {
        toggleLine(line);
      }
    });
  }).on("mousemove", function (e) {
    let isHover = false;
    lines.forEach((line, i) => {
      if (canvas.isPointInPath(line, e.offsetX, e.offsetY)) {
        isHover = true;
      }
    });

    if (isHover) {
      $("#panel").css("cursor", "pointer");
    } else {
      $("#panel").css("cursor", "default");
    }
  });
}

export function drawPanel(panel) {
  var fieldSize = $("#panel")[0].width / panel.maxSize;
  var lineWidth = 20;
  var lineLength = fieldSize;
  var offsetField = ($("#panel")[0].width - lineWidth) / panel.maxSize;
  var offsetWidth = lineWidth / 3;

  panel.fields.forEach((row, i) => {
    row.forEach((item, j) => {
      drawRect(i * fieldSize, j * fieldSize, fieldSize);
    });
  });

  panel.xLines.forEach((row, i) => {
    row.forEach((item, j) => {
      drawLine(i * offsetField, j * offsetField + offsetWidth, lineWidth, lineLength, "blue");
    });
  });

  panel.yLines.forEach((row, i) => {
    row.forEach((item, j) => {
      drawLine(i * offsetField + offsetWidth, j * offsetField, lineLength, lineWidth, "blue");
    });
  });

  console.log(lines);
}

function drawRect(x, y, width) {
  canvas.fillStyle = "grey";
  canvas.fillRect(x, y, width, width);
}

function drawLine(x, y, width, height, color) {
  let line = new Path2D();
  line.passable = true;
  line.rect(x, y, width, height);
  canvas.fillStyle = color;
  canvas.fill(line);
  lines.push(line);
}

function toggleLine(line) {
  line.passable = !line.passable;
  let color = line.passable ? "blue" : "red";
  canvas.fillStyle = color;
  canvas.fill(line);
}

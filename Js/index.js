// calculate button of triangle click handler
document.getElementById("triangle-calculate").addEventListener("click", function () {
  const triangleBase = getInputFieldValue("triangle-base");
  const triangleHeight = getInputFieldValue("triangle-height");
  const validation = checkValidation(triangleBase, triangleHeight);
  if (validation === true) {
    const areaOfTriangle = calculateArea(0.5, triangleBase, triangleHeight);
    setAreaValue("Triangle", areaOfTriangle);
  } else {
  }
});
// calculate button of rectangle click handler
document.getElementById("rectangle-calculate").addEventListener("click", function () {
  const rectangleWidth = getInputFieldValue("rectangle-width");
  const rectangleLength = getInputFieldValue("rectangle-length");
  const validation = checkValidation(rectangleWidth, rectangleLength);
  if (validation === true) {
    const areaOfRectangle = calculateArea(1, rectangleWidth, rectangleLength);
    setAreaValue("Rectangle", areaOfRectangle);
  } else {
  }
});

// calculate button of parallelogram click handler
document.getElementById("parallelogram-calculate").addEventListener("click", function () {
  const parallelogramBase = getInputFieldValue("parallelogram-base");
  const parallelogramHeight = getInputFieldValue("parallelogram-height");
  const validation = checkValidation(parallelogramBase, parallelogramHeight);
  if (validation === true) {
    const areaOfParallelogram = calculateArea(1, parallelogramBase, parallelogramHeight);
    setAreaValue("Parallelogram", areaOfParallelogram);
  } else {
  }
});

// calculate button of rhombus click handler
document.getElementById("rhombus-calculate").addEventListener("click", function () {
  const rhombusDiagonal1 = getInputFieldValue("rhombus-diagonal1");
  const rhombusDiagonal2 = getInputFieldValue("rhombus-diagonal2");
  const validation = checkValidation(rhombusDiagonal1, rhombusDiagonal2);
  if (validation === true) {
    const areaOfRhombus = calculateArea(0.5, rhombusDiagonal1, rhombusDiagonal2);
    setAreaValue("Rhombus", areaOfRhombus);
  } else {
  }
});

// calculate button of pentagon click handler
document.getElementById("pentagon-calculate").addEventListener("click", function () {
  const pentagonPerimeter = getInputFieldValue("pentagon-perimeter");
  const pentagonApothem = getInputFieldValue("pentagon-apothem");
  const validation = checkValidation(pentagonPerimeter, pentagonApothem);
  if (validation === true) {
    const areaOfPentagon = calculateArea(0.5, pentagonPerimeter, pentagonApothem);
    setAreaValue("Pentagon", areaOfPentagon);
  } else {
  }
});

// calculate button of ellipse click handler
document.getElementById("ellipse-calculate").addEventListener("click", function () {
  const majorLength = getInputFieldValue("ellipse-major-length");
  const minorLength = getInputFieldValue("ellipse-minor-length");
  const validation = checkValidation(majorLength, minorLength);
  if (validation === true) {
    const areaOfEllipse = calculateArea(3.14, majorLength, minorLength);
    setAreaValue("Ellipse", areaOfEllipse);
  } else {
  }
});

//set random color to card on mouse enter
document.getElementById("triangle-card").addEventListener("mouseenter", function () {
  getRandomColor("triangle-card");
});
document.getElementById("rectangle-card").addEventListener("mouseenter", function () {
  getRandomColor("rectangle-card");
});
document.getElementById("parallelogram-card").addEventListener("mouseenter", function () {
  getRandomColor("parallelogram-card");
});
document.getElementById("rhombus-card").addEventListener("mouseenter", function () {
  getRandomColor("rhombus-card");
});
document.getElementById("pentagon-card").addEventListener("mouseenter", function () {
  getRandomColor("pentagon-card");
});
document.getElementById("ellipse-card").addEventListener("mouseenter", function () {
  getRandomColor("ellipse-card");
});

// entering new html file by clicking blog button
document.getElementById("blog-btn").addEventListener("click", function () {
  window.location.href = "./blog.html";
});

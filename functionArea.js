function calculateRectangleArea(length, width){
  return (length > 0 && width > 0) ? length * width : "undefined";
}
function calculateTriangleArea(base, height){
  return (base > 0 && height > 0) ? (base * height) / 2 : 'undefined'; 
}
function calculateCircleArea(radius){
  return (radius > 0)  ? Math.PI * radius * radius : 'undefined';
}
console.log(calculateRectangleArea(-1,0));
console.log(calculateTriangleArea(-1,5));
console.log(calculateCircleArea(1.5));


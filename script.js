document.addEventListener('mousemove', function(e) {
  let x = e.pageX;
  let y = e.pageY;
  let size = 300; // The size of the gradient circle, you can adjust this value
document.body.style.backgroundImage = `radial-gradient(circle ${size}px at ${x}px ${y}px, #8256FF 20%, #0000FF 300%)`;});

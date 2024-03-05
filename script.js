// Your code here.
const container = document.getElementsByClassName('items');
let isDragging = false;
let startX,startY,startScrollX;

container.addEventListener('mousedown' ,(e)=>{
	isDragging= true;
	startX = e.clientX;
	startY = e.clientY;
	startScrollX = container.scrollLeft;
});
container.addEventListener('mousemove',(e)=>{
	if(!isDragging) return;
	const distanceX = e.clientX - startX;
	container.scrollLeft = startScrollX - distanceX;
});
container.addEventListener('mouseup' ,(e)=>{
	isDragging=false;
});
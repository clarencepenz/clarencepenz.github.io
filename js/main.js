const tabIcons = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.project');
const scrollBtn = document.querySelectorAll('.scroll-p');
let timeOut = "";

function selectTab(e){
	removeBorder();
	removeShow();
	this.classList.add('border');
	const shots = document.querySelector(`#${this.id}-content`);
	shots.classList.add('show');
	
}


function scrollToTop(e){
	if(document.body.scrollTop !=0 || document.documentElement.scrollTop != 0){
		window.scrollBy(0, -50);
		requestAnimationFrame(scrollToTop);
		hide();
	}else{
		clearTimeout(timeOut);
	}
}

function hide(){
	scrollBtn.forEach(scroll => {
		setTimeout(scroll.classList.add('hide'), 5000);
	});
}





function removeBorder(){
	tabIcons.forEach(icon => icon.classList.remove('border'));
}

function removeShow(){
	tabContent.forEach(icon => icon.classList.remove('show'));
}

tabIcons.forEach(icon => icon.addEventListener('click', selectTab));

scrollBtn.forEach(scroll => scroll.addEventListener('click', scrollToTop))

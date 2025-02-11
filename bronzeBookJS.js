window.addEventListener("load", function(){
	this.setTimeout(() => {
		document.getElementById('preloader').style.animationName = "fadeOut";
		document.getElementById('preloader').style.animationDuration = "0.9s";
		document.getElementById('preloader').style.animationTimingFunction = "ease";
		document.querySelector(".dom").style.animationName = "fadeIn";
		document.querySelector(".dom").style.animationDuration = "0.75s";
		document.querySelector(".dom").style.animationTimingFunction = "ease";
	}, 4200);  

	this.setTimeout(() => {
		document.getElementById('preloader').style.display = "none";
	}, 5100);
});

document.getElementById('Ts&Cs').addEventListener('click', () => {
	document.querySelector(".termsCon").style.background = "#C8E6C9";
	document.querySelector(".termsCon").style.border = "none";
	document.querySelector(".termsCon").style.boxShadow = "0px 0px 10px 8px #fff";
});

document.getElementById('pp').addEventListener('click', () => {
	document.querySelector(".termsCon2").style.background = "#C8E6C9";
	document.querySelector(".termsCon2").style.border = "none";
	document.querySelector(".termsCon2").style.boxShadow = "0px 0px 10px 8px #fff";
});

document.getElementById('other').addEventListener('click', () => {
	document.getElementById('otherLtdType').setAttribute('required', '');
}); 

document.getElementById('submitBronze').addEventListener('click', event => {
	// event.preventDefault();

	// const formData = new FormData(formEl);
	// const data = Object.fromEntries(formData);

	// fetch('https://reqres.in/api/users', {
	// 	method: 'POST',
	// 	headers: {
	// 		'Content-Type': 'application/json'
	// 	},
	// 	body: JSON.stringify(data)
	// }).catch(error => alert(error));

	setTimeout(() => {
		document.querySelector(".dom").style.animationName = "fadeOut";
		document.querySelector(".dom").style.animationDuration = "0.75s";
		document.querySelector(".dom").style.animationTimingFunction = "ease";
	}, 100);   

	setTimeout(() => { 
		//document.getElementById('preloader').style.display = "flex";
		document.querySelector(".scaffold").style.display = "flex";
	}, 850); 

	// setTimeout(() => {
	// 	document.querySelector(".scaffold").style.display = "flex";
	// }, 4000);

	// setTimeout(() => {
	// 	document.getElementById('preloader').style.display = "none";
	// }, 7100); 
});

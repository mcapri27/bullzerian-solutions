	var slider_img	= document.getElementById("merchOne");
	var images = ["BottleBack.png",
					"BottleRight.png",
					"BottleFront.png",
					"BottleOpen.png"];
	var i = 0;
	
	function prev(){
		if (i <= 0 ) i = images.length;
		i--;
		return setImg();
	}
	
	function next(){
		if( i >= images.length-1 ) i = -1;
		i++;
		return setImg();
	}
	
	function setImg(){
		return slider_img.setAttribute("src", "images/" + images[i]);
	} 
	
	var slider_img2	= document.getElementById('merchTwo');
	var images2 = ["MousePad1.jpg",
					"MousePad2.jpg",
					"MousePadFront.jpg",
					"MousePadClose-up.jpg",
					];
	var i = 0;
	
	function prev2(){
		if (i <= 0 ) i = images2.length;
		i--;
		return setImg2();
	}
	
	function next2(){
		if( i >= images2.length-1 ) i = -1;
		i++;
		return setImg2();
	}
	
	function setImg2(){
		return slider_img2.setAttribute("src", "images/" + images2[i]);
	} 
	
	var slider_img3	= document.getElementById('merchThree');
	var images3 = ["CupFront.png",
					"CupLeft.png",
					"CupBack.png",
					"CupContext 2.png"];
	var i = 0;
	
	function prev3(){
		if (i <= 0 ) i = images3.length;
		i--;
		return setImg3();
	}
	
	function next3(){
		if( i >= images3.length-1 ) i = -1;
		i++;
		return setImg3();
	}
	
	function setImg3(){
		return slider_img3.setAttribute("src", "images/" + images3[i]);
	}
	
	/*//number 4
	var slider_img4	= document.querySelector(".mugProductPic4");
	var images4 = ["FernFloorMatContext%202.png",
					"FernFloorMatContext%201.png",
					"FernFloorMatFront.png",
					"FernFloorMatDesign.png"];
	var i = 0;
	
	function prev4(){
		if (i <= 0 ) i = images4.length;
		i--;
		return setImg4();
	}
	
	function next4(){
		if( i >= images4.length-1 ) i = -1;
		i++;
		return setImg4();
	}
	
	function setImg4(){
		return slider_img4.setAttribute("src", "file:///C:/docs/Professor%20Yard/" + images4[i]);
	}
	
	//number 5
	var slider_img5	= document.querySelector(".mugProductPic5");
	var images5 = ["MCcCandleContext%201.png",
					"MCcCandleContext%203.png",
					"MCcCandleContext%202.png",
					"MCcCandleFront.png", 
					"MCcCandleOpen.png",
					"MCccCandleDesign.png"];
	var i = 0;
	
	function prev5(){
		if (i <= 0 ) i = images5.length;
		i--;
		return setImg5();
	}
	
	function next5(){
		if( i >= images5.length-1 ) i = -1;
		i++;
		return setImg5();
	}
	
	function setImg5(){
		return slider_img5.setAttribute("src", "file:///C:/docs/Professor%20Yard/" + images5[i]);
	}
	
	//number 6
	var slider_img6	= document.querySelector(".mugProductPic6");
	var images6 = ["ClockClose-up.png",
					"ClockFront.png",
					"ClockContext%202.png",
					"ClockContext%203.png",
					"ClockContext%201.png"];
	var i = 0;
	
	function prev6(){
		if (i <= 0 ) i = images6.length;
		i--;
		return setImg6();
	}
	
	function next6(){
		if( i >= images6.length-1 ) i = -1;
		i++;
		return setImg6();
	}
	
	function setImg6(){
		return slider_img6.setAttribute("src", "file:///C:/docs/Professor%20Yard/" + images6[i]);
	}*/
	
	window.addEventListener("load", function(){
		this.setTimeout(() => {
			document.getElementById('preloader').style.animationName = "fadeOut";
			document.getElementById('preloader').style.animationDuration = "0.9s";
			document.getElementById('preloader').style.animationTimingFunction = "ease";
			document.getElementById("dom").style.animationName = "fadeIn";
			document.getElementById("dom").style.animationDuration = "0.75s";
			document.getElementById("dom").style.animationTimingFunction = "ease";
		}, 4200);  

		this.setTimeout(() => {
			document.getElementById('preloader').style.display = "none";
		}, 5100);
	});
	
	var tc = document.getElementById('t&c');
	var pp = document.getElementById('pp');
	var excer = document.getElementById('excer');
	const LegalBox = document.getElementById('legalSection');
	
	tc.addEventListener('click', function(){  
		setTimeout(function() {
			document.querySelector('.tabText1').style.borderBottom = "2px solid rgb(51, 51, 51)"; 
			document.querySelector('.tabText1').style.color = "rgb(51, 51, 51)";
			document.querySelector('.tabText2').style.borderBottom = "2px solid transparent"; 
			document.querySelector('.tabText2').style.color = "rgb(51, 51, 51)";
			document.querySelector('.tabText3').style.borderBottom = "2px solid transparent"; 
			document.querySelector('.tabText3').style.color = "rgb(51, 51, 51)"; 
		}, 100);   

		setTimeout(function() {
			LegalBox.style.animation = "fadeOut 0.5s ease";
		}, 300);

		setTimeout(function() {
			LegalBox.style.opacity = "0";  
		}, 800);

		setTimeout(function() {
			LegalBox.innerHTML = "";
			LegalBox.style.backgroundImage = "url('')";
			LegalBox.style.filter = "brightness(100%)";
			LegalBox.style.width = "90vw"; 
		}, 1000);
	
		setTimeout(function() {
			return termCon();
		}, 1100); 
	
		setTimeout(function() {
			LegalBox.style.animation = "fadeIn 0.5s ease"; 
		}, 1300);
	
		setTimeout(function() {
			LegalBox.style.opacity = "1"; 
		}, 1800);
	});
	
	pp.addEventListener('click', function(){  
		setTimeout(function() {
			document.querySelector('.tabText2').style.borderBottom = "2px solid rgb(51, 51, 51)"; 
			document.querySelector('.tabText2').style.color = "rgb(51, 51, 51)";
			document.querySelector('.tabText1').style.borderBottom = "2px solid transparent"; 
			document.querySelector('.tabText1').style.color = "rgb(51, 51, 51)";
			document.querySelector('.tabText3').style.borderBottom = "2px solid transparent"; 
			document.querySelector('.tabText3').style.color = "rgb(51, 51, 51)";
		}, 500);

		setTimeout(function() {
			LegalBox.style.animation = "fadeOut 0.5s ease";
		}, 300);

		setTimeout(function() {
			LegalBox.style.opacity = "0";  
		}, 800);

		setTimeout(function() {
			LegalBox.innerHTML = "";
			LegalBox.style.backgroundImage = "url('')";
			LegalBox.style.filter = "brightness(100%)";
			LegalBox.style.width = "90vw";
		}, 1000);
	
		setTimeout(function() {
			return termCon2();
		}, 1100); 
	
		setTimeout(function() {
			LegalBox.style.animation = "fadeIn 0.5s ease"; 
		}, 1300);
	
		setTimeout(function() {
			LegalBox.style.opacity = "1"; 
		}, 1800);
	});
	
	excer.addEventListener('click', function(){  
		setTimeout(function() {
			document.querySelector('.tabText3').style.borderBottom = "2px solid rgb(51, 51, 51)"; 
			document.querySelector('.tabText3').style.color = "rgb(51, 51, 51)";
			document.querySelector('.tabText2').style.borderBottom = "2px solid transparent"; 
			document.querySelector('.tabText2').style.color = "rgb(51, 51, 51)";
			document.querySelector('.tabText1').style.borderBottom = "2px solid transparent"; 
			document.querySelector('.tabText1').style.color = "rgb(51, 51, 51)"; 
		}, 100);

		setTimeout(function() {
			LegalBox.style.animation = "fadeOut 0.5s ease";
		}, 300);

		setTimeout(function() {
			LegalBox.style.opacity = "0";  
		}, 800);

		setTimeout(function() {
			LegalBox.innerHTML = ""; 
			LegalBox.style.backgroundImage = "url('')";
			LegalBox.style.filter = "brightness(100%)";
			LegalBox.style.width = "90vw";
		}, 1000);
	
		setTimeout(function() {
			return termCon3();
		}, 1100); 
	
		setTimeout(function() {
			LegalBox.style.animation = "fadeIn 0.5s ease"; 
		}, 1300);
	
		setTimeout(function() {
			LegalBox.style.opacity = "1"; 
		}, 1800);
	});
	
	function termCon(){
		const legalbox1 = document.createElement('article');
		legalbox1.classList.add('legalArt');
		legalbox1.setAttribute('id', 'legalBox1');
		const headLegal = document.createElement('h1');
		headLegal.classList.add('legalHeading');
		headLegal.innerHTML = 'Terms & Conditions';
		const introHead = document.createElement('h2');
		introHead.classList.add('docHeading');
		introHead.innerHTML = 'Introduction';
		const introWaffle = document.createElement('p');
		introWaffle.classList.add('legalWaffle');
		introWaffle.innerHTML = 'Welcome to Bullzerian Solutions, a web development company based in the Free State, South Africa. These Terms and Conditions govern your use of our services. By engaging with our services, you agree to comply with these terms. If you do not agree to these terms, please refrain from using our services.';
		const serviceHead = document.createElement('h2');
		serviceHead.classList.add('docHeading');
		serviceHead.innerHTML = '1. Services Offered';
		const serviceWaffle = document.createElement('p');
		serviceWaffle.classList.add('legalWaffle');
		serviceWaffle.innerHTML = 'Bullzerian Solutions provides a range of web development services, including but not limited to website design, development, maintenance, and digital marketing.';
		const intPropHead = document.createElement('h2');
		intPropHead.classList.add('docHeading');
		intPropHead.innerHTML = '2. Intellectual Property Notice';
		const intPropWaffle = document.createElement('p');
		intPropWaffle.classList.add('legalWaffle');
		intPropWaffle.innerHTML = 'All content, graphics, software, and other materials created by Bullzerian Solutions during the provision of services (collectively referred to as "Intellectual Property") are the exclusive property of Bullzerian Solutions. Clients are granted a non-exclusive, non-transferable license to use the deliverables provided upon full payment. The underlying Intellectual Property rights remain with Bullzerian Solutions.';
		const govHead = document.createElement('h2');
		govHead.classList.add('docHeading');
		govHead.innerHTML = '3. Governing Law and Jurisdiction';
		const govWaffle = document.createElement('p');
		govWaffle.classList.add('legalWaffle');
		govWaffle.innerHTML = 'These Terms and Conditions shall be governed by and construed in accordance with the laws of South Africa. Any disputes arising from or relating to these Terms and Conditions shall be subject to the exclusive jurisdiction of the courts of South Africa.';
		const limitHead = document.createElement('h2');
		limitHead.classList.add('docHeading');
		limitHead.innerHTML = '4. Limitation of Liability';
		const limitWaffle = document.createElement('p');
		limitWaffle.classList.add('legalWaffle');
		limitWaffle.innerHTML = 'To the fullest extent permitted by law, Bullzerian Solutions shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability to you for any claim arising from these Terms and Conditions shall not exceed the amount paid by you for the services rendered.';
		const cpaHead = document.createElement('h2');
		cpaHead.classList.add('docHeading');
		cpaHead.innerHTML = '5. Consumer Protection Act Compliance';
		const cpaWaffle = document.createElement('p');
		cpaWaffle.classList.add('legalWaffle');
		cpaWaffle.innerHTML = 'In accordance with the Consumer Protection Act, you have the right to receive services that are fit for purpose, of good quality, and presented in a manner that is not misleading. If you believe that we have not met your expectations, you may contact us within a reasonable time for resolution.';
		const copyHead = document.createElement('h2');
		copyHead.classList.add('docHeading');
		copyHead.innerHTML = '6. Copyright Notice';
		const copyWaffle = document.createElement('p');
		copyWaffle.classList.add('legalWaffle');
		copyWaffle.innerHTML = 'All original works created by Bullzerian Solutions, including design, code, and written content, are protected under the Copyright Act of South Africa. Clients are granted usage rights as specified under the Intellectual Property Notice above, but any unauthorized use, reproduction, or distribution of copyrighted content is prohibited.';
		const amendHead = document.createElement('h2');
		amendHead.classList.add('docHeading');
		amendHead.innerHTML = '7. Amendments';
		const amendWaffle = document.createElement('p');
		amendWaffle.classList.add('legalWaffle');
		amendWaffle.innerHTML = 'Bullzerian Solutions reserves the right to amend these Terms and Conditions at any time. Changes will become effective upon posting on our website. Your continued use of our services after such changes constitutes your acceptance of the new Terms and Conditions.';
		const contactHead = document.createElement('h2');
		contactHead.classList.add('docHeading');
		contactHead.innerHTML = '8. Contact Information';
		const contactWaffle = document.createElement('p');
		contactWaffle.classList.add('legalWaffle');
		contactWaffle.innerHTML = 'For any questions or concerns regarding these Terms and Conditions, please contact us at:';
		const contactWaffleAgain = document.createElement('p');
		contactWaffleAgain.classList.add('legalWaffle'); 
		contactWaffleAgain.innerHTML = 'Email: mulacapris24@gmail.com';
		const aotHead = document.createElement('h2');
		aotHead.classList.add('docHeading');
		aotHead.innerHTML = '9. Acceptance of Terms';
		const aotWaffle = document.createElement('p');
		aotWaffle.classList.add('legalWaffle');
		aotWaffle.innerHTML = "By using Bullzerian Solutions' services, you acknowledge that you have read, understood, and agree to abide by these Terms and Conditions.";
		
		legalbox1.append(headLegal)
		legalbox1.append(introHead)
		legalbox1.append(introWaffle)
		legalbox1.append(serviceHead)
		legalbox1.append(serviceWaffle)
		legalbox1.append(intPropHead)
		legalbox1.append(intPropWaffle)
		legalbox1.append(govHead)
		legalbox1.append(govWaffle)
		legalbox1.append(limitHead)
		legalbox1.append(limitWaffle)
		legalbox1.append(cpaHead)
		legalbox1.append(cpaWaffle)
		legalbox1.append(copyHead)
		legalbox1.append(copyWaffle) 
		legalbox1.append(amendHead)
		legalbox1.append(amendWaffle)
		legalbox1.append(contactHead)
		legalbox1.append(contactWaffle)
		legalbox1.append(contactWaffleAgain)
		legalbox1.append(aotHead)
		legalbox1.append(aotWaffle)
		LegalBox.append(legalbox1)
	};

	function termCon2(){
		const legalbox2 = document.createElement('article');
		legalbox2.classList.add('legalArt');
		//legalbox2.setAttribute('id', 'legalBox');
		const headLegal2 = document.createElement('h1');
		headLegal2.classList.add('legalHeading');
		headLegal2.innerHTML = 'Privacy Policy';
		
		const introHead2 = document.createElement('h2');
		introHead2.classList.add('docHeading');
		introHead2.innerHTML = 'Introduction';
		
		const introWaffle2 = document.createElement('p');
		introWaffle2.classList.add('legalWaffle');
		introWaffle2.innerHTML = 'Bullzerian Solutions respects your privacy and is committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and protect the information you provide to us in the course of our web development services. By using our services, you consent to the practices described in this policy.';
		
		const serviceHead2 = document.createElement('h2');
		serviceHead2.classList.add('docHeading');
		serviceHead2.innerHTML = '1. Information We Collect';
		
		const serviceWaffle2 = document.createElement('p');
		serviceWaffle2.classList.add('legalWaffle');
		serviceWaffle2.innerHTML = 'We may collect personal information about you when you use our services, which may include your name, email address, phone number, and company information. We also collect non-personal information such as IP address and browsing behavior through cookies and tracking technologies.';
		
		const intPropHead2 = document.createElement('h2');
		intPropHead2.classList.add('docHeading');
		intPropHead2.innerHTML = '2. Purpose of Data Collection';
		
		const intPropWaffle2 = document.createElement('p');
		intPropWaffle2.classList.add('legalWaffle');
		intPropWaffle2.innerHTML = 'The information we collect is used for purposes including but not limited to:<br>Providing and improving our services<br>Communicating with you<br>Responding to your inquiries<br>Conducting marketing and promotional activities<br>Ensuring security and compliance with legal obligations';
		
		const govHead2 = document.createElement('h2');
		govHead2.classList.add('docHeading');
		govHead2.innerHTML = '3. Intellectual Property Notice';
		
		const govWaffle2 = document.createElement('p');
		govWaffle2.classList.add('legalWaffle');
		govWaffle2.innerHTML = 'All content and materials produced by Bullzerian Solutions are protected under copyright law. Clients are granted a non-exclusive, non-transferable license to use deliverables upon full payment. Unauthorized use or reproduction of our intellectual property is prohibited.';
		
		const limitHead2 = document.createElement('h2');
		limitHead2.classList.add('docHeading');
		limitHead2.innerHTML = '4. Governing Law and Jurisdiction';
		
		const limitWaffle2 = document.createElement('p');
		limitWaffle2.classList.add('legalWaffle');
		limitWaffle2.innerHTML = 'This Privacy Policy shall be governed by and construed in accordance with the laws of South Africa. Any disputes arising from this policy shall be subject to the exclusive jurisdiction of the courts of South Africa.';
		
		const cpaHead2 = document.createElement('h2');
		cpaHead2.classList.add('docHeading');
		cpaHead2.innerHTML = '5. Limitation of Liability';
		
		const cpaWaffle2 = document.createElement('p');
		cpaWaffle2.classList.add('legalWaffle');
		cpaWaffle2.innerHTML = 'To the fullest extent permitted by law, Bullzerian Solutions will not be liable for any direct, indirect, incidental, or consequential damages arising from the use of, or reliance on, the information or materials provided in this Privacy Policy or through our services.';
		
		const copyHead2 = document.createElement('h2');
		copyHead2.classList.add('docHeading');
		copyHead2.innerHTML = '6. Protection of Personal Information Act(POPIA)';
		
		const copyWaffle2 = document.createElement('p');
		copyWaffle2.classList.add('legalWaffle');
		copyWaffle2.innerHTML = 'Bullzerian Solutions adheres to the Protection of Personal Information Act (POPIA) in handling your personal information. We take reasonable steps to ensure that your information is processed fairly and lawfully, stored securely, and used only for the intended purposes.';
		
		const amendHead2 = document.createElement('h2');
		amendHead2.classList.add('docHeading');
		amendHead2.innerHTML = '7. Data Security';
		
		const amendWaffle2 = document.createElement('p');
		amendWaffle2.classList.add('legalWaffle');
		amendWaffle2.innerHTML = 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, loss, or misuse. However, please note that no method of transmission over the internet or electronic storage can be guaranteed to be 100% secure.';
		
		const contactHead2 = document.createElement('h2');
		contactHead2.classList.add('docHeading');
		contactHead2.innerHTML = '8. Third-Party Disclosure';
		
		const contactWaffle2 = document.createElement('p');
		contactWaffle2.classList.add('legalWaffle');
		contactWaffle2.innerHTML = 'We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except as required by law or to provide our services. We may share aggregated demographic information that is not linked to any personal identification information with our business partners and advertisers.';
		
		const yourRights = document.createElement('h2');
		yourRights.classList.add('docHeading');
		yourRights.innerHtml = '9. Your Rights';
		
		const yourRightsWaffle = document.createElement('p');
		yourRightsWaffle.classList.add('legalWaffle');
		yourRightsWaffle.innerHTML = 'Under POPIA, you have the right to request access to your personal information, request correction of any inaccuracies, and object to the processing of your personal information. To exercise these rights, please contact us using the contact information below.';
		
		const bruhAmend = document.createElement('h2');
		bruhAmend.classList.add('docHeading');
		bruhAmend.innerHTML = '10. Amendments';

		const bruhAmendWaffle = document.createElement('p');
		bruhAmendWaffle.classList.add('legalWaffle');
		bruhAmendWaffle.innerHTML = 'Bullzerian Solutions reserves the right to amend this Privacy Policy at any time. Changes will be effective upon posting the updated policy on our website. Your continued use of our services after such changes constitutes your acceptance of the new Privacy Policy.';


		const contactWaffleAgainHead2 = document.createElement('h2');
		contactWaffleAgainHead2.classList.add('docHeading'); 
		contactWaffleAgainHead2.innerHTML = '11. Contact Information';

		const contactWaffleAgain2 = document.createElement('p');
		contactWaffleAgain2.classList.add('legalWaffle'); 
		contactWaffleAgain2.innerHTML = 'Email: mulacapris24@gmail.com';
		
		const aotHead2 = document.createElement('h2');
		aotHead2.classList.add('docHeading');
		aotHead2.innerHTML = '12. Acceptance of Policy';

		const aotWaffle2 = document.createElement('p');
		aotWaffle2.classList.add('legalWaffle');
		aotWaffle2.innerHTML = "By using Bullzerian Solutions’ services, you acknowledge that you have read, understood, and agree to abide by this Privacy Policy.";
		
		legalbox2.append(headLegal2)
		legalbox2.append(introHead2)
		legalbox2.append(introWaffle2)
		legalbox2.append(serviceHead2)
		legalbox2.append(serviceWaffle2)
		legalbox2.append(intPropHead2)
		legalbox2.append(intPropWaffle2)
		legalbox2.append(govHead2)
		legalbox2.append(govWaffle2)
		legalbox2.append(limitHead2)
		legalbox2.append(limitWaffle2)
		legalbox2.append(cpaHead2)
		legalbox2.append(cpaWaffle2)
		legalbox2.append(copyHead2)
		legalbox2.append(copyWaffle2) 
		legalbox2.append(amendHead2)
		legalbox2.append(amendWaffle2)
		legalbox2.append(contactHead2)
		legalbox2.append(contactWaffle2)
		legalbox2.append(yourRights)
		legalbox2.append(yourRightsWaffle)
		legalbox2.append(bruhAmend)
		legalbox2.append(bruhAmendWaffle)
		legalbox2.append(contactWaffleAgainHead2)
		legalbox2.append(contactWaffleAgain2)
		legalbox2.append(aotHead2)
		legalbox2.append(aotWaffle2)
		LegalBox.append(legalbox2)
	};

	function termCon3(){
		const legalbox3 = document.createElement('article');
		legalbox3.classList.add('legalArt');
		//legalbox3.setAttribute('id', 'legalBox');
		const headLegal3 = document.createElement('h1');
		headLegal3.classList.add('legalHeading');
		headLegal3.innerHTML = 'Cookie Policy';
		
		const introHead3 = document.createElement('h2');
		introHead3.classList.add('docHeading');
		introHead3.innerHTML = 'Introduction';
		
		const introWaffle3 = document.createElement('p');
		introWaffle3.classList.add('legalWaffle');
		introWaffle3.innerHTML = 'This Cookie Policy explains how Bullzerian Solutions ("we," "us," or "our") uses cookies and similar technologies on our website. By using our website, you consent to the use of cookies as described in this policy. This policy aims to help you understand what cookies are, how we use them, and how you can manage your cookie preferences.';
		
		const serviceHead3 = document.createElement('h2');
		serviceHead3.classList.add('docHeading');
		serviceHead3.innerHTML = '1. What Are Cookies';
		
		const serviceWaffle3 = document.createElement('p');
		serviceWaffle3.classList.add('legalWaffle');
		serviceWaffle3.innerHTML = 'Cookies are small text files that are placed on your device by a web server when you visit a website. They help the website function effectively and provide information to the website owners. Cookies can be "session cookies," which are deleted when you close your browser, or "persistent cookies," which remain on your device for a specified period or until you delete them.';
		
		const intPropHead3 = document.createElement('h2');
		intPropHead3.classList.add('docHeading');
		intPropHead3.innerHTML = '2. Types of Cookies We Use';
		
		const intPropWaffle3 = document.createElement('p');
		intPropWaffle3.classList.add('legalWaffle');
		intPropWaffle3.innerHTML = '<strong>Essential Cookies</strong>:<br>These cookies are necessary for the operation of our website and enable core functionalities such as security, network management, and accessibility.<strong>Analytics Cookies</strong>:<br>We use Google Analytics 4 to collect data on website usage. These cookies help us understand how visitors interact with our site, enabling us to improve its performance and user experience. The information collected is aggregated and anonymous.';
		
		const govHead3 = document.createElement('h2');
		govHead3.classList.add('docHeading');
		govHead3.innerHTML = '3. Intellectual Property Notice';
		
		const govWaffle3 = document.createElement('p');
		govWaffle3.classList.add('legalWaffle');
		govWaffle3.innerHTML = 'All content, designs, and technologies associated with Bullzerian Solutions, including our website and its cookies, are protected under copyright law. Unauthorized use of any material is prohibited.';
		
		const limitHead3 = document.createElement('h2');
		limitHead3.classList.add('docHeading');
		limitHead3.innerHTML = '4. Governing Law & Jurisdiction';
		
		const limitWaffle3 = document.createElement('p');
		limitWaffle3.classList.add('legalWaffle');
		limitWaffle3.innerHTML = 'This Cookie Policy shall be governed by and construed in accordance with the laws of South Africa. Any disputes arising from or related to this policy shall be subject to the exclusive jurisdiction of the courts of South Africa.';
		
		const cpaHead3 = document.createElement('h2');
		cpaHead3.classList.add('docHeading');
		cpaHead3.innerHTML = '5. Limitation of Liablility';
		
		const cpaWaffle3 = document.createElement('p');
		cpaWaffle3.classList.add('legalWaffle');
		cpaWaffle3.innerHTML = 'To the fullest extent permitted by law, Bullzerian Solutions shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of cookies or reliance on the information provided in this Cookie Policy.';
		
		const copyHead3 = document.createElement('h2');
		copyHead3.classList.add('docHeading');
		copyHead3.innerHTML = '6. Third-Party Cookies';
		
		const copyWaffle3 = document.createElement('p');
		copyWaffle3.classList.add('legalWaffle');
		copyWaffle3.innerHTML = "In addition to our own cookies, we may also use third-party cookies from service providers, such as Google Analytics 4. These parties may collect user data independently and are governed by their own privacy policies. For information on Google’s use of data, please visit: <a href="https://policies.google.com/privacy">Google's Privacy Policy</a>.";
		
		const amendHead3 = document.createElement('h2');
		amendHead3.classList.add('docHeading');
		amendHead3.innerHTML = '7. Amendments';
		
		const amendWaffle3 = document.createElement('p');
		amendWaffle3.classList.add('legalWaffle');
		amendWaffle3.innerHTML = 'Bullzerian Solutions reserves the right to amend this Cookie Policy at any time. Updates will be effective upon posting on our website. Your continued use of our website after such changes constitutes your acceptance of the new Cookie Policy.';
		
		const contactHead3 = document.createElement('h2');
		contactHead3.classList.add('docHeading');
		contactHead3.innerHTML = '8. Contact Information';
		
		const contactWaffle3 = document.createElement('p');
		contactWaffle3.classList.add('legalWaffle');
		contactWaffle3.innerHTML = 'For any questions or concerns regarding this Cookie Policy, please contact us at:';
		
		const contactWaffleAgain3 = document.createElement('p');
		contactWaffleAgain3.classList.add('legalWaffle'); 
		contactWaffleAgain3.innerHTML = 'Email: mulacapris24@gmail.com';
		
		const aotHead3 = document.createElement('h2');
		aotHead3.classList.add('docHeading');
		aotHead3.innerHTML = '9. Acceptance of Policy';
		
		const aotWaffle3 = document.createElement('p');
		aotWaffle3.classList.add('legalWaffle');
		aotWaffle3.innerHTML = "By using our website, you acknowledge that you have read, understood, and agree to abide by this Cookie Policy.";
		
		legalbox3.append(headLegal3)
		legalbox3.append(introHead3)
		legalbox3.append(introWaffle3)
		legalbox3.append(serviceHead3)
		legalbox3.append(serviceWaffle3)
		legalbox3.append(intPropHead3)
		legalbox3.append(intPropWaffle3)
		legalbox3.append(govHead3)
		legalbox3.append(govWaffle3)
		legalbox3.append(limitHead3)
		legalbox3.append(limitWaffle3)
		legalbox3.append(cpaHead3)
		legalbox3.append(cpaWaffle3)
		legalbox3.append(copyHead3)
		legalbox3.append(copyWaffle3) 
		legalbox3.append(amendHead3)
		legalbox3.append(amendWaffle3)
		legalbox3.append(contactHead3)
		legalbox3.append(contactWaffle3)
		legalbox3.append(contactWaffleAgain3)
		legalbox3.append(aotHead3)
		legalbox3.append(aotWaffle3)
		LegalBox.append(legalbox3)
	};

   document.getElementById('newClientForm').addEventListener('submit', async (e) => {
      e.preventDefault();

      const businessName = document.getElementById('businessName').value;
      const enterpriseNumber = document.getElementById('enterpriseNumber').value;
	const businessAddress = document.getElementById('businessAddress').value;
      const email = document.getElementById('email').value;
	const phone = document.getElementById('phone').value;
      const whatsapp = document.getElementById('whatsapp').value;
	const brandID = document.getElementById('brandID').value;
      const facebook = document.getElementById('facebook').value;
	   const instagram = document.getElementById('instagram').value;
      const youtube = document.getElementById('youtube').value;
	const industryName = document.getElementById('industryName').value;
      const other = document.getElementById('other').value;
	const primaryColour = document.getElementById('primaryColour').value;
      const secondaryColour = document.getElementById('secondaryColour').value;
	const tertiaryColour = document.getElementById('tertiaryColour').value;
      const merch = document.getElementById('merch').value;
	   const products = document.getElementById('products').value;
	const services = document.getElementById('services').value;
      const cart = document.getElementById('cart').value;
	const clientTestimonials = document.getElementById('clientTestimonials').value;
      const login = document.getElementById('login').value;
	const termCons = document.getElementById('termCons').value;
      const privyTerms = document.getElementById('privyTerms').value;

      const data = { 
	businessName: businessName,
  	enterpriseNumber: enterpriseNumber,
  	businessAddress: businessAddress,
  	email: email,
  	phone: phone,
  	whatsapp: whatsapp,
  	brandID: brandID,
  	facebook: facebook,
  	instagram: instagram,
  	youtube: youtube,
  	industryName: industryName,
  	other: other,
  	primaryColour: primaryColour,
  	secondaryColour: secondaryColour,
  	tertiaryColour: tertiaryColour,
  	merch: merch,
  	products: products,
  	services: services,
  	cart: cart,
  	clientTestimonials: clientTestimonials,
  	login: login,
  	termCons: termCons,
  	privyTerms: privyTerms
        timestamp: new Date().toISOString()
      };

      try {
        const response = await fetch('https://api.jsonbin.io/v3/b/67abf885acd3cb34a8de6b9c', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': '$2a$10$6ULTbNCMPGrULbeC4JF8vur1Xx9nKAbLtrd2fMyZWkKL4aQ6ooCyu'
          },
          body: JSON.stringify(data)
        });

        if (response.ok) {
          alert('Data submitted successfully!');
        } else {
          alert('Failed to submit data.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
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

   document.getElementById('newClientForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  // Get form values
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
  const other = document.getElementById('otherLtdType').value;
  const primaryColour = document.getElementById('primaryCo').value;
  const secondaryColour = document.getElementById('secondaryCo').value;
  const tertiaryColour = document.getElementById('tertiaryCo').value;
  const merch = document.getElementById('merchandise').value;
  const products = document.getElementById('productPage').value;
  const services = document.getElementById('servicePage').value;
  const cart = document.getElementById('cartOpt').value;
  const clientTestimonials = document.getElementById('clientTest').value;
  const login = document.getElementById('loginFun').value;
  const termCons = document.getElementById('Ts&Cs').value;
  const privyTerms = document.getElementById('pp').value;

  // Create data object
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
    privyTerms: privyTerms,
    timestamp: new Date().toISOString()
  };

  // Wrap the data object in a list
  const dataList = [data];

  try {
    const response = await fetch('https://api.jsonbin.io/v3/b/67abf885acd3cb34a8de6b9c', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': '$2a$10$6ULTbNCMPGrULbeC4JF8vur1Xx9nKAbLtrd2fMyZWkKL4aQ6ooCyu'
      },
      body: JSON.stringify(dataList) // Send the list of objects
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

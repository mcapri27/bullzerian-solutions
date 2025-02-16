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
  const industryName = document.querySelector('input[name="industryName"]:checked').value;
  const other = document.getElementById('otherLtdType').value;
  const primaryColour = document.getElementById('primaryCo').value;
  const secondaryColour = document.getElementById('secondaryCo').value;
  const tertiaryColour = document.getElementById('tertiaryCo').value;
  const merch = document.querySelector('input[name="merch"]:checked')?.value || null;
  const products = document.querySelector('input[name="products"]:checked')?.value || null;
  const services = document.querySelector('input[name="services"]:checked')?.value || null;
  const cart = document.querySelector('input[name="cart"]:checked')?.value || null;
  const clientTestimonials = document.querySelector('input[name="clientTestimonials"]:checked')?.value || null;
  const login = document.querySelector('input[name="login"]:checked')?.value || null;
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
    options: {merch: merch,
    products: products,
    services: services,
    cart: cart,
    clientTestimonials: clientTestimonials,
    login: login,},
    termCons: termCons,
    privyTerms: privyTerms,
    timestamp: new Date().toISOString()
  };

  try {
    // Fetch the existing data from the bin
    const getResponse = await fetch('https://api.jsonbin.io/v3/b/67b2037fe41b4d34e4903ba2', {
      method: 'GET',
      headers: {
        'X-Master-Key': '$2a$10$6ULTbNCMPGrULbeC4JF8vur1Xx9nKAbLtrd2fMyZWkKL4aQ6ooCyu' // Replace with your actual master key
      }
    });

    if (!getResponse.ok) {
      throw new Error('Failed to fetch existing data');
    }

    const existingData = await getResponse.json();
    const existingSubmissions = existingData.record || [];

    // Append the new submission to the existing list
    const updatedSubmissions = [...existingSubmissions, data];

    // Update the bin with the new list of submissions
    const putResponse = await fetch('https://api.jsonbin.io/v3/b/67b2037fe41b4d34e4903ba2', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': '$2a$10$6ULTbNCMPGrULbeC4JF8vur1Xx9nKAbLtrd2fMyZWkKL4aQ6ooCyu' // Replace with your actual master key
      },
      body: JSON.stringify(updatedSubmissions)
    });

    if (putResponse.ok) {
      alert('Data submitted successfully!');
    } else {
      alert('Failed to submit data.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred while submitting the data.');
  }

  // Handle the "Other" industry checkbox
  if (document.getElementById('otherPress').checked) {
    document.getElementById('otherLtdType').setAttribute('required', '');
  } else {
    console.log("Standard Industry");
    document.getElementById('otherLtdType').removeAttribute('required');
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


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

    // Function to get the value of a radio button group, allowing unselection
    const getRadioValue = (name) => {
        const radio = document.querySelector(`input[name="${name}"]:checked`);
        return radio ? radio.value : null;
    };
  
    // Create data object
    const data = {
      businessName: businessName,
      enterpriseNumber: enterpriseNumber,
      businessAddress: businessAddress,
      email: email,
      phone: "+27" + phone,
      whatsapp: "+27" + whatsapp,
      brandID: brandID,
      facebook: facebook,
      instagram: instagram,
      youtube: youtube,
      industryName: industryName,
      other: other,
      primaryColour: primaryColour,
      secondaryColour: secondaryColour,
      tertiaryColour: tertiaryColour,
      options: {
          merch: getRadioValue(merch),
      products: getRadioValue(products),
      services: getRadioValue(services),
      cart: getRadioValue(cart),
      clientTestimonials: getRadioValue(clientTestimonials),
      login: getRadioValue(login),},
      termCons: termCons,
      privyTerms: privyTerms,
      timestamp: new Date().toISOString()
    };
  
    try {
      // Fetch the existing data from the bin
      const getResponse = await fetch('https://api.jsonbin.io/v3/b/67b25aa2ad19ca34f8064b71', {
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
      const putResponse = await fetch('https://api.jsonbin.io/v3/b/67b25aa2ad19ca34f8064b71', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': '$2a$10$6ULTbNCMPGrULbeC4JF8vur1Xx9nKAbLtrd2fMyZWkKL4aQ6ooCyu' // Replace with your actual master key
        },
        body: JSON.stringify(updatedSubmissions)
      });
  
      if (putResponse.ok) {
        setTimeout(() => {
            document.querySelector(".dom").style.animationName = "fadeOut";
            document.querySelector(".dom").style.animationDuration = "0.75s";
            document.querySelector(".dom").style.animationTimingFunction = "ease";
          }, 100);
        
          setTimeout(() => {
            document.querySelector(".scaffold").style.display = "flex";
          }, 850); 
      } else {
        setTimeout(() => {
            document.querySelector(".dom").style.animationName = "fadeOut";
            document.querySelector(".dom").style.animationDuration = "0.75s";
            document.querySelector(".dom").style.animationTimingFunction = "ease";
          }, 100);
        
          setTimeout(() => {
            document.querySelector(".scaffold2").style.display = "flex";
          }, 850);
      }
    } catch (error) {
      //console.error('Error:', error);
      setTimeout(() => {
        document.querySelector(".dom").style.animationName = "fadeOut";
        document.querySelector(".dom").style.animationDuration = "0.75s";
        document.querySelector(".dom").style.animationTimingFunction = "ease";
      }, 100);
    
      setTimeout(() => {
        document.querySelector(".scaffold2").style.display = "flex";
      }, 850);
    }
  }
);

// Add event listeners to radio buttons to allow unselecting
document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('click', function () {
        if (this.checked && this.dataset.checked === 'true') {
            this.checked = false;
            this.dataset.checked = 'false';
        } else {
            this.dataset.checked = 'true';
        }
    });
});

document.getElementById('otherPress').addEventListener('click', () => {
    document.getElementById('otherLtdType').required = true;
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

  document.getElementById('okayButt').addEventListener('click', () => { 
    setTimeout(() => {
      document.querySelector(".scaffold").style.animationName = "fadeOut";
      document.querySelector(".scaffold").style.animationDuration = "0.75s";
      document.querySelector(".scaffold").style.animationTimingFunction = "ease";
    }, 100); 

    setTimeout(() => {
        document.querySelector(".scaffold").style.display = "none";
      }, 850);
  });

  document.getElementById('okayButt2').addEventListener('click', () => { 
    setTimeout(() => {
      document.querySelector(".scaffold2").style.animationName = "fadeOut";
      document.querySelector(".scaffold2").style.animationDuration = "0.75s";
      document.querySelector(".scaffold2").style.animationTimingFunction = "ease";
    }, 100); 

    setTimeout(() => {
        document.querySelector(".scaffold2").style.display = "none";
      }, 850);
  });

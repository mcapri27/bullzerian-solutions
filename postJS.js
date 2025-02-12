   document.getElementById('myForm').addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;

      const data = {
        name: name,
        email: email,
        timestamp: new Date().toISOString()
      };

      try {
        const response = await fetch('https://api.jsonbin.io/v3/b/YOUR_BIN_ID', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': 'YOUR_MASTER_KEY'
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

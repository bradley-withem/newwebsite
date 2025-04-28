document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('charities-container');

  const apiKey = 'live-0dHojjM0D7iBQNe4W80QEKkR8burf9BgBGs6idaMEph_GvTcd1NQpY-F2bCIvNbHU0tWFcnJtObpKInx';  // <<-- Put your key here
  const apiUrl = 'https://api.data.charityapi.org/v1/charities?limit=5';  // This should be the correct URL

  fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data); 
    container.innerHTML = ''; 

    
    if (data && data.charities && data.charities.length > 0) {
      data.charities.forEach(charity => {
        const charityCard = document.createElement('div');
        charityCard.className = 'charity-card';
        charityCard.innerHTML = `
          <h2>${charity.name}</h2>
          <p><strong>Location:</strong> ${charity.location || 'Unknown'}</p>
          <p>${charity.description || 'No description available.'}</p>
        `;
        container.appendChild(charityCard);
      });
    } else {
      container.innerHTML = `<p>No charities found.</p>`;
    }
  })
  .catch(error => {
    console.error('Fetch error:', error);
    container.innerHTML = `<p>Could not load charities. Please try again later.</p>`;
  });
});

let medications;

fetch('../siteData/medications.json')
  .then(response => response.json()) // Parse the response as JSON
  .then(data => {
    medications = data;

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const value = data[key];

        
      }
    }
  })
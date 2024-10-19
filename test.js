fetch('https://webapi.omoloko.ru/api/v1/products')
  .then(response => {
    if (!response.ok) { // Check if response status is not OK (e.g., 404 or 500)
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the JSON from the response
  })
  .then(data => {
    console.log(data); // Use the retrieved data
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

// TODO: catch errors, for example internert disonnection

// TODO: several pages for different devices' sizes

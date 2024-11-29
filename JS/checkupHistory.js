const buttonsDiv = document.getElementById('first');
const displayDiv = document.getElementById('second');

var divList = [];

function displayDetails(checkup) {
    displayDiv.replaceChildren();
    let result = "";

    for(const prop in checkup) {
        const checkupText = document.createElement('p');
        checkupText.textContent = prop + `: ${checkup[prop]}`;
        displayDiv.append(checkupText);
    }

    checkupText.textContent = result;
}

fetch('../siteData/checkups.json')
  .then(response => response.json()) // Parse the response as JSON
  .then(data => {
    for (const key in data) {
        // For each object in JSON, make a section in the page

      if (data.hasOwnProperty(key)) {
        const value = data[key];
        console.log(`Key: ${key}, Value:`, value);

        for (const prop in value) {
            if (value.hasOwnProperty(prop)) {
                if(prop == "Checkup Date") {
                    const checkupButton = document.createElement('button');
                    checkupButton.textContent = `Checkup on ${value[prop]}`;
                    checkupButton.id = "checkupButton";
                    checkupButton.addEventListener('click', () => displayDetails(value));
                    buttonsDiv.append(checkupButton);

                    const br = document.createElement("br");
                    buttonsDiv.appendChild(br);
                }
            }
        }
      }
    }
})
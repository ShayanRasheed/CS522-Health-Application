const buttonsDiv = document.getElementById('first');
const displayDiv = document.getElementById('second');

let checkupList;
let healthChart;

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
    checkupList = data;
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
                    checkupButton.className = "checkupButton";
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

document.getElementById("submitBtn").addEventListener("click", evaluateTrend);

function evaluateTrend() {
    

    const sDate = document.getElementById("start-date").value;
    const eDate = document.getElementById("end-date").value;
    const metric = document.getElementById("metric").value;

    if(sDate == "" || eDate == "" || metric == "") {
      return;
    }

    const startDate = new Date(sDate);
    const endDate = new Date(eDate);

    if(endDate <= startDate) {
      return;
    }

    // Filter data based on the time frame
    const filteredData = checkupList.filter(entry => {
        const checkupDate = new Date(entry["Checkup Date"]);
        return checkupDate >= startDate && checkupDate <= endDate;
    });

    console.log(filteredData);

    const labels = filteredData.map(entry => entry["Checkup Date"]);
    const values = filteredData.map(entry => entry[metric]);

    if(healthChart) {
        healthChart.destroy();
    }

    const ctx = document.getElementById('healthChart').getContext('2d');
    healthChart = new Chart(ctx, {
    type: 'line', // Line chart
        data: {
            labels: labels, // X-axis (dates)
            datasets: [{
            label: metric,
            data: values, // Y-axis (metric values)
            borderColor: 'blue',
            backgroundColor: 'rgba(0, 0, 255, 0.1)',
            fill: true,
            tension: 0.2
            }]
        },
        options: {
            responsive: true,
            plugins: {
            legend: { display: true },
            tooltip: { enabled: true }
            },
            scales: {
            x: { title: { display: true, text: 'Date' } },
            y: { title: { display: true, text: metric } }
            }
        }
    });
  }
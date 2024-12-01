const listDiv = document.getElementById('first');
const displayDiv = document.getElementById('second');

let appointments;

fetch('../siteData/appointments.json')
  .then(response => response.json()) // Parse the response as JSON
  .then(data => {
    appointments = data;

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const value = data[key];
        console.log(`Key: ${key}, Value:`, value);
        
        const apptDiv = document.createElement('div');
        apptDiv.id = "appointment";

        const title = document.createElement('p');
        title.textContent = value["appointmentName"];

        const location = document.createElement('p');
        location.textContent = value["location"];

        const dateTime = document.createElement('p');
        dateTime.textContent = value["date"] + " @ " + value["time"];

        const purpose = document.createElement('p');
        purpose.textContent = "Details: " + value["purpose"];

        apptDiv.append(title);
        apptDiv.append(location);
        apptDiv.append(dateTime);
        apptDiv.append(purpose);
        apptDiv.id = "appt";

        listDiv.append(apptDiv);
      }
    }
  })

  const filter = document.getElementById("filter")
  filter.addEventListener("change", filterList);

  function filterList() {
    const type = filter.value;
    listDiv.replaceChildren();
    listDiv.append(filter);

    for (const key in appointments) {
        if (appointments.hasOwnProperty(key)) {
            const value = appointments[key];

            if(type == "None" || type == value["appointmentType"]) {
                const apptDiv = document.createElement('div');
                apptDiv.id = "appointment";
        
                const title = document.createElement('p');
                title.textContent = value["appointmentName"];
        
                const location = document.createElement('p');
                location.textContent = value["location"];
        
                const dateTime = document.createElement('p');
                dateTime.textContent = value["date"] + " @ " + value["time"];
        
                const purpose = document.createElement('p');
                purpose.textContent = "Details: " + value["purpose"];
        
                apptDiv.append(title);
                apptDiv.append(location);
                apptDiv.append(dateTime);
                apptDiv.append(purpose);
                apptDiv.id = "appt";
        
                listDiv.append(apptDiv);
            }
        }
    }
  }
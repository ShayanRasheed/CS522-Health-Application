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

            if(type == "None" || type == "" || type == value["appointmentType"]) {
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

document.getElementById("submitBtn").addEventListener("click", addNewAppt);

function addNewAppt() {

    const newApptName = document.getElementById("apptName").value;
    const newApptType = document.getElementById("type").value;
    const newDate = document.getElementById("apptDate").value;
    const newTime = document.getElementById("apptTime").value;
    const newPurpose = document.getElementById("apptDetails").value;
    const newLoc = document.getElementById("location").value;

    if(newApptName == "" || newApptType == "" || newDate == "" || newTime == "" || newPurpose == "" || newLoc == "") {
        return;
    }

    let newAppointment = {
        appointmentName: newApptName,
        appointmentType: newApptType,
        date: newDate,
        time: newTime,
        purpose: newPurpose,
        location: newLoc
    };

    let dateAdded = false;
    for(let i = 0; i < appointments.length; i++) {
        const curDate = new Date(appointments[i]["date"]);
        const addingDate = new Date(newDate);

        if(addingDate < curDate) {
            appointments.splice(i, 0, newAppointment);
            dateAdded = true;
            break;
        }
    }
    if(!dateAdded) {
        appointments.push(newAppointment);
    }

    console.log(appointments);

    filterList();
}
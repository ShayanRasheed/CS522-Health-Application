const listDiv = document.getElementById('first');
const displayDiv = document.getElementById('second');

let appointments;
let apptList = [];
let generalList = [];
let dentalList = [];
let visionList = [];
let specialistList = [];
let therapyList = [];
let nutritionList = [];

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

        apptList.push(apptDiv);

        if(value["appointmentType"] == "General Checkup") {
            generalList.push(apptDiv);
        }
        else if(value["appointmentType"] == "Dental") {
            dentalList.push(apptDiv);
        }
        else if(value["appointmentType"] == "Vision") {
            visionList.push(apptDiv);
        }
        else if(value["appointmentType"] == "Specialist") {
            specialistList.push(apptDiv);
        }
        else if(value["appointmentType"] == "Therapy") {
            therapyList.push(apptDiv);
        }
        else if(value["appointmentType"] == "Nutrition") {
            nutritionList.push(apptDiv);
        }

        listDiv.append(apptDiv);
      }
    }
  })
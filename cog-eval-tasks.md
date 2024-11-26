# Tasks Needed within Health Application:

### UI Prototype

### User Scenario

### Task List (and Action Sequence)

### Problem Reporting Info

## App. High Level Functionalities

1. Apt. Handling
2. Health Trending Info
3. Recommended Follow-up Actions
4. Medication Management

* Users are chronic illness patients who may likely have multiple providers/medications and important trends to track

## During the process, you have to answer 4 questions.
* Before each step, ask these 3 questions in the following order:
1. Will the user try to achieve the right effect? 
2. Will the user notice that the correct action is available?
3. Will the user associate the correct action with the effect that the user is trying to achieve?
* Ask this question after each step in the user's flow.
4. Will the user see that progress is being made toward the solution of the task? 

## User Scenarios & Task Lists

1. Apt. Handling (App Functionality #1)
- User Scenario: User would like to add an appointment to the list automatically
- Goal: Appointment auto. added to user profile
- Steps:
* User enters dashboard
* User clicks into appointments tab
* User hovers over calendar view to select 'Add Appointment(s)'
* User selects 'Add from JSON file' and selects EHR JSON file
* Calendar populates with new appointment(s)

2. Apt. Handling (App Functionality #1)
- User Scenario: User would like to add an appointment to the list manually
- Goal: Appointment manually added to user profile
- Steps:
* User enters dashboard
* User clicks into appointments tab
* User hovers over calendar view to select 'Add Appointment(s)'
* User selects 'Manual Add'
* User selects Date/Time of apt.
* User types in relevant medical office systems (e.g. UIHealth, Rush, UChicago, etc.) and provider name
* Calendar populates with new appointment(s)

3. Health Trending Info (App Functionality #2)
- User Scenario: User wants to see BP trends within the last 2 months
- Goal: Graphical view of BP trend
- Steps:
* User enters dashboard
* User clicks into 'Trends' tab
* User sees 'Visit/Lab History' with a waterfall view of past visits and labs done across different health systems
* User selects 'BP (Blood Pressure)' under trends filter and inputs date range of past two months for trend forecast
* User selects either tabular or graphical view, and selects graphical view 
* User interacts with graphical view to find a specific date within the past two months

4. Recommender System (App Functionality #3)
- User Scenario: User wants to read their trends following a recent check-up & blood test on 31 Oct
- Goal: 'Recommendations & Follow-up(s)' Tab displays updated information
- Steps:
	1. 
		* User enters dashboard
		* User selects 'Update Patient' Tab
		* User uploads their latest FHIR JSON file
		* Dashboard displays 'EHR Data Successfully Parsed!'
	2.
		* User returns to dashboard and hovers over to 'Recommendations & Follow-up(s)' Tab
		* User selects 31/10 appointment from drop down
		* User interacts with follow-up information as needed

5. Medication Management (App Functionality #4)
- User Scenario: To be able to get daily notifications for a specific medication
- Goal: User receives notifications for their daily 500mg Tylenol
- Steps:
	* User enters dashboard
	* User clicks into 'Medications' tab
	* User interacts with page to select 'Tylenol' from medication list
	* User selects 'Notifications' under the Tylenol page
	* User selects frequency to be set as daily, and opts in for emails


Notable Feedback:
- Interaction options should be easy to find and not buried under menus
- Setup for checkup analysis could potentially be confusing in terms of layout, make sure that options are easy to find and timeframe is clearly visible to user
- Notifications are the most useful feature and should be front and center in the application
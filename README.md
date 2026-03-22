# Assignment 5

## Project Overview

This API manages event registration with comprehensive Joi data validation. It provides a list of upcoming events with detailed information, retrieves specific events by their unique ID, and allows users to create new events, update existing ones, and cancel them when needed.

This API is designed for anyone interested in attending or organizing events. Whether you're an event organizer managing registrations or an attendee discovering new events to join, this API provides a reliable backend service for seamless event management.

## Installation Instructions
### Prerequisites
- Node.js (version 20.x or higher)
- npm 

### Steps
1. Open Command prompt/Terminal
For window, press 'win + R', then type 'cmd' and press enter
For Mac, press 'cmd + space', then type 'terminal' and press enter

2. Copy the Repository
Copy and paste the command below into your terminal:
git clone https://github.com/Hh41-2/COMP_3018_Assignment_05.git

Press enter and wait for it to finish.

3. Move to the project folder
Copy and paste the command below into your terminal:
cd COMP_3018_Assignment_05

Press enter and you will be moved to the directory

If you are using VSCode, type and run this command 'code .' to open the project in VSCode.

4. Install dependencies
Copy and paste the command below into your terminal or in VSCode:
npm install

This will install all the necessary dependencies needed for this project.

5. Environment variable setup
You will find a small symbol for new file if you hover your mouse over 
the title of this project on the left panel (ex. COMP_3018_Assignment_05).

Click 'New File' and create a new file called '.env'. 
Once you create '.env' file, you will copy and paste codes below into your file.

NODE_ENV=development
PORT=3000
FIREBASE_PROJECT_ID=bed-demo-g3a74
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nSOME_KEY\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-k9r4p@cloud-project-b7c31.iam.gserviceaccount.com
SWAGGER_SERVER_URL=http://localhost:3000/api/v1

Next, 
Search 'firebase console' and click 'Firebase - Firebase Console'.
On the top right corner, you will find 'Go to console' and click that.

Next,
Select or create (if not created yet) your project.
Follow the steps and continues until it creates your new project.
Once you create your project, click your project and it will navigate to your new project.

Next,
Click 'setting' from the left panel, then 'service account' and 
you will find 'generate new private key' at the bottom of the page.
Click it and it will download the json file.

Next, 
Right click the json file and open it with notepad.
Find matching lines with these three lines below from the json file opened with notepad,
replace your project_id, private_key, and client email in '.env' file. 

FIREBASE_PROJECT_ID=bed-demo-g3a74
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nSOME_KEY\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-k9r4p@cloud-project-b7c31.iam.gserviceaccount.com

Then save it.

Now you are all set to go.

6. Start the server
Copy and paste the command below into your terminal:
npm run server

This will start the local server running on port 3000.

7. Test your API
Open your web browser and paste the command below:
http://localhost:3000

This will print 'Hello, World'. This means its working correctly.

To test various endpoints, use Postman or Bruno.

## API Request Examples
### Health Check
Copy and paste the command below into your web: 
http://localhost:3000/api/v1/health

Copy and paste the command below into your terminal:
curl http://localhost:3000/api/v1/health

Response (200 OK)
{
  "status": "OK",
  "uptime": 9.3270499,
  "timestamp": "2026-03-22T22:49:01.742Z",
  "version": "1.0.0"
}

### Get all events
Copy and paste the command below into your web: 
http://localhost:3000/api/v1/events

Copy and paste the command below into your terminal:
curl http://localhost:3000/api/v1/events

Response (200 OK)
{
  "message": "Event retrieved",
  "count": 1,
  "data": [
    {
      "id": "tZPXEZr971A7cyN6HRBK",
      "name": "sample event 1",
      "date": {
        "_seconds": 1797762600,
        "_nanoseconds": 0
      },
      "capacity": 100,
      "registrationCount": 0,
      "status": "active",
      "category": "conference",
      "createdAt": "2026-03-22T04:25:16.494Z",
      "updatedAt": "2026-03-22T04:25:16.494Z"
    }
  ]
}

### Get a single event with id 
Copy and paste the command below into your web: 
http://localhost:3000/api/v1/events/tZPXEZr971A7cyN6HRBK

Copy and paste the command below into your terminal:
curl http://localhost:3000/api/v1/events/tZPXEZr971A7cyN6HRBK

Response (200 OK)
{
  "message": "Event retrieved",
  "data": {
    "id": "tZPXEZr971A7cyN6HRBK",
    "name": "sample event 1",
    "date": {
      "_seconds": 1797762600,
      "_nanoseconds": 0
    },
    "capacity": 100,
    "registrationCount": 0,
    "status": "active",
    "category": "conference",
    "createdAt": "2026-03-22T04:25:16.494Z",
    "updatedAt": "2026-03-22T04:25:16.494Z"
  }
}

### Link to Public Documentation
Full API documentation is available at:
https://hh41-2.github.io/COMP_3018_Assignment_05/

### Local Documentation Access
When running locally, access the API documentation at:
http://localhost:3000/api-docs
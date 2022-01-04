# Reelo-Internship

## Installation

Clone this repo
```bash
git clone https://github.com/Raj-Ailani/Reelo-Internship
```
Install all the dependencies
```bash
npm install
```
Start the server with command
```bash
npm start
```

## Usage

In this problem I have created data of Physics questions of different topic with different difficulty level mentioned in data.js file

Easy Question are of 2 marks 

Medium Question are of 5 marks and

Hard Question are of 10 marks

After running the server we can use API ```http://localhost:5000/api/paper``` with proper query to generate question paper according to difficulty level

Here is the one of the example:-

```http://localhost:5000/api/paper?totalMarks=100&easy=0.2&medium=0.5&hard=0.3```
 
 totalMarks = 100
 
 easy question  = 20%
 
 medium question = 50%
 
 hard question = 30%
 
Result :- 
```javascript
{
  "easy": [
    {
      "_id": "61d3c8b4c49fd54695d95b74",
      "question": "What is the speed of light",
      "subject": "Physics",
      "topic": "Waves",
      "difficulty": "Easy",
      "marks": 2,
      "__v": 0,
      "createdAt": "2022-01-04T04:10:28.755Z",
      "updatedAt": "2022-01-04T04:10:28.755Z"
    },
    {
      "_id": "61d3c8b4c49fd54695d95b75",
      "question": "Write the formula to find out pressure.",
      "subject": "Physics",
      "topic": "Force and Pressure",
      "difficulty": "Easy",
      "marks": 2,
      "__v": 0,
      "createdAt": "2022-01-04T04:10:28.756Z",
      "updatedAt": "2022-01-04T04:10:28.756Z"
    },
    {
      "_id": "61d3c8b4c49fd54695d95b76",
      "question": "Describe the state of motion of an object.",
      "subject": "Physics",
      "topic": "Force and Pressure",
      "difficulty": "Easy",
      "marks": 2,
      "__v": 0,
      "createdAt": "2022-01-04T04:10:28.756Z",
      "updatedAt": "2022-01-04T04:10:28.756Z"
    },
    {
      "_id": "61d3c8b4c49fd54695d95b77",
      "question": " Write one point of difference between contact and non-contact force with an example.",
      "subject": "Physics",
      "topic": "Force and Pressure",
      "difficulty": "Easy",
      "marks": 2,
      "__v": 0,
      "createdAt": "2022-01-04T04:10:28.756Z",
      "updatedAt": "2022-01-04T04:10:28.756Z"
    },
    {
      "_id": "61d3c8b4c49fd54695d95b78",
      "question": "What type of force is friction contact or non-contact? Why?",
      "subject": "Physics",
      "topic": "Force and Pressure",
      "difficulty": "Easy",
      "marks": 2,
      "__v": 0,
      "createdAt": "2022-01-04T04:10:28.756Z",
      "updatedAt": "2022-01-04T04:10:28.756Z"
    },
    {
      "_id": "61d3c8b4c49fd54695d95b79",
      "question": "What is function of ridges on your palm and bottom of your feet ?",
      "subject": "Physics",
      "topic": "Friction",
      "difficulty": "Easy",
      "marks": 2,
      "__v": 0,
      "createdAt": "2022-01-04T04:10:28.756Z",
      "updatedAt": "2022-01-04T04:10:28.756Z"
    },
    {
      "_id": "61d3c8b4c49fd54695d95b7a",
      "question": "Name the two factors on which the magnitude of frictional force depends.",
      "subject": "Physics",
      "topic": "Friction",
      "difficulty": "Easy",
      "marks": 2,
      "__v": 0,
      "createdAt": "2022-01-04T04:10:28.757Z",
      "updatedAt": "2022-01-04T04:10:28.757Z"
    },
    {
      "_id": "61d3c8b4c49fd54695d95b7b",
      "question": "Give two methods by which friction is reduced in the wheels of the car.",
      "subject": "Physics",
      "topic": "Friction",
      "difficulty": "Easy",
      "marks": 2,
      "__v": 0,
      "createdAt": "2022-01-04T04:10:28.757Z",
      "updatedAt": "2022-01-04T04:10:28.757Z"
    },
    {
      "_id": "61d3c8b4c49fd54695d95b7c",
      "question": "Define noise. ",
      "subject": "Physics",
      "topic": "Sound",
      "difficulty": "Easy",
      "marks": 2,
      "__v": 0,
      "createdAt": "2022-01-04T04:10:28.757Z",
      "updatedAt": "2022-01-04T04:10:28.757Z"
    },
    {
      "_id": "61d3c8b4c49fd54695d95b7d",
      "question": "What would be the sound produced in a bus station or railway station called as? ",
      "subject": "Physics",
      "topic": "Sound",
      "difficulty": "Easy",
      "marks": 2,
      "__v": 0,
      "createdAt": "2022-01-04T04:10:28.757Z",
      "updatedAt": "2022-01-04T04:10:28.757Z"
    }
  ],
  "medium": [
    {
      "_id": "61d3c8b4c49fd54695d95b81",
      "question": "Sound plays an important role in our life. Why? ",
      "subject": "Physics",
      "topic": "Sound",
      "difficulty": "Medium",
      "marks": 5,
      "__v": 0,
      "createdAt": "2022-01-04T04:10:28.757Z",
      "updatedAt": "2022-01-04T04:10:28.757Z"
    },
    {
      "_id": "61d3c8b4c49fd54695d95b82",
      "question": " Demonstrate an activity to show that sound needs a medium for propagation  ",
      "subject": "Physics",
      "topic": "Sound",
      "difficulty": "Medium",
      "marks": 5,
      "__v": 0,
      "createdAt": "2022-01-04T04:10:28.757Z",
      "updatedAt": "2022-01-04T04:10:28.757Z"
    },
    {
      "_id": "61d3c8b4c49fd54695d95b83",
      "question": "Distilled water is a poor conductor of electricity. Justify.",
      "subject": "Physics",
      "topic": "Chemical Effects of Electric Current",
      "difficulty": "Medium",
      "marks": 5,
      "__v": 0,
      "createdAt": "2022-01-04T04:10:28.758Z",
      "updatedAt": "2022-01-04T04:10:28.758Z"
    },
    {
      "_id": "61d3c8b4c49fd54695d95b84",
      "question": " Describe the functioning of a LED. ",
      "subject": "Physics",
      "topic": "Chemical Effects of Electric Current",
      "difficulty": "Medium",
      "marks": 5,
      "__v": 0,
      "createdAt": "2022-01-04T04:10:28.758Z",
      "updatedAt": "2022-01-04T04:10:28.758Z"
    },
    {
      "_id": "61d3c8b4c49fd54695d95b85",
      "question": " Tap water is considered as a good conductor. Why? ",
      "subject": "Physics",
      "topic": "Chemical Effects of Electric Current",
      "difficulty": "Medium",
      "marks": 5,
      "__v": 0,
      "createdAt": "2022-01-04T04:10:28.758Z",
      "updatedAt": "2022-01-04T04:10:28.758Z"
    },
    {
      "_id": "61d3c8b4c49fd54695d95b86",
      "question": "What is the purpose of one long and another shorter lead of a LED? ",
      "subject": "Physics",
      "topic": "Chemical Effects of Electric Current",
      "difficulty": "Medium",
      "marks": 5,
      "__v": 0,
      "createdAt": "2022-01-04T04:10:28.758Z",
      "updatedAt": "2022-01-04T04:10:28.758Z"
    },
    {
      "_id": "61d3c8b4c49fd54695d95b87",
      "question": " If a small amount of sugar is added to distilled water, the resulting solution will be a good conductor or poor conductor of electricity? Explain why. ",
      "subject": "Physics",
      "topic": "Chemical Effects of Electric Current",
      "difficulty": "Medium",
      "marks": 5,
      "__v": 0,
      "createdAt": "2022-01-04T04:10:28.758Z",
      "updatedAt": "2022-01-04T04:10:28.758Z"
    },
    {
      "_id": "61d3c8b4c49fd54695d95b88",
      "question": " Define electromagnetic induction.",
      "subject": "Physics",
      "topic": "Chemical Effects of Electric Current",
      "difficulty": "Medium",
      "marks": 5,
      "__v": 0,
      "createdAt": "2022-01-04T04:10:28.758Z",
      "updatedAt": "2022-01-04T04:10:28.758Z"
    }
  ],
  "hard": [
    {
      "_id": "61d3c8b4c49fd54695d95b89",
      "question": "Give examples to show that friction is both a friend and a foe.",
      "subject": "Physics",
      "topic": "Friction",
      "difficulty": "Hard",
      "marks": 10,
      "__v": 0,
      "createdAt": "2022-01-04T04:10:28.758Z",
      "updatedAt": "2022-01-04T04:10:28.758Z"
    },
    {
      "_id": "61d3c8b4c49fd54695d95b8a",
      "question": "Explain why objects moving in fluids must have special shapes.",
      "subject": "Physics",
      "topic": "Friction",
      "difficulty": "Hard",
      "marks": 10,
      "__v": 0,
      "createdAt": "2022-01-04T04:10:28.758Z",
      "updatedAt": "2022-01-04T04:10:28.758Z"
    },
    {
      "_id": "61d3c8b4c49fd54695d95b8b",
      "question": "Why does the force of friction exist ?",
      "subject": "Physics",
      "topic": "Friction",
      "difficulty": "Hard",
      "marks": 10,
      "__v": 0,
      "createdAt": "2022-01-04T04:10:28.758Z",
      "updatedAt": "2022-01-04T04:10:28.758Z"
    }
  ]
}
```

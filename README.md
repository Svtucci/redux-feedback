# Project Name

Redux-Feedback 

## Description

This is an app that will submit feedback to a server and DB with Redux. Features 4 components asking User for self-ratings/comments that will navigate to a success page when the submission is succesfully sent. 

## PAGES TO CREATE 

1. [x] How are you feeling today? 
    - [x] "Feeling?" appearing?
    - [x] 0-5 
    - [x] Number input field
    - [x] Next button
    - [x] Needs validation and some sort of alert, instead changed it so users can only put 0-5

2. [x] How well are you understanding the content?
    - [x] "Understanding?" appearing?
    - [x] 0-5
    - [x] Number input field
    - [x] Next button 
    - [x] Needs validation and some sort of alert, instead changed it so users can only put 0-5

3. [x] How well are you being supported? 
    - [x] "Support" appearing?
    - [x] 0-5 
    - [x] input field 
    - [x] Next button 
    - [x] Needs validation and some sort of alert, instead changed it so users can only put 0-5 

4. [x] Any comments you want to leave? 
    - [x] "Comments" appearing?
    - [x] Input field 
    - [x] Next button 
    - [] Does NOT need validation 

5. [x] Review your feedback   
    - [x] Review Page that has each components inputs in it 
    - [x] Submit button will send information back to server 
    - [x] When button is clicked submission should appear in DB, User should see a success page. 
    - [x] On this page "Leave new Feedback" button will bring them back to the first step, to repeat a new submission


## Thoughts 

 - Going to re-watch the classwork which emulates the page setup
 - Firstly going to setup pages as the plan states, once base functionality is present I may change some of the pages to different input types. 
 - I think the hardest part from opening the project up will be the final button to reset the submission. I have a hard time checking if the submission is actually being sent correctly and being reset. Or if the page navigation is working as intended. 

 ## Issues as working

 1. First major issue I ran into were the components not appearing with the paths...Found it was I forgot / in each "exact path" in the app.jsx 
 2. Payload was spelt incorrect on the first step causing a very odd slice error because it wasnt able to figure out state (I think? )
 3. Next major issue was submission to DB was getting a proxy error. Possibly from the redux router? 
 The problem was missing line 41 in the feedback.router  


 ## App Layout

1. I changed the validation to remove some possible user error, instead of letting a User select any amount of number I only gave them a scale of 0-5 to denote what level 
2. I created a separate success page that will only be navigated to if the review submission is successful so I am wondering if that also counts towards base mode. 


## Things to add
1. Nav bar on top to show User where they are in the process
2. More MUI 
3. More alerts to signal to Users if what they are doing is incorrect

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).

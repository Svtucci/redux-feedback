## PAGES TO CREATE 

1. [] How are you feeling today? 
    - [x] "Feeling?" appearing?
    - [x] 0-5 
    - [x] Number input field
    - [x] Next button
    - [] Needs validation and some sort of alert 

2. [] How well are you understanding the content?
    - [x] "Understanding?" appearing?
    - [x] 0-5
    - [x] Number input field
    - [x] Next button 
    - [] Needs validation and some sort of alert 

3. [] How well are you being supported? 
    - [x] "Support" appearing?
    - [x] 0-5 
    - [x] input field 
    - [x] Next button 
    - [] Needs validation and some sort of alert 

4. [] Any comments you want to leave? 
    - [x] "Comments" appearing?
    - [x] Input field 
    - [x] Next button 
    - [] Does NOT need validation 

5. [] Review your feedback   
    - [] Review Page that has each components inputs in it 
    - [] Submit button will send information back to server 
    - [] When button is clicked submission should appear in DB, User should see a success page. 
    - [] On this page "Leave new Feedback" button will bring them back to the first step, to repeat a new submission


## Thoughts 

 - Going to re-watch the classwork which emulates the page setup
 - Firstly going to setup pages as the plan states, once base functionality is present I may change some of the pages to different input types. 
 - I think the hardest part from opening the project up will be the final button to reset the submission. I have a hard time checking if the submission is actually being sent correctly and being reset. 

 ## Issues as working

 1. First major issue I ran into was the compnents not appearing with the paths...Found it was I forgot / in each "exact path" in the app.jsx 
 2. Payload was spelt incorrect on the first step causing a very odd slice error  bc it wasnt able to figure out state (I think? )
 3. Next major issue was submission to DB was getting a proxy error. Possibly from the redux router? 



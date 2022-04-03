# jwt-simple-auth
Simple nodejs project to test the behavior of Json Web Token module. Based on <a href="https://www.youtube.com/watch?v=mbsmsi7l3r4&list=WL&index=5&t=580s">Web Dev Simplified</a> "JWT Authentication Tutorial - Node.js" video.

# How to run
To run the base server: `$ npm run start:dev`
<br/>
To run the authentication manager server: `$ npm run start-auth:dev`

### To log in: 
![image](https://user-images.githubusercontent.com/49666986/161444742-f8f9cfae-d17f-4dd9-92b7-c736a96a93ff.png)
### Expected response: 
![image](https://user-images.githubusercontent.com/49666986/161444756-1de32d45-44ac-4b7c-9f69-755d342dc69b.png)

### Once you have the access Token, put it on your authentication bearer token in the request to get the list of all Posts with your username:
![image](https://user-images.githubusercontent.com/49666986/161445018-9e69dd9f-018c-4cb7-a2b8-74d5c32a8191.png)

## Todo List: 
Add refresh 

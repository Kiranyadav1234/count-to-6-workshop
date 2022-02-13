  
//[userId, username, email, age, firstName, lastName]
let userArray=process.argv.slice(2);
let detailsOfUser={};
 [,detailsOfUser.username,detailsOfUser.email]=userArray;
 console.log(detailsOfUser);

 
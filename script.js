//step01: Create an XHR object
//request has to be used in whole program
var request = new XMLHttpRequest();
//step:02: create a connection
//true : optional
request.open('GET', 'https://restcountries.com/v2/all', true);
//step:03: send a request
//push for the api to send request to server
request.send();
//step04 : once data successfully received from server
//http:200
request.onload = function(){
    //conversion of string to array of json objects...
    var data = JSON.parse(request.response);
    console.log(data);
   /* for(var i = 0; i < data.length; i++){
    console.log(data[i].id + " " +data[i].name+ " " +data[i].email);
          
    } */
   let res = data.filter((data) => data.population < 100000);
   console.log(res.map((data) => data.name));
}
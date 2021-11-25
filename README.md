
# [Timestamp Microservice](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice)

A request to the relative path `/api/:date` will return a JSON object of the date in a Unix timestamp of milliseconds and also an UTC string. 
For example, a request to `/api/1451001600000` should return `{ unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }`

A request with a malformed date will return a JSON object with an error message : `{ error : "Invalid Date" }`

If the date parameter is empty, the request will return a JSON object with the current time. For example, a request to either `/api` or `/api/` will return `{"unix":1637806258947,"utc":"Thu, 25 Nov 2021 02:10:58 GMT"}`

You can run it yourself on Replit at https://replit.com/@DaveAndrea/timestamp-microservice

db = connect('mongodb://localhost:27017/test');

db.members.insertMany([
    {"id":1,"firstName":"Winne","lastName":"Janc","memberCardNumber":"0473128446","policyNumber":"1405677686","dataOfBirth":"26/07/1995"},
    {"id":2,"firstName":"Ransom","lastName":"Aslie","memberCardNumber":"8047727435","policyNumber":"6494400124","dataOfBirth":"04/09/2012"},
    {"id":3,"firstName":"Estelle","lastName":"Schops","memberCardNumber":"9908842684","policyNumber":"3279218470","dataOfBirth":"05/10/1997"},
    
]);
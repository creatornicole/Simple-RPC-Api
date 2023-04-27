const { log } = require('console');
const userData = require('./usersDb');

let methods = { //JSON
    createUser: { //name of method
        description: "Creates a new user and returns its id",
        params: ['user: the user object'],
        return: ['userId'],

        //function that gets called, to insert data, when client calls createUser
        exec(userObject) { //name of method: exec

            var userJSON = JSON.parse(JSON.stringify(userObject));
            var name = userObject.name;
            var age = userObject.age;
            var requestId = userObject.id;
            //generate random id for new user
            var userId = Math.random() * 10000000 | 0; //|0 binary-OR, conversion 64-Bit Floating Point Number to 32-Bit Integer
            
            //add user data to JSON-Object userData
            userJSON = {
                name: name,
                age: age,
                id: userId
            };
            userData.push(userJSON);

            //console output to control database entries
            for(var user in userData) {
                if(userData.hasOwnProperty(user)) {
                    consolge.log(user + " -> " 
                        + userData[user].name + " " 
                        + userData[user].userId + " "
                        + userData[user].requestId);
                }
            }
        }
    }

    //return of userId
    //TODO: fix return of userId
    //return({'userId': userId});
};

module.exports = methods; //provide data to other modules


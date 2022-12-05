const userInfo = require("./information");

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello I'm ${userInfo.allMe.firstName} from ${userInfo.allMe.campus} campus !`,
    e : "oO",
    T : ""
}));
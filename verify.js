const day = new Date().getDay() ;
const hours = new Date().getHours() ; 


console.log(hours) ; 
function verify ( req , res , next ) {
    if ( day >0 && day < 6 && hours > 8 && hours < 17) next()
    else 
     res.send ("The web application is only available during working hours (Monday to Friday,  from 9 to 17)")
} ; 

module.exports = verify ;
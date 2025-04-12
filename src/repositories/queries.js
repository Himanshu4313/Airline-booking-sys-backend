 function addRowLockOnflight(flightId){
    return `SELECT * from flights WHERE id = ${flightId} for UPDATE`
 }

 module.exports = {
    addRowLockOnflight
 }
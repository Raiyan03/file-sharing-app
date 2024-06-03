export const generateRandomString=()=>{
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabchefghijkalmnopqrstuvwzyz0123456789"
    let results ='';
    for (let i=0; i<4; i++){
        results+=characters.charAt(Math.floor(Math.random()*characters.length));
    }
    return results;
}
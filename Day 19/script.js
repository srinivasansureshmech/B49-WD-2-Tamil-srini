function sub(a,b){
    if (b>a){
        throw new Error("A should greater than B!");
    }
    return a-b;
}
try{
    let result = sub(1,5);
    console.log(result);
    } catch(err){
        console.error("An error occurred:",err.message);
    }
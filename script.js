Array1 =[1,2,2,"r",undefined,43,4,4,4];
Array2 =[1,2,2,"r",4,true,2,11111,];
function itDoWell(a,b){
    let summA =0
    let summB =0
    for(i=0;i<a.length;i++){
        if (!isNaN (a[i])) {
            summA +=a[i] } 
    }
    for(i=0;i<b.length;i++){
        if (!isNaN (b[i])) {
            summB +=b[i] } 
    }
    if (summA>summB){
        return a
    }
    else{
        return b
    }
}

console.log(itDoWell(Array1,Array2));

function comparing(a,b){
    let alice = 0;
    let bob = 0;

    for(let i=0; i<=3; i++){
        if(a[i]>b[i]){
            alice += 1;
        }else if(a[i]<b[i]){
            bob += 1;
        }
    }
    return [alice, bob];

}

let a = [17, 28, 30];
let b = [99,16,8];

console.log(comparing(a, b));
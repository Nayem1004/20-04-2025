let names = ["Mahamud", "Mohammad", "Fardin", "Shobuj", "Nayem"];

// for(let i = 0; i < names.length; i++){
//     console.log(names[i] + "=" + names[i].length);
// }

for(let i = 0; i < names.length; i++){
    if(names[i].toUpperCase().startsWith("M")){
        console.log(names[i]);
    }
}
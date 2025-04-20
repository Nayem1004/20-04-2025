let names = ["Mahamud", "Mohammad", "Fardin", "Shobuj", "Nayem"];

let find = 'Mahamud'
for(let i = 0; i < names.length; i++){
    console.log(names[i]);
    if(names[i] === find){
        console.log('find the name' + i)
    }
}


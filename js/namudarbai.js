                //***Kintamųjų inicijavimas***//

    // 1.Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis

const first = 2;
console.log(first);
const second = 6;
console.log(second);
const third = 10;
console.log(third);

    //2.Sukurti 3 kintamuosius su teksto tipo reikšmėmis

const fruit = 'apple';
console.log(fruit);
const animal = 'horse';
console.log(animal);
const fish = 'shark';
console.log(fish);


    // 3.Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis

const batudydziai = [35, 36, 37, 38, 39];
console.log(batudydziai);

const numbers = [5, 6, 1, 8, 3];
console.log(numbers);

const laikas = [5, 6, 7, 8, 9];
console.log(laikas);


    // 4.Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis

const carmodels = ['Skoda', 'Toyota', 'Dacia', 'Opel', 'Nissan'];

console.log(carmodels);

const names = ['Ona', 'Ana', 'Rita', 'Mija', 'Maja'];
console.log(names);

const miestai = ['Ryga', 'Arizona', 'Birstonas', 'Londonas', 'Minskas'];
console.log(miestai);

                console.clear();

                // ***Veiksmai su kintamaisiais***//
    
    //1.Susumuoti visus skaičiaus tipo kintamuosius

const sum = first + second + third;
console.log(sum);

    //2.Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas

const organic = `${fruit} ${animal} ${fish}.`;
console.log(organic);

    //3.Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką (1-2+3-4+5) numbers laikas

const result = batudydziai[0] - batudydziai[1] + batudydziai[2] - batudydziai[3] + batudydziai[4];
console.log(result);

let result2 = 0;
result2 = result2 + numbers[0];
result2 = result2 - numbers[1];
result2 = result2 + numbers[2];
result2 = result2 - numbers[3];
result2 = result2 + numbers[4];
console.log(result2);

const result3 = laikas[0] - laikas [1] + laikas[2] - laikas[3] + laikas[4];
console.log(result3);

    //4.Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas names miestai

const cars = carmodels[4] + ', ' + carmodels[3] + ', ' + carmodels[2] + ', ' + carmodels[1] + ', ' + carmodels[0] + '.';
console.log(cars);

let allNames = '';
allNames = allNames + names[4];
allNames = allNames + ', ' + names[3];
allNames = allNames + ', ' + names[2];
allNames = allNames + ', ' + names[1];
allNames = allNames + ', ' + names[0];  
console.log(allNames);

let allMiestai = '';
allMiestai = allMiestai + miestai[4];
allMiestai = allMiestai + ', ' + miestai[3];
allMiestai = allMiestai + ', ' + miestai[2];
allMiestai = allMiestai + ', ' + miestai[1];
allMiestai = allMiestai + ', ' + miestai[0]; 
console.log(allMiestai);
                console.clear();

                // ***Kintamųjų palyginimas***//

    //1. Tarpusavyje palyginti skaičiaus tipo kintamuosius:

const skaicius1 = 5;
const skaicius2 = 2;

if (skaicius1 > skaicius2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
} 
if (skaicius1 < skaicius2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}
if (skaicius1 === skaicius2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}    
if (skaicius1 !== skaicius2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}
if (skaicius1 >= skaicius2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}
if (skaicius1 <= skaicius2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}

    //2. Išvesti teksto tipo kintamųjų ilgius

const raide1 = 'a';
const raide2 = 'b';

    //3. Tarpusavyje palyginti teksto tipo kintamųjų ilgius

if (raide1 > raide2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
} 
if (raide1 < raide2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}
if (raide1 === raide2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}    
if (raide1 !== raide2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}
if (raide1 >= raide2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}
if (raide1 <= raide2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}

    //4. Išvesti sąrašo tipo kintamųjų ilgius

const arrow1 = ['vienas', 'du', 'tris'];
const arrow2 = ['keturi', 'penki', 'sesi'];

if (arrow1 > arrow2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
} 
if (arrow1 < arrow2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}
if (arrow1 == arrow2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}    
if (arrow1 != arrow2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}
if (arrow1 >= arrow2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}
if (arrow1 <= arrow2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}

console.clear()

                //***Ciklo for panaudojimas***//
    //1. Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai)
    
//   const zero = 0;
//   const zero2 = 0;
//   let suma = 0;
  
//   for (let i = 1; i <= zero2; i++) {
//       suma = i * zero;
//     console.log(`Suma:${i} ${suma}`);
//   }

const nuo = 0;
const iki = 4;

for (let i = 0; i <= 4; i++) {
suma = i + iki;
console.log(suma);
}






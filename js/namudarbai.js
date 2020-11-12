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

// const ;
// console.log();


    // 4.Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis

const carmodels = ['Skoda', 'Toyota', 'Dacia', 'Opel', 'Nissan'];

console.log(carmodels);

const names = ['Ona', 'Ana', 'Rita', 'Mija', 'Maja'];
console.log(names);

// const ;
// console.log();

                // console.clear();

                // ***Veiksmai su kintamaisiais***//
    
    //1.Susumuoti visus skaičiaus tipo kintamuosius

// const sum = first + second + third;
const sum = batudydziai + numbers;
console.log(sum);

    //2.Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas

const organic = `${fruit} ${animal} ${fish}.`;
console.log(organic);

    //3.Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką (1-2+3-4+5)

// const result = batudydziai[0] - batudydziai[1] + batudydziai[2] - batudydziai[3] + batudydziai[4];
// console.log(result);
//  arba
let result2 = 0;
result2 = result2 + batudydziai[0];
result2 = result2 - batudydziai[1];
result2 = result2 + batudydziai[2];
result2 = result2 - batudydziai[3];
result2 = result2 + batudydziai[4];
console.log(result2);


    //4.Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas

const cars = carmodels[4] + ', ' + carmodels[3] + ', ' + carmodels[2] + ', ' + carmodels[1] + ', ' + carmodels[0] + '.';
console.log(cars);

// arba

// let allCars = '';
// allCars = allCars + carmodels[0] + ', ';
// allCars = allCars + carmodels[1] + ', ';
// allCars = allCars + carmodels[2] + ', ';
// allCars = allCars + carmodels[3] + ', ';
// allCars = allCars + carmodels[4] + ', ';  

//jeigu bus istrinama pozicija, bus blogai parasytia, reikes taisyti teksta, todel: 

let allCars = '';
allCars = allCars + carmodels[0];
allCars = allCars + ', ' + carmodels[1];
allCars = allCars + ', ' + carmodels[2];
allCars = allCars + ', ' + carmodels[3];
allCars = allCars + ', ' + carmodels[4]; 
console.log(allCars);







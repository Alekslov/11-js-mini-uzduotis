                //***Kintamųjų inicijavimas***//

    // 1.Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis

const first = 2;
const second = 6;
const third = 10;

console.log(first);
console.log(second);
console.log(third);

    //2.Sukurti 3 kintamuosius su teksto tipo reikšmėmis

const fruit = 'apple';
const animal = 'horse';
const fish = 'shark';

console.log(fruit);
console.log(animal);
console.log(fish);

    // 3.Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis

const batudydziai = [35, 36, 37, 38, 39];

console.log(batudydziai);

    // 4.Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis

const carmodels = ['Skoda', 'Toyota', 'Dacia', 'Opel', 'Nissan'];

console.log(carmodels);

                console.clear();

                // ***Veiksmai su kintamaisiais***//
    
    //1.Susumuoti visus skaičiaus tipo kintamuosius

const sum = first + second + third;

console.log(sum);

    //2.Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas

const organic = `${fruit} ${animal} ${fish}.`;
console.log(organic);

    //3.Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką (1-2+3-4+5)

const result = batudydziai[0] - batudydziai[1] + batudydziai[2] - batudydziai[3] + batudydziai[4];

console.log(result);

    //4.Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas

const cars = carmodels[4] + ', ' + carmodels[3] + ', ' + carmodels[2] + ', ' + carmodels[1] + ', ' + carmodels[0] + '.';

console.log(cars);

    





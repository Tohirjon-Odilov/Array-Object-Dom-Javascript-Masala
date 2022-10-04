/*
const data = new Numbers([12, -1, 0, 23.64, -23]);

let res1 = data.sorted(); // [-23,-1,0,12,23.34]

data.toInterger(); // [12,-1,24,-23]

data.stringNumber(); // ["12","-1", "0", "23.64", "-23"]

data.sumAll(); // 123
*/

let arr = [
  {
    id: 0,
    brand: "lexus",
    price: 234000,
  },
  {
    id: 1,
    brand: "ford",
    price: 12300,
  },
  {
    id: 2,
    brand: "bmw",
    price: 12300,
  },
  {
    id: 3,
    brand: "lexus",
    price: 12300,
  },
];

// let cars = new Cars(arr);
// 
// cars.buy("ford"); //consoleda: Siz 123so'm Ford mashinasini sotib oldingiz.
// 
// cars.sumAll(); // 30 000
// 
// cars.removeAll("lexus"); //console: [{ford, bmw}]
// 
// cars.editPrice(2, 45000); //console []
// 
// cars.addCar(12, "chevrolet", 1200); // console: []
// throw bilan error qaytarsin

{
  /********************
  * !MA'LUMOT TURLARI *
  ********************/

  // ?JavaScript Number

  // *primitive type hisoblanadi
  // *boshqa tillarga o’xshab int, float bilan e’lon qilish shart emas
  // const a = 3;
  // const b = 3.13;

  // *o’ta katta va kichik sonlarlarni exponential usul bilan yozish mumkin
  // const a1 = 5e9;
  // console.log(a1); //5000000000

  // const a2 = 5e-5;
  // console.log(a2); // 0.00005

  // *hexadecimal ko’rinishda ham yozish mumkin
  // const a = 0xff;
  // console.log(a); // 255

  // todo: hisoblash (FF)₁₆ = (15 × 16¹) + (15 × 16⁰) = (255)₁₀
  // todo: 0x9f => (9F)₁₆ = (9 × 16¹) + (15 × 16⁰) = (159)₁₀

  // const b = 0x00 ;
  // console.log(b); // 0

  /************
  * ?INFINITY *
  ************/

  // ### NaN

  //   - not a number
  //   - isNaN()

  // ### Infinity

  //   - matematik amal o’ta katta va kichik sondan o’tib ketib qolsa Infinity sonini chiqaradi

  // const a = 2 / 0;
  // console.log(a); // Infinity

  // const a = -2 / 0;
  // console.log(a); // -Infinity


  /**********
  * ?BIGINT *
  **********/
}

{
  /********
   * !ES6 *
   ********/

  /**************
   * ? FOR...OF *
   **************/
  let arr = [2, 3, 4]
  for (const i of arr) {
    console.log(i); /// 2 3 4
  }


  /************************
   * ? SWAPPING VARIABLES *
   ************************/
  //* 2 o’zgaruvchida turgan datani ko’p mehnat qilmasdan bir qatorda almashtirish

  // program to swap variables

  let x = 4;
  let y = 7;

  x = 7;
  y = 4;

  // swapping variables
  [x, y] = [y, x];

  console.log(x); // 7
  console.log(y); // 4

  //* nimagadir menda ishlamadi => manjaro firefox and chrome

  {
    // Nested Destructuring Assignment    

    // nested array elements
    const arrValue = ['one', ['two', 'three']];

    // nested destructuring assignment in arrays
    const [x, [y, z]] = arrValue;

    console.log(x); // one
    console.log(y); // two
    console.log(z); // three

    // nested Objects
    const person = {
      name: 'Jack',
      age: 26,
      hobbies: {
        read: true,
        playGame: true
      }
    }
    // nested destructuring 
    const { name, hobbies: { read, playGame } } = person;

    console.log(name); // Jack
    console.log(read); // true
    console.log(playGame); // true}
  }

}

{
  /***********
 * !OBJECT *
 ***********/

  //! class hamda funksiya orqali object yasash bir natijani beradi.
  /*******************************
   * ?CLASS ORQALI OBJECT{} YASASH *
   *******************************/
  //* class orqali yasash chiroyliroq
  class Car {
    color = 'red' //* constructordan oldin ham key value yozishimiz mumkin
    //* va static ma'lumot hisoblanadi
    constructor(name, price, year) {
      this.name = name,
        this.price = price,
        this.year = year,
        this.color = name //* tepadagi static ma'lumotni o'zgartiryapmiz
    }
  }

  let car1 = new Car('Ford', 1500, 2022)
  let car2 = new Car('Lexus', 1600, 2022)
  console.log(car1);
  console.log(car2);

  {
    /**********************************
     *? FUNKSIYA ORQALI OBJECT YASASH *
     **********************************/
    function Car(name, price, year) {
      this.name = name,
        this.price = price,
        this.year = year

      this.getInfo = function () {
        console.log('Bu uy: `${this.name} ${this.year}`');
      }
    }
    const car1 = new Car('Nexia', 10000, 2023)
    car1.getInfo()
    console.log(car1);

    const car2 = new Car('Captiva', 100000, 2020)
    car2.getInfo()
    console.log(car2);
  }
}


{
  /****************
 * !FUNKSIYALAR *
 ****************/

  //? 1. Function decleration
  //? 2. Function expression
  //? 3. Arrow function
  //? 4. Anonim funtion
  //? 5. IIFI immidiately invoked function expression
  //? 6. Pure function
  //? 7. Callback function





  {
    /**************
   * ?ARGUMENTS *
   **************/

    //* funksiyaning argumentlarini olib beradi
    //* ushbu property arrow function'da ishlamaydi
    //* ushbu property bizga array like object qaytaradi.

    let calc = (s1, s2) => {
      console.log(arguments);
    }
    calc(2, 4)
    //! xatolik chiqadi //ReferenceError: arguments is not defined



    function cal(s1, s2, ...rest) {
      console.log(arguments);
    }
    cal(2, 4, 3, 'salomlar')
  }
}

{
  /*************************
   * !JAVASCRIPT RECURSION *
   *************************/

  function countDown(number) {
    console.log(number);
    const newNumber = number - 1
    if (newNumber > 0) {
      countDown(newNumber)
    }
  }
  countDown(4)

}

{
  /******************
   * !FACTORIAL SON *
   ******************/

  function factorialSon(num) {
    if (num < 0) throw new Error("Musbat son kiritdiniz?")
    if (num === 0) return 1
    return num * factorialSon(num - 1)
  }
  console.log(factorialSon(7))//* <= 1*2*3*4*5*6*7
}
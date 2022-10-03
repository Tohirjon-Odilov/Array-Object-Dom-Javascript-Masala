{
  //! barcha masalar matni pastda berilgan
  //! 11-masala 
  //* sonlarni kamayish tartibida chiqarish a katta b'dan
  {
    let a = 10, b = 5

    for (let i = b; i <= a; i++) {
      console.log(i);
    }
  }

  {
    //! 12-masala 
    //* sonlarni kamayish tartibida chiqarish a katta b'dan a va b sonlar chiqmasin 
    let a = 30, b = 20

    for (let i = a; i > b + 1; i--) {
      console.log(i - 1);
    }
  }
  {
    //! 13-masala

    const konfet = 10000

    for (let i = 1; i <= 10; i++) {
      console.log(i * konfet);
    }
  }

  {
    //! 14-masala
    const konfet = 10000
    for (let i = 1; i <= 10; i++) {
      let d = i / 10
      console.log(d * konfet);
    }
  }

  {
    //! 15-masala
    const konfet = 10000
    for (let i = 10; i <= 20; i++) {
      let r = i / 10 //* bu yerga qara r kelyapt 

      if (i % 2 === 0) //* bu yerga qara i kelyapti
        console.log(r * konfet);
    }
  }

  {
    //! 16-masala
    let a = 1, b = 9
    let r = 0
    for (let i = a; i <= b; i++) {
      r += i
    }
    console.log(r);
  }

  {
    //! 17-masala
    let a = 1, b = 9
    let r = 1
    for (let i = a; i < b; i++) {
      r = r * i
      // console.log(r,'*', i);
    }
    console.log(r);
  }

  {
    //! 18-masala
    let a = 1, b = 9
    let r = 1
    for (let i = a; i <= b; i++) {
      r += i ** 2
    }
    console.log(r);
  }

  {
    //! 19-masala
    let n = 5, y = 0
    for (let i = 1; i <= n; i++) {
      y += 1 / i
      console.log(y.toFixed(3));
    }
  }

  {
    //! 21-masala
    let n = 10
    for (let i = 1; i <= n; i++) {
      if (i % 2 === 0)
        console.log(i);
    }
  }

  {
    //! 20-masala
    let n = 10
    for (let i = 1; i <= n; i++) {
      if (i % 2 !== 0)
        console.log(i);
    }
  }

  {
    //! 22-masala
    let n = 9
    for (let i = 1; i <= n; i++) {
      i
      if (n % i === 0)
        i
    }
  }

  {
    //! 23-masala
    let n = 20, r = 1
    for (let i = 1; i <= n; i++) {
      if (i % 2 === 0) {
        r = i * i
        console.log(`${i}*${i}=${r}`);
      } else {
        r = i * i
        console.log(`${i}*${i}=${r}`);
      }
    }
  }

  {
    //! 24-masala
    let n = 10, a = 20
    for (let i = a; n > i; i--) {
      i
    }
  }
}




































// 9 2 - dars for () 
// 10 1) k va n butun son berilgan.K ni n marta marta dastur tuzing 
// 11 2) a, b sonlar beilgan.A b dan a va b bolalar butun sonlarni katta dasturlar tuzing.A va B ni ozi ham chiqsin 
// 12 3) a, b sonlar berilgan ab dan katta a va b barcha barcha sonlarni kamayish tartibida chiqaring a va b kirmasin 
// 13 4) 1kg konfet 10000so'm berilgan. 1 kgdan 10 kggacha hammasining narxini narxini dastur tuzing 
// 14 5) 1kg konfet 10000so'm. 0, 1 kg dan 1 kg gacha bo'lgan konfet narxi toping 
// 15 6) 1kg konfet 10000so'm. 1.2kg, 1.4, 1.6, 1.8, 2kg konfetlarni narxini toping 
// 16 7) a, b sonlar berilgan.A dan b gacha barcha butun sonlarni yig'indisin topuvchi dastur yozing 
// 17 8) a,b sonlar berilgan. A dan b gacha barcha butun sonlarni ko'paytmasin topuvchi dastur yozing 
// 18 9) a, b sonlar berilgan a dan b gacha bo'lgan sonlarni kvadratlarini yig'indisin topuvchi dastur toping 
// 19 10) n soni berilgan quydagi yig'indini hisoblang. S = 1/1 + 1/2 + .... + 1/n 
// 20 11) n soni berilgan shu soni ichidan to'qlarin ko'ruvchi dastur yozing 
// 21 12) n soni berilgan shu sonlarni ichidan juftlarini koruvchi dastur yozing 
//! 22 13) n soni berilgan shu son ichidan faqat murakkab sonlarni aniqlovchi dastur yozing   
// 23 14) n soni berilgan shu sonlarni ichidan jufat va toq sonlarni kvadratlarini chiqaring 
// 24 15) n son berilgan n sonidan kamayish tartibida sonlar chiqarilsin 
// 25 16) n sonlar sonlar chiqarilsin 25 16) n sonlar sonlar chiqarilsin 25 16) ga karralisini tashlab o'tib ketuvchi dastur tuzing 26 17) n butun son berilgan ngacha butun sonlarni ko' paytmasini topuvchi dastur tuzing 27 18) n butun son berilgan 1 sikldan tajriba quydagi yigindini hisoblovchi dastur tuzing. 1!+2!+..+n! 28 19) n butun son va x haqiqiy sonlar berilgan (n>0) Quydagi yig'indi hisoblang.1 + x + x2 / 2! + x3 / 3! +..+ xn / n! 29 20) n va x sonlar berilgan O dan n gacha sonlar orasida x ga bo'linadigan sonlarni topuvchi dastur tuzing 30 21) n va x sonlar berilgan quydagi yig'indini topuvchi dastur tuzing. 1(1, 2, 3...x) + 2(1, 2, 3..x) + .. + n(1, 2, 3,..x) REDMI 9 TOHIRJON 2022 / 9 / 28 O'TKAZILGAN 17:23 linadigan sonlarni topuvchi dastur tuzing 30 21) n va x sonlar berilgan quydagi yigindini topuvchi dastur tuzing. 1(1,2,3...x) + 2(1,2,3..x) + .. + n(1,2,3,..x) REDMI 9 TOHIRJON 2022/9/28 O'TKAZILGAN 17: 23 linadigan sonlarni topuvchi dastur tuzing 30 21) n va x sonlar berilgan quydagi yigindini topuvchi dastur tuzing. 1(1, 2, 3...x) + 2(1, 2, 3..x) + .. + n(1, 2, 3,..x) REDMI 9 TOHIRJON 2022 / 9 / 28 O'TKAZILGAN 17:23


{
  {
    /***********
   * !MASSIV * ga oid masalalar
   ***********/

    //? 3-masala
    let arr = []
    let r = 0
    for (let i = 1; i < 10; i++) {

      r = r + i
      arr.push(r)
    }
    console.log(arr);
    // console.log(r);
  }

  {
    //? 4-masala
    let arr = []
    let plus = 0
    let minus = 0
    for (let i = 0; i <= 10; i++) {
      arr.push(i * 10)

      if (arr[i] / 10 % 2 === 0) {
        plus += i * 10
      } else {
        minus -= i * 10
      }
    }
    console.log(minus)
    console.log(plus)
  }

  {
    //? 5-masala
    let n = 10
    let r = 0
    let arr = []
    for (let i = 1; i <= n; i++) {
      arr.push(i)
      r += i
    }
    console.log(arr);
    console.log(r);
  }

  {
    //? 6-masala
    let arr = []
    let n = 10
    for (let i = n; i > 0; i--) {
      arr.push(i)
    }
    console.log(arr);
  }
}


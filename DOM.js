// daftarga yozilmagan 
//? lesson-5
form.addEventListener('submit', (e) => { // addEventListener bizga hodisani olib keladi. e
  e.preventDefault()
})

/////////////////
e.preventDefault() //! sahifa yangilanib ketishini oldini oladi.
// hozircha faqat inputlarda ishlatdim.
/////////////////


/*****************************************
 *! TEXTCONTENT BILAN INNERHTMLNI FARQI *
 *****************************************/
// *innerHtml orqali ma'lumot joylaganimizda, agar ma'lumot ichida html code bo'lsa code ishga tushib ketadi.

// *textContent bilan innerHtmlni farqi 

// *textContentda esa bu muammoga barham berilgan. 


/********************************
 * !HTMLELEMENT PROPERTY HIDDEN *
 ********************************/
// <div id="elem">A blinking element</div>

// <script>
// setInterval(() => (elem.hidden = !elem.hidden), 1000);
// </script>


/***********
 * !DATASET *
 ***********/
//* javascriptda turib html elementga attribute qo'shish.
//* dataset o'zida unique ma'lumot saqlaydi.

// box.dataset.id = 1 // *id o'rniga istalgan nom kelishi mumkin
// console.log(box.dataset.id);
// *<div data-id="1" class="box">salom hammaga</div> // => bunda data-id="1" nomli attribute qo'shilib qoladi.


/*****************
 * !HASATTRIBUTE *
 *****************/
// * agar attribute bo'lsa true qaytaradi.
console.log(box.hasAttribute("data-id"));

/****************
 * !GETATTRIBUTE *
 ****************/
//* attribute'ga berilgan propertyni olib beradi.
console.log(box.getAttribute("data-id")); // 1

/*****************
 *!SETATTRIBUTE *
 ****************/
//* setAttribute tag uchun class qo'shadi. 
box.setAttribute("data-id", box);

//* Xatoligi: class qo'shganda, unda oldin mavjud bo'lgan classni o'chirib tashlaydi. Buni oldini olish uchun esa quyidagi kodni yozish kifoya
//* clasni o'chirmasdan yoniga qo'shish uchun
todoBody.setAttribute('class', todoBody.getAttribute('class') + ' ' + 'line') //* getAttribute orqali class nomi olingan va bosh string orqali yonma yon joylashtirdik.

//* qachon kerak bo'ladi? => text yaratish

{
  let textNode = document.createTextNode('Here I am');
  //* practise
  let input = document.querySelector('#input');
  let ul = document.querySelector('#ul');
  let btn = document.querySelector('#btn');

  btn.addEventListener('click', dinamic)

  function dinamic() {
    let li = document.createElement('li');
    let text = document.createTextNode(input.value)

    li.append(text)
    ul.append(li)
  }
}


/**************
 * !CLASSNAME *
 **************/
//* class qo'shish = setAttribute: bu ikkalasi orqali ham class qo'shish imkoni mavjud
box.className = "class1 class2" //* ikkita class qo'shish


/****************
* !APPENDCHILD AND PREPENDCHILD *
****************/

//* oldiga qo'shadi
box.appendChild = "class1"

//* orqaga qo'shadi
box.appendChild = "class1"


/*********************
 * !BEFORE AND AFTER *
 *********************/
//* before va after bu funksiya
//* rosmana aka uka qilib qo'shib qo'yadi.
let ol = document.createElement('ol');

document.body.append(ol)
ol.before('before'); // ol' dan oldin qo'shiladi. 
ol.after('after'); // ol'dan keyin qo'shiladi.


/**********
 * REMOVE *
 **********/
//* elentni o'chirib tashlash. To'laqonli o'chiradi. Undefined qolmaydi.

box.remove()

// ? lesson - 6
new Date.getTime() //* bu funksiya orqali biz 1970-yil 1-yanvardan beri bo'lgan davrni, millisekundlardagi ifodasini olishimiz mumkin. Doimiy o'sib boradi.


/**********
 * ! SORT *
 **********/
sorted = [...data].sort((a, b) => a.name.localeCompare(b.name));

/***********
 * !FILTER *
 ***********/
filtered = [...data].filter((el) => el.priority === "high");
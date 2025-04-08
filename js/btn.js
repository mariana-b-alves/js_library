//Practice ex: Add text to btn and toggle between all books and the unread ones

//1- ADD TEXT TO BTN
//Select the btn id so we can add elements to it
let btn = document.getElementById('btn');

//Create a p to add our text
let btnText = document.createElement('p');

//Add a p with text. It'll be included inside our HTML doc
btnText.innerHTML += `
    <p>Select the books you haven't read</p>
    `;
//Append everything inside our btnText var to our 
btn.append(btnText);

//2-TOGGLE BETWEEN ALL BOOKS AND THE UNREAD ONES

  //Create a variable holding all books within the array
  const showAllBooks = () => books;

    //Create a variable holding ONLY the unread books
    const showReadBooks = () => books.filter( book => book.alreadyRead === true );

  //Create a variable holding ONLY the unread books
  const showUnreadBooks = () => books.filter( book => book.alreadyRead === false );


//TO BE DONE LATER...
  

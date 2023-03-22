const numberOfFilms = +prompt("сколько фильмов вы уже просмотрели?","");

const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
    };

 const a = prompt('один из посл просм фильмов?',''),
       b = prompt('как оцените его?',''),
       c = prompt('один из посл просм фильмов?',''),
       d = prompt('как оцените его?','');

       personalMovieDB.movies[a] = b;
       personalMovieDB.movies[c] = d;

      console.log(personalMovieDB);

      
      
      
      if (4) {
        console.log('ok!');
      } 
      else {
        console.log('error');
      }

      const num = 50;
       
      if (num < 49) {
        console.log('error');
      } 
      
      else if (num > 100) {
        console.log('много'); 
    }
      
      else {
        console.log('ok');
    }

    num = 150,
    (num === 50) ? console.log ('ok'): console.log('error'); 




    const num = 50;

    switch (num) {
    case 49: console.log('не верно');
    brake;

    case 100: console.log('неверно');
    break:
    
    case 50:2
  


    const hamb = true;
    const fries = true;

    if(hamb && fries) {
      console.log('i sit');
    }

    console.log((hamb && fries));
    
    
    
    const hamb = 5;
    const fries = 0;

    if(hamb && fries) {
      console.log('i sit');
    }

    console.log((hamb && fries));
   
   
   
   
   
    const hamb = 5;
    const fries = 1;
    const cola = 5;

    if(hamb === 5 && cola === 5 && fries ===1) {
      console.log('all sit');
    }
 else {
  console.log('uhodim');
 }
  



 console.log(!1 && 2 || !3);

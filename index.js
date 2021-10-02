/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ""),
    lastMove = [], grade = []

if(!numberOfFilms) {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "")
}

// for (let i = 0; i < 2; i++) {
//   lastMove = prompt('Один из последних просмотренных фильмов?', ""),
//   grade = prompt('На сколько оцените его?', "")
  
//   if(lastMove != null && grade != null && lastMove != '' && grade != '' && lastMove.length < 50) {
//     personalMovieDB.movies[lastMove]=grade
//   } else {
//     i--;
//   }
// }



const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
}

console.log(personalMovieDB)

if (numberOfFilms < 10) {
  document.write("<h1>Мало</h1>")
} else if (numberOfFilms >10 && numberOfFilms < 50) {
  document.write("<h1>много</h1>")
} else if (numberOfFilms > 50) {
  document.write("<h1>киноман</h1>")
} else {
  document.write("<h1>Err</h1>")
}
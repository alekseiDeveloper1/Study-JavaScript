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

// 'use strict';

let numberOfFilms;

function start(numberOfFilms) {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "")

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "")
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
}

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    lastMove = prompt('Один из последних просмотренных фильмов?', ""),
    grade = prompt('На сколько оцените его?', "")
    
    if(lastMove != null && grade != null && lastMove != '' && grade != '' && lastMove.length < 50) {
      personalMovieDB.movies[lastMove]=grade
    } else {
      i--;
    }
  }
}

rememberMyFilms()


function showMyDB(private, db) {
  if (!private) {
    console.log(db);
  }
}
showMyDB(personalMovieDB.private, personalMovieDB)

function detectPersonalLevel() {
  if (numberOfFilms < 10) {
    document.write("<h1>Мало</h1>")
  } else if (numberOfFilms >10 && numberOfFilms < 50) {
    document.write("<h1>много</h1>")
  } else if (numberOfFilms > 50) {
    document.write("<h1>киноман</h1>")
  } else {
    document.write("<h1>Err</h1>")
  }  
}
detectPersonalLevel();

function writeYourGenres(genres) {
  for (let i = 1; i < 4; i++) {
     
    genres[i - 1] = prompt(`Ваш любимый жанр №${i}?`, "");
  }
}

writeYourGenres(personalMovieDB.genres)
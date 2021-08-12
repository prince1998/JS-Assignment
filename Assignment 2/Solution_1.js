const fetch = require("cross-fetch");

const apiCall = async () => {
  const res = await fetch(
    "https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json"
  );
  const data = await res.json();

  let result = {
    actors: [
      {
        Name: "",
        Movies: "",
      },
    ],
    genres: [
      {
        Type: "",
        Movies: "",
      },
    ],
  };

  const actor = {};
  const genre = {};
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].cast.length; j++) {
      if (!actor[data[i].cast[j]]) {
        actor[data[i].cast[j]] = [];
      }
      actor[data[i].cast[j]].push(data[i].title);
    }
    for (let k = 0; k < data[i].genres.length; k++) {
      if (!genre[data[i].genres[k]]) {
        genre[data[i].genres[k]] = [];
      }
      genre[data[i].genres[k]].push(data[i].title);
    }
  }

  for ([key, val] of Object.entries(actor)) {
    let op = {
      Name: key,
      Movies: val,
    };
    result.actors.push(op);
  }
  for ([key, val] of Object.entries(genre)) {
    let op = {
      Type: key,
      Movies: val,
    };
    result.genres.push(op);
  }
  console.log(result);
};

apiCall();

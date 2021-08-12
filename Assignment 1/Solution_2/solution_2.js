const fetch = require("cross-fetch");

const api_call = async (url) => {
  try {
    const res = await fetch(url);
    if (res.status >= 400) {
      throw new Error("Bad response from server");
    } else {
      return res.json();
    }
  } catch (error) {
    console.log(error.message);
  }
};

const ans = async (input) => {
  const data = await api_call(
    `https://api.github.com/search/repositories?q=${input}`
  );
  let results = [];
  for (let value of data.items) {
    const result = {
      name: value["name"],
      full_name: value.full_name,
      private: value.private,

      licenseName: value.license,
      score: value.score,
    };
    results.push(result);
  }
  console.log(results);
};
ans("node");

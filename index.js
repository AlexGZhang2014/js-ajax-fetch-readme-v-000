const app = "I don't do much.";

const token = "c4059da012edb71f72919809779ed86b3fbce194";

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));

fetch("test.json")
  .then(response => response.json())
  .then(json => {
      const par = document.createElement("p");
      par.textContent = `the X value in "test.json" is ${json.x}`;
      document.body.append(par);
      console.log(json);
  })

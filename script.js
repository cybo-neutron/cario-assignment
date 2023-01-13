function cardElement(title, artist, album, year, rank) {
  //   console.log(rank);
  return `
        <div class="card">
            <div class="title">${title}</div>
            <div class="artist">${artist}</div>
            <div class="album">${album}</div>
            <div class="year">${year}</div>
            <div class="rank">${rank}</div>
          </div>
        
        `;
}

const display = document.getElementById("display");

// display.appendChild(
//   document.createElement(cardElement("title", "alb", "199", 4))
// );

fetch("https://run.mocky.io/v3/429bd5db-eeac-44dd-ba8a-b2e2ce1fef4d")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.songs.forEach((elem) => {
      const element = document.createElement("div");
      //   console.log(elem.rank.toString());
      const rank = `${elem.rank}`;
      console.log({ title: elem.title, rank });
      element.innerHTML = cardElement(
        elem.title,
        elem.title,
        elem.album,
        elem.year,
        rank
      );
      display.appendChild(element);
    });
  });

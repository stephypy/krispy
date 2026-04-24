// Bruh. Against better judgement fr.
const playlist = [
  "https://open.spotify.com/track/73VqJSXXWF3pV5uqnuO92N",
  "https://open.spotify.com/track/41TKPOt2QB6slyOE84rMDi",
  "https://open.spotify.com/track/7EejjSh1WDrm81z0u3Fhmk",
  "https://open.spotify.com/track/608xszaAxVh4m7NcKJiAbF",
  "https://open.spotify.com/track/6iYiQdYGDFtncKdmF7V9u3",
  "https://open.spotify.com/track/2RVQIq7bLi4Eu6xHPyQ46t",
  "https://open.spotify.com/track/17EVu5b0l5uo2gErSfqEt1",
  "https://open.spotify.com/track/6b9hm8mvZ2KH7Fl7LLA5ct",
  "https://open.spotify.com/track/72BNAxmvQI3vYPgf9hgnYD",
  "https://open.spotify.com/track/4aLQ6VBFJl7i8msvDOjIsp",
  "https://open.spotify.com/track/7ooheiWgbyNtGOBTPbjNoq",
  "https://open.spotify.com/track/19ZrbiAIKOBKUYPXOHsLZu"
];

let container = document.querySelector("#music");

function displayPlaylist() {
  let fragment = new DocumentFragment();

  playlist.forEach((song) => {
    console.log(song);

    let divElement = document.createElement("div");
    let iframeElement = document.createElement("iframe");
    iframeElement.data-testid = "embed-iframe";
    iframeElement.height = "152";
    iframeElement.frameBorder="0"
    iframeElement.src = "song";
    iframeElement.loading = "lazy";
    
    divElement.appendChild(iframeElement);
    fragment.appendChild(divElement);
  });

  container.appendChild(fragment);
}

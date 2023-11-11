import React from "react";
import memesData from "./memesData.js";

export default function Meme() {
  

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1g8my4.jpg",
  });

  

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    let url = memesArray[randomNumber].url;
    setMeme(prevState => {
        // return {...prevState, randomImage: url}
    });
  }

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button className="form--button" onClick={getMemeImage}>
          Get a new image 🖼
        </button>
      </div>
      <img src={meme.randomImage} className="meme--image" />
    </main>
  );
}

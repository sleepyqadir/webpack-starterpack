import generateJoke from './generateJoke'
import "./styles/main.scss"
import emoji from "./assets/laughing.svg"

const main = async () => {

  //  dom variable access
  const emojiImg = document.getElementById("emoji")
  const generateJokeButton = document.querySelector(".jokeBtn")

  await generateJoke()

  emojiImg.src = emoji

  generateJokeButton.addEventListener("click", async () => {
    await generateJoke()
  })

}
main()
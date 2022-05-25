import axios from "axios";
const config = {
  headers: {
    "accept": "application/json"
  }
}
const generateJoke = async () => {
  try {
    const { data } = await axios.get("https://icanhazdadjoke.com", config)
    const jokeDiv = document.getElementById("joke")
    jokeDiv.innerHTML = data.joke
  }
  catch (e) {
    return "[error] : Did you hear the one about the guy with the broken hearing aid? Neither did he."
  }
}

export default generateJoke
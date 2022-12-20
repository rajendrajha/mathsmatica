
  let speech = new SpeechSynthesisUtterance();
  speech.volume = 0.2;
  speech.rate = 1;
  speech.pitch = 1;
  speech.lang = "en";
  speech.text =
    "Hi, I am a mathbot. I am here to solve your queries. Please enter your query below.";
  speechSynthesis.speak(speech);


let pq = "QUESTION";
const question_container = document.getElementById("input");
let container = document.getElementById("answer");
function submit(element) {
  let question = document.getElementById("input").value;
  speech.text = `The question is ${question}`;
  speechSynthesis.speak(speech);
  speech.text = `Please enter the variable whose value is to be calculated`;
  speechSynthesis.speak(speech);

  let msg = document.createElement("div");
  if (question != "") {
    msg.classList = "user-msg";
    msg.innerHTML = `<h3><i>Q). ${question}</i></h3>`;
    container.append(msg);
    let el = element;
    question_container.value = "";
    question_container.placeholder =
      "Enter the variable whose value is to be calculated";
    el.setAttribute("onclick", "submit2(this)");
    pq = question;
  }
}
function submit2(element) {
  let el = element;
  let variable = question_container.value;
  let ans = nerdamer.solve(pq, variable);

  if (ans.toString()) {
    if (ans.toString() != "[0]") {
      if (ans.toString() != "[]") {
       
        let msg3 = document.createElement("div");
        msg3.classList = "msg";
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${pq}&key=AIzaSyCcWMHww_Ul_z3qdckGp_OZnzaGbaswhtk`;
        // console.log(url);
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            msg3.innerHTML =
              `<iframe src=https://www.youtube.com/embed/${data.items[Math.floor(math.random()*10)].id.videoId} width="100%" height="500px" class="youtubeVideo"></iframe>`;
            });
        container.append(msg3);
        let msg2 = document.createElement("div");
        msg2.classList = "msg";
        msg2.innerHTML = `<h3><i>Ans.${variable}= ${ans} or ${ans.toDecimal()}</i></h3>`;
        container.append(msg2);
        speech.text = `For ${variable} the solution of ${pq} is ${ans}`;
        speechSynthesis.speak(speech);
        question_container.value = "";
        question_container.placeholder = "Enter Your Question Here...";
        el.setAttribute("onclick", "submit(this)");
      }
    }
  }
}
// AIzaSyCcWMHww_Ul_z3qdckGp_OZnzaGbaswhtk

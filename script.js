const tasButtonElement = document.querySelector("#tas");
const kagitButtonElement = document.querySelector("#kagit");
const makasButtonElement = document.querySelector("#makas");
const sifirlaButtonElement = document.querySelector("#sifirla");
const resultTextElement = document.querySelector("#result-text");
const scoreTextElement = document.querySelector("#score-text");
let userMove = "";
let result = "";
let score;
score = JSON.parse(localStorage.getItem("skor"));
if (!score) 
{
    score = 
    {
        wins:0,
        ties:0,
        loses:0
    }    
}

tasButtonElement.setAttribute("onclick","javascript:playGame('tas');")
kagitButtonElement.setAttribute("onclick","javascript:playGame('kagit');")
makasButtonElement.setAttribute("onclick","javascript:playGame('makas');")
sifirlaButtonElement.setAttribute("onclick","javascript:resetScore();")
scoreTextElement.innerHTML = `kazanılan:  ${score.wins} berabere: ${score.ties}  kayıp: ${score.loses}  `;

function generateComputerMove()
{
    const randomNumber = Math.random();
    let computerMove = "";
    if (randomNumber >= 0 && randomNumber < 1/3) 
    {
        computerMove = "tas";
        return computerMove;
    }
    else if (randomNumber >= 1/3 && randomNumber <2/3) 
    {
        computerMove = "kagit";
        return computerMove;    
    }
    else
    {
        computerMove = "makas";
        return computerMove;
    }
}
function playGame(userMove)
{
    score = JSON.parse(localStorage.getItem("skor"));
    if (!score) 
    {
        score = 
        {
            wins:0,
            ties:0,
            loses:0
        }    
    }
    
    let result = "";
    let computerMove = generateComputerMove();
    if (computerMove === "tas" && userMove ==="kagit") 
    {
        result = "win";
        score.wins += 1;
        localStorage.setItem("skor",JSON.stringify(score))
    }
    else if (computerMove === "tas" && userMove ==="tas") 
    {
        result = "tie";
        score.ties += 1;
        localStorage.setItem("skor",JSON.stringify(score))   
    }
    else if (computerMove === "tas" && userMove === "makas") 
    {
        result = "lose";
        score.loses += 1;
        localStorage.setItem("skor",JSON.stringify(score))   
    }

    else if (computerMove ==="kagit" && userMove ==="makas") 
    {
        result = "win";
        score.wins += 1;
        localStorage.setItem("skor",JSON.stringify(score))   
    }
    else if (computerMove ==="kagit" && userMove === "kagit") 
    {
        result = "tie";
        score.ties += 1;
        localStorage.setItem("skor",JSON.stringify(score))  
    }
    else if (computerMove === "kagit" && userMove ==="tas") 
    {
        result = "lose";
        score.loses += 1;
        localStorage.setItem("skor",JSON.stringify(score))
   
    }
    else if (computerMove === "makas" && userMove === "tas") 
    {
        result = "win";
        score.wins += 1;
        localStorage.setItem("skor",JSON.stringify(score))  
    }
    else if (computerMove === "makas" && userMove === "makas") 
    {
        result = "tie";
        score.ties += 1;
        localStorage.setItem("skor",JSON.stringify(score))  
    }
    else
    {
        result = "lose";
        score.loses += 1;
        localStorage.setItem("skor",JSON.stringify(score))
    }
    resultTextElement.innerText = `sonuç: ${result}!`;
    scoreTextElement.innerHTML = `kazanılan:  ${score.wins} berabere: ${score.ties}  kayıp: ${score.loses}  `;
    return result;

}

function resetScore()
{
    localStorage.removeItem("skor");
    scoreTextElement.innerHTML = "kazanılan: 0 berabere: 0 kayıp: 0";
    resultTextElement.innerText = `taş-kağıt-makas seçmek için butonlara tıklayın`;

}

var rockID = document.getElementById("rockID")
			var paperID = document.getElementById("paperID")
			var scissorsID = document.getElementById("scissorsID")
			var result = document.getElementById("result")
			var myOption = document.getElementById("option")
			var botOption = document.getElementById("botOption")
			function botRock() {
				var prompts = ["Rock", "Paper", "Scissors"]
				var option = prompts[Math.floor(Math.random() * prompts.length)];
				myOption.innerText = "Your option: Rock";
				botOption.innerText = `Bot's option: ${option}`;
				var score = Number(document.getElementById("score").value)
				var botScore = Number(document.getElementById("botScore").value)
				switch(option) {
					case "Rock":
						result.innerText = "DRAW!";
						result.style = "color: grey;"
						break;
					case "Paper":
						result.innerText = "YOU LOSE!";
						result.style = "color: red;"
						document.getElementById("botScore").value = botScore + 1;
						break;
					case "Scissors":
						result.innerText = "YOU WIN!";
						result.style = "color: lightgreen;"
						document.getElementById("score").value = score + 1;
						break;
				}
			}
			function botPaper() {
				var prompts = ["Rock", "Paper", "Scissors"]
				var option = prompts[Math.floor(Math.random() * prompts.length)];
				myOption.innerText = "Your option: Paper";
				botOption.innerText = `Bot's option: ${option}`;
				var score = Number(document.getElementById("score").value)
				var botScore = Number(document.getElementById("botScore").value)
				switch(option) {
					case "Paper":
						result.innerText = "DRAW!";
						result.style = "color: grey;"
						break;
					case "Scissors":
						result.innerText = "YOU LOSE!";
						result.style = "color: red;"
						document.getElementById("botScore").value = botScore + 1;
						break;
					case "Rock":
						result.innerText = "YOU WIN!";
						result.style = "color: lightgreen;"
						document.getElementById("score").value = score + 1;
						break;
				}
			}
			function botScissors() {
				var prompts = ["Rock", "Paper", "Scissors"]
				var option = prompts[Math.floor(Math.random() * prompts.length)];
				myOption.innerText = "Your option: Scissors";
				botOption.innerText = `Bot's option: ${option}`;
				var score = Number(document.getElementById("score").value)
				var botScore = Number(document.getElementById("botScore").value)
				switch(option) {
					case "Scissors":
						result.innerText = "DRAW!";
						result.style = "color: grey;"
						break;
					case "Rock":
						result.innerText = "YOU LOSE!";
						result.style = "color: red;"
						document.getElementById("botScore").value = botScore + 1;
						break;
					case "Paper":
						result.innerText = "YOU WIN!";
						result.style = "color: lightgreen;"
						document.getElementById("score").value = score + 1;
						break;
				}
			}
			function rock() {
				result.innerText = "";
				myOption.innerText = "";
				botOption.innerText = "";
				rockID.style = "background-color: lightgreen;"
				paperID.style = "background-color: black;"
				scissorsID.style = "background-color: black;"
				botRock()
			}
			function paper() {
				result.innerText = "";
				myOption.innerText = "";
				botOption.innerText = "";
				paperID.style = "background-color: lightgreen;"
				rockID.style = "background-color: black;"
				scissorsID.style = "background-color: black;"
				botPaper()
			}
			function scissors() {
				result.innerText = "";
				myOption.innerText = "";
				botOption.innerText = "";
				scissorsID.style = "background-color: lightgreen;"
				paperID.style = "background-color: black;"
				rockID.style = "background-color: black;"
				botScissors()
			}
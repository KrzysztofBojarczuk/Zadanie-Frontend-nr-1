var attemptsPositive = 0;
var attemptsFailure = 0;

function checkPrime(event) {
  event.preventDefault();

  var num = document.getElementById("numberInput").value;
  var resultMessage = document.getElementById("result");
  var positiveCounter = document.getElementById("positiveCounter");
  var failureCounter = document.getElementById("failureCounter");

  positiveCounter.innerText = "";
  failureCounter.innerText = "";

  var primeWorker = new Worker("worker.js");

  primeWorker.onmessage = function (e) {
    var isPrime = e.data;

    if (isPrime) {
      resultMessage.innerHTML = "<b>" + num + "</b>" + " jest liczbą pierwszą.";
      attemptsPositive++;
    } else {
      resultMessage.innerHTML =
        "<b>" + num + "</b>" + " nie jest liczbą pierwszą.";
      attemptsFailure++;
    }

    positiveCounter.innerHTML =
      "Ilość pozytywnych prób: " + "<b>" + attemptsPositive + "</b>";
    failureCounter.innerHTML =
      "Ilość negatywnych prób: " + "<b>" + attemptsFailure + "</b>";

    positiveCounter.style.display = attemptsPositive === 0 ? "none" : "block";
    failureCounter.style.display = attemptsFailure === 0 ? "none" : "block";
  };

  primeWorker.postMessage(num);
}

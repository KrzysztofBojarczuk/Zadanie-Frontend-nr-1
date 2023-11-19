self.onmessage = function (e) {
  var num = e.data;

  var isPrime = true;

  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  self.postMessage(isPrime);
};

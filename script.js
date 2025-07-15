let fails = 0;
let payouts = 0;

function trackFail() {
  fails++;
  updateResults();
}

function trackPayout() {
  payouts++;
  updateResults();
}

function updateResults() {
  const total = fails + payouts;
  const payoutRate = total ? ((payouts / total) * 100).toFixed(2) : 0;
  document.getElementById("results").textContent =
    `Fails: ${fails}, Wins: ${payouts}, Payout Rate: ${payoutRate}%`;
}

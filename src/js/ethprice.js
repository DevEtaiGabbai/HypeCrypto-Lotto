
$.getJSON(
  "https://min-api.cryptocompare.com/data/price?fsym=MATIC&tsyms=USD",
  function(json) {
    console.log(json['USD']);
    $('#poolPrice').text((500*json['USD']).toFixed(2));
    $('#ticketPrice').text((20*json['USD']).toFixed(2));
  }
);

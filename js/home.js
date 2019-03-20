
function getTopJobOffers(){
	$.ajax({
			type: "POST",
			url: urlPost,
			data: '{uuid: "' + uuids[i] + '", apiKey: "' + apiKeys[i] + '" }',
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			success: function (datos) {
				if (datos.d == 'OK') {
					newAlert(3,literalUnbind + " " + nombreDispositivos,false,true)
				} else {
					newAlert(4, datos.d + ' ' + nombreDispositivos, false, true)
				}
			},
			failure: function (datos) {
				newAlert(4, datos.d + ' ' + nombreDispositivos, false, true)
			}
	});
}
function searchJobOffers(keyword,city){
	var url = "http://18.221.163.161:8080/ws/getAllOffers",
	str = {"filter_keyword":keyword,"filter_city":city};
	$.post(url,$.param(str), function(data){
		console.log(data);
		alert(data);
	}).fail(function(data){
		console.log(data);
		alert(data);
	});
}

$(document).ready(function(){
	searchJobOffers("","");
});
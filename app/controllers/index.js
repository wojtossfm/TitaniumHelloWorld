function doClick(e) {
    alert($.label.text);
}

var incident = Alloy.Collections.instance('incident'); 

function fnIncidentsRefresh(e) {
	Alloy.createModel('incident', {"subject":'D'}).save();
	var incident = Alloy.Collections.instance('incident'); 
    incident.fetch({
        success: e.hide,
        error: e.hide
    });
}

Alloy.createModel('incident', {"subject":'A'}).save();
Alloy.createModel('incident', {"subject":'B'}).save();
Alloy.createModel('incident', {"subject":'C'}).save();

$.index.open();
$.incidentsWidget.refresh();
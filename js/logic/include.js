var div_principal = document.createElement("div");
div_principal.setAttribute('id','complete-dialog');
div_principal.setAttribute('tabindex','-1');
div_principal.className = "modal fade";


var divNiveldois = document.createElement("div");
divNiveldois.className = "modal-dialog";

div_principal.appendChild(divNiveldois);


var divNiveltres = document.createElement("div");
divNiveltres.className = "modal-content";

divNiveldois.appendChild(divNiveltres);

var divNivelquatro = document.createElement("div");
divNivelquatro.className = "modal-header";



var buttonOfnivelQuatro = document.createElement("button");
buttonOfnivelQuatro.setAttribute('type','button');
buttonOfnivelQuatro.className = "close";
buttonOfnivelQuatro.setAttribute('data-dismiss','modal');
buttonOfnivelQuatro.setAttribute('aria-hidden','true')

var titleOfNivelQuatro = document.createElement("h4");
titleOfNivelQuatro.className = "modal-title";

divNivelquatro.appendChild(buttonOfnivelQuatro);
divNivelquatro.appendChild(titleOfNivelQuatro);

var alertBody = document.createElement("div");
alertBody.className = "modal-body";

var footer = document.createElement("div");
footer.className = "modal-footer";

divNiveltres.appendChild(divNivelquatro);
divNiveltres.appendChild(alertBody);
divNiveltres.appendChild(footer);

var buttonFooter = document.createElement("button");
buttonFooter.className = "btn btn-primary";
buttonFooter.setAttribute('data-dismiss','modal');
footer.appendChild(buttonFooter);
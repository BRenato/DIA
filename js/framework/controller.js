/* =================== CONTROLER COMPONENT =================== */
var Global = {

/* ====== GLOBAL ====== */
	var_yes					: "Y",
	var_no					: "N",
	var_blue_to_light		: "#6ECAEC",
	var_blue_to_dark		: "#2E8AAC", 
	var_theme_dark			: "dark",
	var_theme_light			: "light",
	var_current_theme		: undefined, //Controller.var_theme_dark || Controller.var_theme_light
	var_dark_color_code		: '#282828',
	var_light_color_code	: 'white',
	getColorCodeTheme		: function(){
		var theme = this.var_current_theme;
tt(':: THEME :: - ' + theme)
		switch(theme){
			case this.var_theme_dark:
				return this.var_light_color_code;
			break;
			case this.var_theme_light:
				return this.var_dark_color_code;
			break;
		}
	}
/* ==== ENDS HERE ! ==== */
};
Object.seal(Global);

/*DEFAULT THEME = DARK*/
/********************************
* POSSIBLE THEMES (24/01/2015): *
*	-dark                       *
*	-light                      * 
********************************/

/* =================== COMPONENTS CONSTRUCTION =================== */
//The wizard components as an individual declaration, don't use this method. Use Wizard Components to set a new Wizard inicialization
var Components = { 

	ButtonSubmit : {
		//BUTTON SUBMIT PROPERTIES
		html_img_component 		: "btnSubmit-img",
		html_txt_component 		: "btnSubmit-txt",
		image_chevron_right		: "fa fa-chevron-right",/*possibilidade de adicionar outras imagens com propriedade da imagem com outro nome*/
		text_submit				: "Submit ",
		text_done				: "Done "
	},
	
	ButtonBack : {
		//BUTTON BACK PROPERTIES
		html_img_component 	: "btnBack-img",
		html_txt_component 	: "btnBack-txt",
		image_chevron_left	: "fa fa-chevron-left",/*possibilidade de adicionar outras imagens com propriedade da imagem com outro nome*/
		text_prev			: " Previous",
		text_back			: " Back"
	},

	Alerts : {
		//DIALOG WINDOWS
		html_header_component			: "modal-header",
		html_body_component				: "modal-body",
		html_footer_component  			: "modal-footer",
		html_message_body_component 	: "bootstrap-dialog-message",
		html_message_header_component	: "bootstrap-dialog-header",
		html_message_footer_component	: "bootstrap-dialog-footer",
		html_button_component			: "btn btn-default"
	}
};
Object.freeze(Components);//tt(Object.isFrozen(Components));

/* ======= FOR TRACES ======= */
function tt(_print){
	console.log(_print);
};

function DeepNav(id, faIcon, label, target, subDeepNavs){
	this.id = id;
	this.faIcon = faIcon;
	this.label = label;
	this.target = target;
	this.subDeepNavs = subDeepNavs;
	this.loadScreen = function(){ loadScreen(target)};
}

function loadScreen(screenPath){
	//screenPath = "screens/alerts/alert.html"
	document.getElementById('screen-target').innerHTML='<object type="text/html" data="' + screenPath + '" ></object>';
	//$( "#screen-target" ).load( screenPath );
};


/* Menu Object */
var Menu = {
	title: "Menu",
	deepNavs: [],
	doMenu: function() {
		var ul_elem = document.getElementById("navMenuUl");
		var i, len;
		for (i = 0, len = this.deepNavs.length; i < len; i++){
			var li_elem = document.createElement("li");
			var a_elem = document.createElement("a");
			a_elem.className = "menu-items improve-menu-text";
			a_elem.innerHTML = '<i class="' + this.deepNavs[i].faIcon + '"></i> ' + this.deepNavs[i].label;
			a_elem.id = this.deepNavs[i].id;
			li_elem.appendChild(a_elem);
			ul_elem.appendChild(li_elem);
		}
	}
};

Menu.deepNavs = [
	new DeepNav('menuBtnHome', 'fa fa-home', 'Home', 'screens/divTest.html'),
	new DeepNav('menuBtnIdea', 'fa fa-lightbulb-o', 'Idea', 'screens/cenas.html'),
	new DeepNav('menuBtnCoffee', 'fa fa-coffee', 'Coffee', 'screens/cenas.html')
];
/* ===============================  WIZARD COMPONENT ================================= */

/*TO START A WIZARD, FIRST CREATE AN OBJECT WizardComponent WITH ALL PROPERTIES*/
var WizardComponent = {

	html_label_component_id : "btnCenterLabel",
	html_steps_component_id : "btnCenterSteps",
	wizard_label			: undefined,
	maximum_steps_number 	: 0,
	inicial_step			: 0,
	current_step_number		: 0,
	nextStepNumber 			: function(){
tt(":: NextWizardStep ::");
		if (WizardComponent.current_step_number != WizardComponent.maximum_steps_number){
			WizardComponent.current_step_number += 1;
tt(":: CurrentStepNumber = " + WizardComponent.current_step_number + " ::");
			starWizard();
		}else{
tt(":: No more steps possible to define ! ::");
			return null;
		};
	},
	/*SECOND, SET startWizard() AND SEND IN ARGUMENT THE PREVIOUSLY CREATED OBJECT*/
	startWizard : function (){//WizardComponent Object - Only set starWizard one time !
	
		var wizardLabel = document.getElementById(this.html_label_component_id);
		var wizardSteps = document.getElementById(this.html_steps_component_id);

		wizardLabel.innerHTML = this.wizard_label;
		wizardSteps.innerHTML = ' (' + this.current_step_number + '/' + this.maximum_steps_number + ') ';
	}
};
Object.seal(WizardComponent);//tt(Object.isFrozen(WizardComponent));

/* ========================== WIZARD COMPONENT ENDS HERE ============================= */

/* ============= ALERTS ============= */
//http://nakupanda.github.io/bootstrap3-dialog/#examples

var AlertsImprove = {
	
	SetAlertsHeaderColor : function(){
		var theme = Global.var_current_theme;
		tt("THEME IN ALERTS DIALOG - " + theme);

		$(document).ready(function(){//document.ready to wait message show!
			var modal_header = document.getElementsByClassName(Components.Alerts.html_header_component);
			tt(modal_header[0])
        	switch (theme) {
				case Global.var_theme_dark:
					$( Components.Alerts.html_header_component ).css( "width")
					modal_header[0].setAttribute('style','color: ' + Global.var_blue_to_dark);
				break;
				case Global.var_theme_light:
					modal_header[0].setAttribute('style','background-color:' + Global.var_blue_to_light);
				break;
			}
        });				
	},

	SimpleAlert : function(){
		this.top_label_text = undefined;
		this.alert_message	= undefined;
		this.icon			= undefined;
		this.Show 			= function(){
			BootstrapDialog.show({
          		title	: this.top_label_text,
           		message : this.alert_message 
        	});
        	AlertsImprove.SetAlertsHeaderColor();
		}	
	},

	AlertWithConfirmation : function(){
		this.top_label_text = undefined;
		this.alert_message	= undefined;
		this.button_label 	= undefined;
		this.Show = function()
		{
			BootstrapDialog.show({
				title		: this.top_label_text,
            	message 	: this.alert_message,
            	buttons : [{
            			 	icon  : this.icon,	//http://getbootstrap.com/components//
            			 	label : this.button_label,
                		 	action: function(dialogItself){
                         				dialogItself.close();
                					}
            			  }],
        	});
        	AlertsImprove.SetAlertsHeaderColor()
		};
	}
};

/* ============= ALERTS ENDS HERE ! ============= */




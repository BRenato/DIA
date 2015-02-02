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
		id 						: "buttonSubmit", 
		html_img_component 		: "btnSubmit-img",
		html_txt_component 		: "btnSubmit-txt",
		image_chevron_right		: "fa fa-chevron-right",/*possibilidade de adicionar outras imagens com propriedade da imagem com outro nome*/
		text_submit				: "Submit ",
		text_done				: "Done "
	},
	
	ButtonBack : {
		//BUTTON BACK PROPERTIES
		id 					: "buttonBack",
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
	var_control_access		: false,
	html_label_component_id : "btnCenterLabel",
	html_steps_component_id : "btnCenterSteps",
	wizard_label			: undefined,
	maximum_steps_number 	: 0,
	inicial_step			: 0,
	current_step_number		: 1,
	
	nextStepNumber 			: function(){

		if(this.current_step_number === this.maximum_steps_number){
				
			var alert3 = new AlertsImprove.AlertWithTwoButtons();
		    alert3.top_label_text = "TWO BUTTONS IN WIZARD";
		    alert3.alert_message = "VAIS SUBMETER DADOS !";
		    alert3.button_cancel_icon = "fa fa-times";
		    alert3.button_confirm_icon = "fa fa-check";
		    alert3.button_cancel_label = "Cancelar";
		    alert3.button_confirm_label = "Confirmar";
		    alert3.Show();//este alerta será criado no próprio ecrã ?! para poder editar a vontade os textos e assim. //acho que é o que faz mais sentido
			//this.setAlert();//remover o código acima e fazer o código desta função nos próprio ecrãs
		}else{
			if(this.current_step_number === this.inicial_step){
				setWizardComponentsVisibility(Components.ButtonBack.id);
			}
tt(":: NextWizardStep ::");
			if (this.current_step_number != this.maximum_steps_number){
				this.current_step_number += 1;
tt(":: CurrentStepNumber = " + this.current_step_number + " ::");
			}else{
tt(":: No more steps possible to define ! ::");
				return null;
			};
			this.setWizardText();
		}

tt("CURRENT STEP NUMBER: " + this.current_step_number);
tt("LAST STEP NUMBER: " + this.maximum_steps_number);
/* ======= MAKE BACK BUTTON VISIBLE ======== */
		function setWizardComponentsVisibility() {
tt("setWizardComponentsVisibility");
			var argLength_nrb = arguments.length;
			var component_obj;

			for (var i = 0; i < argLength_nrb; i++){
				component_obj = arguments[i];
				wizardComponentsVisibility(component_obj);
			}
		}

		function wizardComponentsVisibility (_component_name){
			if (_component_name === Components.ButtonBack.id){
				
				var theme = Global.getColorCodeTheme();
				component_txt = document.getElementById(Components.ButtonBack.html_txt_component);
				component_img = document.getElementById(Components.ButtonBack.html_img_component);
				
				component_txt.setAttribute('style', 'color: ' + theme + '!important');
				component_img.setAttribute('style', 'color: ' + theme + '!important');
			}
		}
/* ======= MAKE BACK BUTTON VISIBLE ENDS HERE ! ======== */
	},

	beforeStepNumber : function(){

tt('seeIfIsFirstScreen');
		if (!this.var_control_access){//is first access ?
			if(this.current_step_number != this.inicial_step){
				this.current_step_number -= 1;
				this.setWizardText();
			}else{
tt(":: No less steps possible to define ! ::");
				return null;
			}
		}else{ this.var_control_access = false;}

		if(this.current_step_number === this.inicial_step){
			setWizardComponentsInvisibility(Components.ButtonBack.id);
		}
tt("CURRENT STEP NUMBER: " + this.current_step_number);
tt("INICIAL STEP NUMBER: " + this.inicial_step);


/* ======= MAKE BACK BUTTON INVISIBLE ======== */
		function setWizardComponentsInvisibility() {
tt("setWizardComponentsInvisibility");
			var argLength_nrb = arguments.length;
			var component_obj;

			for (var i = 0; i < argLength_nrb; i++){
				component_obj = arguments[i];
				wizardComponentsInVisibility(component_obj);
			}
		}

		function wizardComponentsInVisibility(_component_name){
			if (_component_name === Components.ButtonBack.id){
			
				component_txt = document.getElementById(Components.ButtonBack.html_txt_component);
				component_img = document.getElementById(Components.ButtonBack.html_img_component);

				component_img.setAttribute('style','visibility : hidden !important');	
				component_txt.setAttribute('style','visibility : hidden !important');
			}
		}
/* ======= MAKE BACK BUTTON INVISIBLE ENDS HERE ! ======== */
	},

	/*SECOND, SET startWizard() AND SEND IN ARGUMENT THE PREVIOUSLY CREATED OBJECT*/
	startWizard : function (){//WizardComponent Object - Only set starWizard one time !
	
		this.setWizardText();
		this.validateScreen();//we can not decrease current step number at the begining
		this.setWizardEvents();
	},

	setWizardText : function(){
		var wizardLabel = document.getElementById(this.html_label_component_id);
		var wizardSteps = document.getElementById(this.html_steps_component_id);

		wizardLabel.innerHTML = this.wizard_label;
		wizardSteps.innerHTML = ' (' + this.current_step_number + '/' + this.maximum_steps_number + ') ';
	},
	
	setWizardEvents : function(){//esta funcionalidade faz sentido colocar aqui? ou nos ecrãs? porque os eventos de click,
		//nos ecrãs, terá mais funcionalidades que apenas estas. Dá para editar o codigo dos eventos ?!
		//http://www.w3schools.com/jsref/dom_obj_event.asp
		//http://www.sitepoint.com/javascript-custom-events/

		var btn_back = document.getElementById(Components.ButtonBack.html_img_component)
		btn_back.onclick = function(){
			WizardComponent.beforeStepNumber(); //colocar isto nos ecrãs
			//WizardComponent.seeIfIsFirstScreen();//To Remove
		};

		var btn_submit = document.getElementById(Components.ButtonSubmit.html_img_component)
		btn_submit.onclick = function(){
			WizardComponent.nextStepNumber(); //colocar isto nos ecrãs
			//WizardComponent.seeIfIsLastScreen(); //To Remove
		};

	},
	
	validateScreen : function(){
tt('validateScreen');
			if(this.current_step_number === this.inicial_step){
				this.var_control_access = true;
				this.beforeStepNumber();
			}
tt("CURRENT STEP NUMBER: " + this.current_step_number);
tt("INICIAL STEP NUMBER: " + this.inicial_step);
		},

	removeWizard : function(){
		//esta função é chamada no click de confirmação da dialog
		//remover eventos;
		//remover botões !
	},

	setAlert : function(){

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
		var modal_header = document.getElementsByClassName(Components.Alerts.html_header_component);
tt("HEADER MSG VALUE: " + modal_header[0])
        switch (theme) {
			case Global.var_theme_dark:
				modal_header[0].setAttribute('style','background-color: ' + Global.var_blue_to_dark);
			break;
			case Global.var_theme_light:
				modal_header[0].setAttribute('style','background-color:' + Global.var_blue_to_light);
			break;
		}    
	},

	SimpleAlert : function(){
		this.top_label_text = undefined;
		this.alert_message	= undefined;
		this.icon			= undefined;
		this.Show 			= function(){
			BootstrapDialog.show({
				closable: false,
          		title	: this.top_label_text,
           		message : this.alert_message 
        	});
        	AlertsImprove.SetAlertsHeaderColor();
		}	
	},

	AlertWithOneButton : function(){
		this.top_label_text = undefined;
		this.alert_message	= undefined;
		this.button_label 	= undefined;
		this.icon 			= undefined;
		this.Show = function()
		{
			BootstrapDialog.show({
				closable	: false,
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
        	AlertsImprove.SetAlertsHeaderColor();
		};
	},

	AlertWithTwoButtons : function(){
		this.top_label_text 		= undefined;
		this.alert_message			= undefined;
		this.button_cancel_label 	= undefined;
		this.button_confirm_label 	= undefined;
		this.button_confirm_icon	= undefined;
		this.button_cancel_icon		= undefined;
		//this.confirm_action			= function(){return undefined};
		this.Show = function()
		{
			BootstrapDialog.show({
			closable	: false,
			title		: this.top_label_text,
            message 	: this.alert_message,
            buttons : [{
            			icon  : this.button_cancel_icon,	//http://getbootstrap.com/components//
            		 	label : this.button_cancel_label,
               		 	action: function(dialogItself){
                       				dialogItself.close();
               					}
            		  },{
            		  	autospin:true,
            		  	icon  : this.button_confirm_icon,	//http://getbootstrap.com/components//
            		 	label : this.button_confirm_label,
               		 	action: this.confirm_action
            		  }],
        	});
        	AlertsImprove.SetAlertsHeaderColor(); 
		};
		
	}

};

/* ============= ALERTS ENDS HERE ! ============= */




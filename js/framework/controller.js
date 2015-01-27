/* =================== CONTROLER COMPONENT =================== */
var Global = {

/* ====== GLOBAL ====== */
	var_yes					: "Y",
	var_no					: "N",
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
<<<<<<< HEAD

=======
>>>>>>> origin/master
Object.seal(Global);

/*DEFAULT THEME = DARK*/
/********************************
* POSSIBLE THEMES (24/01/2015): *
*	-dark                       *
*	-light                      * 
********************************/

Global.var_current_theme = Global.var_theme_dark;
tt('LOG - Theme: ' + Global.var_current_theme);

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
	}
};
Object.freeze(Components);//tt(Object.isFrozen(Components));




/* ======= FOR TRACES ======= */
function tt(_print){
	console.log(_print);
};

<<<<<<< HEAD
/* DeepNav constructor */
function DeepNav(faIcon, label, target, subDeepNavs){
=======
var Menu = {
	title		: "Menu",
	deepNavs 	: []
};

function deepNav(faIcon, lable, target, subDeepNavs){
>>>>>>> origin/master
	this.faIcon = faIcon;
	this.label = label;
	this.target = target;
	this.subDeepNavs = subDeepNavs;
}

<<<<<<< HEAD
function loadScreen (screenPath){
	$("#screen-target").load(screenPath);
};

// 

/* Menu Objects*/
var Menu = {
	title: "Menu",
	deepNavs: [],
	doMenu: function() {
		var ul = document.getElementById("navMenuUl");
		var i, len;
		for (i = 0, len = this.deepNavs.length; i < len; i++){
			var li = document.createElement("li");
			var a = document.createElement("a");
			a.className = "menu-items improve-menu-text";
			a.innerHTML = '<i class="' + this.deepNavs[i].faIcon + '"></i>' + this.deepNavs[i].label;
			a.onclick = function(){loadScreen(this.deepNavs[i].target)};
			li.appendChild(a);
			ul.appendChild(li);
		}
	}
};

Menu.deepNavs = [
	new DeepNav('fa fa-home', 'Home', 'screens/divTest.html'),
	new DeepNav('fa fa-lightbulb-o', 'Idea', ''),
	new DeepNav('fa fa-coffee', 'Coffee', '')
];
=======
/* ===============================  WIZARD COMPONENT ================================= */

/*TO START A WIZARD, FIRST CREATE AN OBJECT WizardComponent WITH ALL PROPERTIES*/
var WizardComponent = {

	html_label_component_id : "btnCenterLabel",
	html_steps_component_id : "btnCenterSteps",
	component_color_code	: Global.getColorCodeTheme(), //Global.var_dark_color_code || Global.var_light_color_code
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
	}
};
Object.seal(WizardComponent);//tt(Object.isFrozen(WizardComponent));

/*SECOND, SET startWizard() AND SEND IN ARGUMENT THE PREVIOUSLY CREATED OBJECT*/
function starWizard(){//WizardComponent Object - Only set starWizard one time !
	
	var wizardLabel = document.getElementById(WizardComponent.html_label_component_id);
	var wizardSteps = document.getElementById(WizardComponent.html_steps_component_id);

	wizardLabel.innerHTML = WizardComponent.wizard_label;
	wizardSteps.innerHTML = ' (' + WizardComponent.current_step_number + '/' + WizardComponent.maximum_steps_number + ') ';
};
/* ========================== WIZARD COMPONENT ENDS HERE ============================= */
>>>>>>> origin/master

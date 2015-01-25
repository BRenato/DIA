/* ============ GLOBAL VARS ============ */





/* =========== ENDS HERE ============= */

/*DEFAULT THEME = DARK*/
/********************************
* POSSIBLE THEMES (24/01/2015): *
*	-dark                       *
*	-light                      * 
********************************/

Controller.var_current_theme = Controller.var_theme_dark;
tt('LOG - Theme: ' + Controller.var_current_theme);
setThemeColor(Controller.var_current_theme);

/* =================== THIS IS FOR MENU SCREEN THEME CONTROL =================== */
function setThemeColor(_colorTheme){

	var btnSubmit = document.getElementById('imageButtonSubmit');
	var btnBack = document.getElementById('imageButtonBack');
		btnSubmit.setAttribute('style', 'display: none');
		btnBack.setAttribute('style', 'display: none');

	var iconBar = document.getElementById('icon-bar');
	var backColor = document.getElementById('background');

	switch (_colorTheme) {
		case Controller.var_theme_dark:
			backColor.setAttribute('style', 'background-color: ' + Controller.var_dark_color_code +' !important');
			iconBar.setAttribute('style','background-color: ' + Controller.var_light_color_code);
				
			setMenuAndLabelsColor(_colorTheme);/*menu and their own labels*/
			setIconBarsColors(Controller.var_light_color_code);/*button horizontal bars*/
		break;
		case Controller.var_theme_light:
			backColor.setAttribute('style', 'background-color: ' + Controller.var_light_color_code + ' !important');
			iconBar.setAttribute('style','background-color: ' + Controller.var_dark_color_code);

			setMenuAndLabelsColor(_colorTheme);/*menu and their own labels*/
			setIconBarsColors(Controller.var_dark_color_code);/*button horizontal bars*/	
		break;
	}
		
}

function setMenuAndLabelsColor(_colorTheme){
	var menuItems_arr = document.getElementsByClassName('menu-items');
	var numberMenuElements_nbr = menuItems_arr.length;
	var menuLabel = document.getElementById('menuLabel');
	switch (_colorTheme) {
		case Controller.var_theme_light:
			for (var i = 0; i < numberMenuElements_nbr; i++) {
			 	var field = menuItems_arr[i];
			 	field.setAttribute('style', 'color: ' + Controller.var_light_color_code + '  !important');
			};
			var menu = document.getElementById('navmenu');
			menu.setAttribute('style','background-color: ' + Controller.var_dark_color_code + ' !important');
			menuLabel.setAttribute('style', 'color: ' + Controller.var_light_color_code + '  !important');
			break;
		case Controller.var_theme_dark:
			for (var i = 0; i < numberMenuElements_nbr; i++) {		 	
			 	var field = menuItems_arr[i];
			 	field.setAttribute('style', 'color: ' + Controller.var_dark_color_code + ' !important');
			};
			var menu = document.getElementById('navmenu');
			menu.setAttribute('style','background-color: ' + Controller.var_light_color_code + ' !important');

			menuLabel.setAttribute('style', 'color: ' + Controller.var_dark_color_code + ' !important');
			break;
		};
};
function setIconBarsColors(_colorTheme){
	var iconBars_arr = document.getElementsByClassName('icon-bar');
	var numberIconsBar_nbr = iconBars_arr.length;
	for (var i = 0; i < numberIconsBar_nbr; i++) {

			var bar = iconBars_arr[i];
			bar.setAttribute('style','background-color:' + _colorTheme);
	}
};
/* ============================= ENDS HERE ============================= */






/* =================== COMPONENTS CONSTRUCTION =================== */
//The wizard components as an individual declaration, don't use this method. Use Wizard Components to set a new Wizard inicialization
var AllComponents = { 

	//BUTTON SUBMIT
	btn_submit_image_html_component_id	: "imageButtonSubmit",
	btn_submit_tetx_html_component_id	: "btnSubmit",
	btn_submit_light_image				: "./img/btn_submit_light.png",
	btn_submit_dark_image				: "./img/btn_submit_dark.png",
	btn_submit_text_submit				: "Submit",
	btn_submit_text2_done				: "Done",

	//BUTTON BACK
	btn_back_image_html_component_id	: "imageButtonBack",
	btn_back_tetx_html_component_id		: "btnLeft",
	btn_back_light_image				: "./img/btn_back_light.png",
	btn_back_dark_image					: "./img/btn_back_dark.png",
	btn_back_text						: "Previous",

};
Object.freeze(AllComponents);//tt(Object.isFrozen(AllComponents));


/*THE VALUES OF COMPONENTSCREEN IS POPULATED WITH ALLCOMPONENTS PROPERTIES VALUES*/
var ComponentScreen = function(){
	html_image_component_id = null, /*i.e.: AllComponents.btn_submit_image_html_component_id*/
	html_text_component_id	= null,	/*i.e.: AllComponents.btn_submit_tetx_html_component_id*/
	image_url				= null, /*i.e.: AllComponents.btn_submit_light_image*/
	visibility				= null, /*Y/N : Controller.var_yes || Controller.var_no*/
	description				= null 	/*i.e.: AllComponents.btn_submit_text*/
};
/* =================== COMPONENTS CONSTRUCTION ENDS HERE =================== */

/* =================== COMPONENTS VISIBILITY =================== */

/**
*Function to set components visibility in application. The order you set the parameters metters
* args : receive several componentScreen objects and their properties!
*/
function setComponentsVisibility(){
	var argLength_nrb = arguments.length;
	var component_obj;

	for (var i = 0; i < argLength_nrb; i++){
		component_obj = arguments[i]; /*arguments is a ComponentScreen object*/
		componentsVisibility(component_obj);
	}
};

/* == SET THE COMPONENTSCREEN OBJECT VISIBLE/INVISIBLE CONFORMING THEIR PROPERTIES SETTED IN COMPONENTS CONTRUCTION == */
function componentsVisibility(_component_obj){
		
	//visibility: hidden;
	var visibility_str = "";
	var INVISIBLE = "visibility: hidden !important;"

	if(_component_obj.visibility === Controller.var_no)
	{
		visibility_str = INVISIBLE;
	};

	var htmlComponentImageId = document.getElementById(_component_obj.html_image_component_id);
	var htmlComponentTextId = document.getElementById(_component_obj.html_text_component_id);

	htmlComponentImageId.setAttribute('style', 'content : url("' + _component_obj.image_url + '") !important; ' + visibility_str);

	/*THIS LOOKS LIKE NOT MAKE SENSE BUT THE PROGRAMMER CAN DEFINE TEXT TO A COMPONENTE AND SET IT A INVISIBLE (AT THE SAME TIME) BY ANY REASON*/
	htmlComponentTextId.setAttribute('style', visibility_str);/*THE STYLE PROPERTIE VISIBILITY SET*/
	htmlComponentTextId.innerHTML = _component_obj.description;
};
/*function componentsWithoutImageVisibility(_componente_obj){}*/




/* ===============================  WIZARD COMPONENT ================================= */

/*TO START A WIZARD, FIRST CREATE AN OBJECT WizardComponent WITH ALL PROPERTIES*/
var WizardComponent = {

	html_label_component_id : "btnCenterLabel",
	html_steps_component_id : "btnCenterSteps",
	component_color_code	: Controller.getColorCodeTheme(), //Controller.var_dark_color_code || Controller.var_light_color_code
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

	var currentTheme = Controller.var_current_theme;
	
	var wizardLabel = document.getElementById(WizardComponent.html_label_component_id);
	var wizardSteps = document.getElementById(WizardComponent.html_steps_component_id);

	wizardLabel.setAttribute('style', 'color: ' + WizardComponent.component_color_code + '!important');
	wizardSteps.setAttribute('style', 'color: ' + WizardComponent.component_color_code+ '!important');

	wizardLabel.innerHTML = WizardComponent.wizard_label;
	wizardSteps.innerHTML = ' (' + WizardComponent.current_step_number + '/' + WizardComponent.maximum_steps_number + ') ';
};
/* ========================== WIZARD COMPONENT ENDS HERE ============================= */
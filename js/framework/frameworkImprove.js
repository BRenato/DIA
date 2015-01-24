/*MENU LABELS AND COMPONENTS*/
	var menuItems_arr = document.getElementsByClassName('menu-items');
	var numberMenuElements_nbr = menuItems_arr.length;

	var menuLabel = document.getElementById('menuLabel');
	
	var iconBars_arr = document.getElementsByClassName('icon-bar');
	var numberIconsBar_nbr = iconBars_arr.length;

//DARK OR LIGHT THEMES
/* =================== THIS IS FOR SCREEN THEME CONTROL =================== */
	var setThemeColor = function (_colorTheme){

		var btnSubmit = document.getElementById('imageButtonSubmit');
		var btnBack = document.getElementById('imageButtonBack');
			btnSubmit.setAttribute('style', 'display: none');
			btnBack.setAttribute('style', 'display: none');

		var iconBar = document.getElementById('icon-bar');
		var backColor = document.getElementById('background');

		switch (_colorTheme) {
			case Controller.var_theme_dark:
				backColor.setAttribute('style', 'background-color: #282828 !important');
				iconBar.setAttribute('style','background-color: white');
				
				setMenuAndLabelsColor(_colorTheme);/*menu and their own labels*/
				setIconBarsColors('white');/*button horizontal bars*/
			break;
			case Controller.var_theme_light:
				backColor.setAttribute('style', 'background-color: white !important');
				iconBar.setAttribute('style','background-color: #282828');

				setMenuAndLabelsColor(_colorTheme);/*menu and their own labels*/
				setIconBarsColors('#282828');/*button horizontal bars*/	
			break;
		}
		
	}

	var setMenuAndLabelsColor = function(_colorTheme){
		if(_colorTheme == "dark"){
			for (var i = 0; i < numberMenuElements_nbr; i++) {
			 	
			 	var field = menuItems_arr[i];
			 	field.setAttribute('style', 'color: #282828  !important');
			 };
			 var menu = document.getElementById('navmenu');
			 menu.setAttribute('style','background-color: #F4F4F4 !important');

			 menuLabel.setAttribute('style', 'color: #282828  !important');
		}else{
			for (var i = 0; i < numberMenuElements_nbr; i++) {
			 	
			 	var field = menuItems_arr[i];
			 	field.setAttribute('style', 'color: white !important');
			 };
			 var menu = document.getElementById('navmenu');
			 menu.setAttribute('style','background-color: #282828 !important');

			 menuLabel.setAttribute('style', 'color: white !important');
		}
	};

	function setIconBarsColors(_colorTheme){
		for (var i = 0; i < numberIconsBar_nbr; i++) {

				var bar = iconBars_arr[i];
				bar.setAttribute('style','background-color:' + _colorTheme);
		}
	};


//SET VISIBLE COMPONENTS
/* =================== THIS IS FOR COMPONENTS SCREEN VISIBILITY AND THEME COLOR CONTROL =================== */
	var setBtnSubmitVisible = function(_colorTheme, _text){

		var btnS = document.getElementById('imageButtonSubmit');
		var btnText = document.getElementById('btnSubmit');
		btnText.innerHTML = _text;

		switch (_colorTheme){
		case "dark":	
			btnS.setAttribute('style', 'content : url("./img/btn_submit_light.png") !important');
			btnText.setAttribute('style', 'color: white !important');
			break;
		case "light":
			btnS.setAttribute('style', 'content : url("./img/btn_submit_dark.png") !important');
			btnText.setAttribute('style', 'color: #282828 !important');
			break;
		}
	};

	var setBtnMiddleVisible = function(_colorTheme, _text){

		var btnM = document.getElementById('btnCenter');
		btnM.innerHTML = _text;

		switch (_colorTheme){
		case "dark":	
			btnM.setAttribute('style', 'color: white !important');
			break;
		case "light":
			btnM.setAttribute('style', 'color: #282828 !important');
			break;
		}
	};


	var setTopLabelVisible = function(_colorTheme, _text){

		var labelTop = document.getElementById('labelTop');
		labelTop.innerHTML = _text;

		switch (_colorTheme){
		case "dark":	
			labelTop.setAttribute('style', 'color: white !important');
			break;
		case "light":
			labelTop.setAttribute('style', 'color: #282828 !important');
			break;
		}

	};

	var setAllComponentesVisible = function(_colorTheme, _textBtnS, _textBtnM, _textBtnB, _textTopLabel){
		setBtnSubmitVisible(_colorTheme, _textBtnS);
		setBtnMiddleVisible(_colorTheme, _textBtnM);
		setBtnBackVisible(_colorTheme, _textBtnB);
		setTopLabelVisible(_colorTheme, _textTopLabel);
	};



/* =================== COMPONENTS CONSTRUCTION =================== */
//The wizard components as an individual declaration, don't use this method. Use Wizard Components to set a new Wizard inicialization
var AllComponents = { 

	btn_submit_image_html_component_id	: "imageButtonSubmit",
	btn_submit_tetx_html_component_id	: "btnSubmit",
	btn_submit_light_image				: "./img/btn_submit_light.png",
	btn_submit_dark_image				: "./img/btn_submit_dark.png",
	btn_submit_text						: "Submit",

/* ===== BTN MIDDLE IS NOT HERE BECAUSE IS MADE BY WIZARD COMPONENT ===== */
	/*btn_middle_image?*/
	/*btn_middle_name			: "btn_middle",
	btn_middle_text_step1	: "Available dates (1/3)",
	btn_middle_text_step2	: "The team (2/3)",
	btn_middle_text_step3	: "Required tools/materials (3/3)",*/
/* ============================ ENDS HERE ================================*/

	btn_back_image_html_component_id	: "imageButtonBack",
	btn_back_tetx_html_component_id		: "btnLeft",
	btn_back_light_image				: "./img/btn_back_light.png",
	btn_back_dark_image					: "./img/btn_back_dark.png",
	btn_back_text						: "Previous",

};
Object.freeze(AllComponents);//console.log(Object.isFrozen(AllComponents));


var Controller = {

/* ====== GLOBAL ====== */
	var_yes					: "Y",
	var_no					: "N",
	var_theme_dark			: "dark",
	var_theme_light			: "light",
	var_current_theme		: undefined, //Controller.var_theme_dark || Controller.var_theme_light
	var_dark_color_code		: '#282828',
	var_light_color_code	: 'white',
	getColorCodeTheme		: function(){
		var theme = this.currentTheme;
		switch(theme){
			case Controller.var_theme_dark:
				return Controller.var_dark_color_code;
			break;
			case Controller.var_theme_light:
				return Controller.var_light_color_code;
			break;
		}
	}

/* ==== ENDS HERE ! ==== */
}

/*THE VALUES OF COMPONENTSCREEN IS POPULATED WITH ALLCOMPONENTS PROPERTIES VALUES*/
var ComponentScreen = function()
{
	html_image_component_id = null,
	html_text_component_id	= null,
	image_url				= null, /*i.e.: AllComponents.btn_submit_light_image*/
	visibility				= null, /*Y or N*/
	description				= null 	/*i.e.: AllComponents.btn_submit_text*/
};

/*
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
}
/*
*
*SET THE COMPONENTSCREEN OBJECT VISIBLE/INVISIBLE CONFORMING THEIR PROPERTIES
*/
function componentsVisibility(_componente_obj){
		
		//visibility: hidden;
		var visibility = null;
		var INVISIBLE = "visibility: hidden !important;"

		if (_componente_obj.visibility === Controller.var_yes){
			visibility = "";

		}else if(_componente_obj.visibility === Controller.var_no)
		{
			visibility = INVISIBLE;
		};

		var htmlComponentImageId = document.getElementById(_componente_obj.html_image_component_id);
		var htmlComponentTextId = document.getElementById(_componente_obj.html_text_component_id);

		htmlComponentImageId.setAttribute('style', 'content : url("' + _componente_obj.image_url + '") !important; ' + visibility);

		/*THIS LOOKS LIKE NOT MAKE SENSE BUT THE PROGRAMMER CAN DEFINE TEXT TO A COMPONENTE AND SET IT A INVISIBLE (AT THE SAME TIME) BY ANY REASON*/
		htmlComponentTextId.setAttribute('style', visibility);/*THE STYLE PROPERTIE VISIBILITY SET*/
		htmlComponentTextId.innerHTML = _componente_obj.description;
}
/*function componentsWithoutImageVisibility(_componente_obj){}*/

/* ===============================  WIZARD COMPONENT ================================= */

/*TO START A WIZARD, FIST CREATE AN OBJECT WizardComponent WITH ALL PROPERTIES*/
var WizardComponent = {

	html_label_component_id : "btnCenterLabel",
	html_steps_component_id : "btnCenterSteps",
	component_color_code	: Controller.getColorCodeTheme(), //Controller.var_dark_color_code || Controller.var_light_color_code
	wizard_label			: undefined,
	maximum_steps_number 	: 0,
	inicial_step			: 0,
	current_step_number		: 0,
	nextStepNumber 			: function(){
		if (this.current_step_number != this.maximum_steps_number){
			return this.current_step_number + 1;
		}
		return null;
	}
};
Object.freeze(WizardComponent);//console.log(Object.isFrozen(WizardComponent));

/*SECOND, SET startWizard() AND SEND IN ARGUMENT THE PREVIOUSLY CREATED OBJECT*/
function starWizard(_wizardComponent_obj){//WizardComponent Object - Only set starWizard one time !

	var currentTheme = Controller.var_current_theme;
	
	var wizardLabel = document.getElementById(_wizardComponent_obj.html_label_component_id);
	var wizardSteps = document.getElementById(_wizardComponent_obj.html_steps_component_id);

	wizardLabel.setAttribute('style', 'color: ' + component_color_code + '!important');
	wizardSteps.setAttribute('style', 'color: ' + component_color_code+ '!important');

	wizardLabel.innerHTML = _wizardComponent_obj.wizardLabel;
	wizardSteps.innerHTML = setWizardSteps();

	function setWizardSteps(){
		return ' (' + _wizardComponent_obj.current_step_number + '/' + _wizardComponent_obj.maximum_steps_number + ') ';
	}
}
/* ========================== WIZARD COMPONENT ENDS HERE ============================= */

















//SET INVISIBLE COMPONENTES

	/*var setBtnSubmitInvisible = function(){
		
		var btnS = document.getElementById('imageButtonSubmit');
		btnS.setAttribute('style', 'display: none !important');
		btnS.setAttribute('style', 'visibility: hidden !important');


		var btnS = document.getElementById('btnSubmit');
		btnS.setAttribute('style', 'display: none !important');
		btnS.setAttribute('style', 'visibility: hidden !important');
	};
	var setBtnMiddleInvisible = function(){

		var btnM = document.getElementById('btnCenter');
		btnM.setAttribute('style', 'display: none !important');
		btnM.setAttribute('style', 'visibility: hidden !important');
	};
	var setBtnBackInvisible = function(){
		var btnB = document.getElementById('imageButtonBack');
		btnB.setAttribute('style', 'display: none !important');
		btnB.setAttribute('style', 'visibility: hidden !important');


		var btnB = document.getElementById('btnLeft');
		btnB.setAttribute('style', 'display: none !important');
		btnB.setAttribute('style', 'visibility: hidden !important');

	};
	var setTopLabelInvisible = function(){

		var topLabel = document.getElementById('labelTop');
		topLabel.setAttribute('style', 'display: none !important');
		topLabel.setAttribute('style', 'visibility: hidden !important');
	};

	var setAllComponentesInvisible = function(){
		setBtnSubmitInvisible();
		setBtnMiddleInvisible();
		setBtnBackInvisible();
		setTopLabelInvisible();
	}*/

/* ======= SET DEFAULT THEME =======*/
//DEFAULT THEME = DARK THEME

/********************************
* POSSIBLE THEMES (24/01/2015): *
*	-dark                       *
*	-light                      * 
********************************/
Controller.current_theme = Controller.var_theme_dark;
console.log('LOG - Theme: ' + Controller.current_theme);
setThemeColor(Controller.current_theme);
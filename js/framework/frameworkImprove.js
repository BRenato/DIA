/* ============ GLOBAL VARS ============ */





/* ============ ENDS HERE ! ============ */

/*SET DEFAULT THEME = DARK*/
Global.var_current_theme = Global.var_theme_dark;

setThemeColor(Global.var_current_theme);
tt('getColorCodeTheme: ' + Global.getColorCodeTheme());




/*THE VALUES OF COMPONENTSCREEN IS POPULATED WITH ALLCOMPONENTS PROPERTIES VALUES*/
var BottomComponentScreen = {
	
	ButtonSubmit : function() {
		this.image 					= null;
		this.description			= null; 	/*i.e.: Components.btn_submit_text*/	
	},
	
	ButtonBack : function() {
		this.image 					= null;
		this.description			= null;		/*i.e.: Components.btn_submit_text*/	
	}
};
Object.seal(BottomComponentScreen);
/* =================== COMPONENTS CONSTRUCTION ENDS HERE =================== */


/* =================== THIS IS FOR MENU SCREEN THEME CONTROL =================== */
function setThemeColor(_colorTheme){

/*THIS FUNCTION IS STATIC TO THIS PRESENT COLORS. IN THE FUTURE MAKE DYNAMISM IN THIS STEP*/
	var iconBar = document.getElementById('icon-bar');
	var backColor = document.getElementById('background');
	
	SetBottomComponentsColor();

	switch (_colorTheme) {
		case Global.var_theme_dark:
			backColor.setAttribute('style', 'background-color: ' + Global.var_dark_color_code +' !important');
			iconBar.setAttribute('style','background-color: ' + Global.var_light_color_code);
			setMenuAndLabelsColor(_colorTheme);/*menu and their own labels*/
			setIconBarsColors(Global.var_light_color_code);/*button horizontal bars*/
		break;
		case Global.var_theme_light:
			backColor.setAttribute('style', 'background-color: ' + Global.var_light_color_code + ' !important');
			iconBar.setAttribute('style','background-color: ' + Global.var_dark_color_code);
			setMenuAndLabelsColor(_colorTheme);/*menu and their own labels*/
			setIconBarsColors(Global.var_dark_color_code);/*button horizontal bars*/	
		break;
	}
		
};

function SetBottomComponentsColor(){

	//wizard
	var theme = Global.getColorCodeTheme();

	var wizardLabel = document.getElementById(WizardComponent.html_label_component_id);
	var wizardSteps = document.getElementById(WizardComponent.html_steps_component_id);
	wizardLabel.setAttribute('style', 'color: ' + theme + '!important');
	wizardSteps.setAttribute('style', 'color: ' + theme + '!important');

	//btn back
	var component_txt = document.getElementById(Components.ButtonBack.html_txt_component);
	var component_img = document.getElementById(Components.ButtonBack.html_img_component);	
	component_txt.setAttribute('style', 'color: ' + theme + '!important');
	component_img.setAttribute('style', 'color: ' + theme + '!important');

	//btn submit
	component_txt = document.getElementById(Components.ButtonSubmit.html_txt_component);
	component_img = document.getElementById(Components.ButtonSubmit.html_img_component);	
	component_txt.setAttribute('style', 'color: ' + theme + '!important');
	component_img.setAttribute('style', 'color: ' + theme + '!important');
};

function setMenuAndLabelsColor(_colorTheme){
	var menuItems_arr = document.getElementsByClassName('menu-items');
	var numberMenuElements_nbr = menuItems_arr.length;
	var menuLabel = document.getElementById('menuLabel');
	switch (_colorTheme) {
		case Global.var_theme_light:
			for (var i = 0; i < numberMenuElements_nbr; i++) {
			 	var field = menuItems_arr[i];
			 	field.setAttribute('style', 'color: ' + Global.var_light_color_code + '  !important');
			};
			var menu = document.getElementById('navmenu');
			menu.setAttribute('style','background-color: ' + Global.var_dark_color_code + ' !important');
			menuLabel.setAttribute('style', 'color: ' + Global.var_light_color_code + '  !important');
			break;
		case Global.var_theme_dark:
			for (var i = 0; i < numberMenuElements_nbr; i++) {		 	
			 	var field = menuItems_arr[i];
			 	field.setAttribute('style', 'color: ' + Global.var_dark_color_code + ' !important');
			};
			var menu = document.getElementById('navmenu');
			menu.setAttribute('style','background-color: ' + Global.var_light_color_code + ' !important');

			menuLabel.setAttribute('style', 'color: ' + Global.var_dark_color_code + ' !important');
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


/* =================== COMPONENTS VISIBILITY =================== */

/**
*Function to set components visibility in application. The order you set the parameters metters
* args : receive several componentScreen objects and their properties!
*/
function setComponentsVisibility(){
	var argLength_nrb = arguments.length;
	var component_obj;

	for (var i = 0; i < argLength_nrb; i++){
		component_obj = arguments[i]; /*arguments is a BottomComponentScreen object*/
		componentsVisibility(component_obj);
	}
};

/* == SET THE COMPONENTSCREEN OBJECT VISIBLE/INVISIBLE CONFORMING THEIR PROPERTIES SETTED IN COMPONENTS CONTRUCTION == */
function componentsVisibility(_component_obj){
		
	var component_img, component_txt; 

	if(_component_obj instanceof BottomComponentScreen.ButtonSubmit){
		
		component_txt = document.getElementById(Components.ButtonSubmit.html_txt_component);
		document.getElementById(Components.ButtonSubmit.html_img_component).className += _component_obj.image;	
		component_txt.innerHTML = _component_obj.description;

	}else if (_component_obj instanceof BottomComponentScreen.ButtonBack){
		
		component_txt = document.getElementById(Components.ButtonBack.html_txt_component);
		document.getElementById(Components.ButtonBack.html_img_component).className += _component_obj.image;	
		component_txt.innerHTML = _component_obj.description;
	};
};






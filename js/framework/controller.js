/* =================== CONTROLER  =================== */
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
		var theme = Controller.var_current_theme;
		switch(theme){
			case Controller.var_theme_dark:
				return this.var_light_color_code;
			break;
			case Controller.var_theme_light:
				return this.var_dark_color_code;
			break;
		}
	}
/* ==== ENDS HERE ! ==== */
}
Object.seal(Controller);
/* ======= FOR TRACES ======= */
function tt(_print){
	console.log(_print);
}
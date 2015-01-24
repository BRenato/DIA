/*MENU LABELS AND COMPONENTS*/
	var menuItems_arr = document.getElementsByClassName('menu-items');
	var numberMenuElements_nbr = menuItems_arr.length;

	var menuLabel = document.getElementById('menuLabel');
	
	var iconBars_arr = document.getElementsByClassName('icon-bar');
	var numberIconsBar_nbr = iconBars_arr.length;

//DARK OR LIGHT THEMES
/* =================== THIS IS FOR SCREEN THEME CONTROL =================== */
	var setThemeColor = function (_colorTheme){
		//body ...
		var btnS = document.getElementById('imageButtonSubmit');
		var btnB = document.getElementById('imageButtonBack');
		var iconBar = document.getElementById('icon-bar');
		btnS.setAttribute('style', 'display: none');
		btnB.setAttribute('style', 'display: none');

		switch (_colorTheme) {
			case "dark":
				var backColor = document.getElementById('background');
				backColor.setAttribute('style', 'background: #282828 !important');
				iconBar.setAttribute('style','background-color: white');
				setMenuAndLabelsColor(_colorTheme);
				setIconBarsColors('white');
			break;
			case "light":
				var backColor = document.getElementById('background');
				backColor.setAttribute('style', 'background: white !important');
				iconBar.setAttribute('style','background-color: #282828');
				setMenuAndLabelsColor(_colorTheme);
				setIconBarsColors('#282828');	
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

	var setBtnBackVisible = function(_colorTheme, _text){
		
		var btnS = document.getElementById('imageButtonBack');
		var btnText = document.getElementById('btnLeft');
		btnText.innerHTML = _text;

		switch (_colorTheme){
		case "dark":	
			btnS.setAttribute('style', 'content : url("./img/btn_back_light.png") !important');
			btnText.setAttribute('style', 'color: white !important');
			break;
		case "light":
			btnS.setAttribute('style', 'content : url("./img/btn_back_dark.png") !important');
			btnText.setAttribute('style', 'color: #282828 !important');
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
var AllComponents = {

	btn_submit_name			: "btn_submit",
	btn_submit_light_image	: "./img/btn_submit_light.png",
	btn_submit_dark_image	: "./img/btn_submit_dark.png",
	btn_submit_text			: "Submit",

	/*btn_middle_image*/
	btn_middle_text_step1	: "Available dates (1/3)",
	btn_middle_text_step2	: "The team (2/3)",
	btn_middle_text_step3	: "Required tools/materials (3/3)",

	btn_back_name			: "btn_back",
	btn_back_light_image	: "./img/btn_back_light.png",
	btn_back_dark_image		: "./img/btn_back_dark.png",
	btn_back_text			: "Previous"
};
Object.freeze(AllComponents);

console.log	(Object.isFrozen(AllComponents));
var ComponentScreen = function()
{
	name 		= null,
	icon		= null,
	visibility	= null,
	description	= null
};

/*
*Function to set components visibility in application. The order you set the parameters metters
* args : receive several components objects and their properties
*/
function setComponentsVisible(){


}


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
//default theme = dark
setThemeColor("dark");
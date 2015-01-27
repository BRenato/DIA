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
/* ======= FOR TRACES ======= */
function tt(_print){
	console.log(_print);
}

/* DeepNav constructor */
function DeepNav(faIcon, label, target, subDeepNavs){
	this.faIcon = faIcon;
	this.label = label;
	this.target = target;
	this.subDeepNavs = subDeepNavs;
}

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
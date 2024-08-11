/*************************** Scroll to the Top Button - Function  ********************************
********** This function will therefore execute the command of scrolling to the top **************
********** 			of the page if the onClick Event has been initated.             **************
********** This Script was from https://www.w3schools.com/howto/howto_js_scroll_to_top.asp *******
**************************************************************************************************/
//The topFunction will be used for automating the task of scrolling to the top of the webpage once an event is triggered
//Declaring Function -> topFunction
function topFunction() {
		
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}
//End of topFunction

//This Will Call the Button by using the where operator
btnScrollTop = document.getElementById("btnTop");

//When the User Scrolls the button below 20 lines, this function should automatically enable the button be appeared
	window.onscroll = function () { // This is a Predefined Macro or Function builtin to JavaScript
		scrollFunction(); //Declaring Scroll-To-Top Button Function
	}
//Declared Function -> scrollFunction
function scrollFunction() {
//If the Value is greater than 50 lines for the body or document element, then display the Scroll to top button
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
		btnScrollTop.style.display = "block"; 
	}
	
//However, if the documents body is less than 20 lines when either scrolled or not the button will not be displayed	
	else {
		btnScrollTop.style.display = "none"; 
	}
}
//End of scrollFunction
// By Ibrahim Ahmad (Y29962)
// This is Referenced from -> https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
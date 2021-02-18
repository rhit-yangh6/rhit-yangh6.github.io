
var rhit = rhit || {};

rhit.ClassName = class {
	constructor() {

	}

	methodName() {

	}
}

rhit.initializePages = function() {
	if (document.querySelector("#indexPage")) {
		document.querySelector("#aboutMeButton").onclick = (event) => {
			window.location.href = "./index.html";
		}
		document.querySelector("#resumeButton").onclick = (event) => {
			window.location.href = "./resume.html";
		}
	}

	if (document.querySelector("#resumePage")) {
		document.querySelector("#aboutMeButton").onclick = (event) => {
			window.location.href = "./index.html";
		}
		document.querySelector("#resumeButton").onclick = (event) => {
			window.location.href = "./resume.html";
		}
	}


}

/* Main */
/** function and class syntax examples */
rhit.main = function () {
	console.log("Ready");
	rhit.initializePages();
};

rhit.main();


var rhit = rhit || {};

rhit.ClassName = class {
	constructor() {

	}

	methodName() {

	}
}

rhit.initializePages = function() {
	document.querySelector("#aboutMeButton").onclick = (event) => {
		window.location.href = "./index.html";
	}
	document.querySelector("#resumeButton").onclick = (event) => {
		window.location.href = "./resume.html";
	}
	document.querySelector("#activitiesButton").onclick = (event) => {
		window.location.href = "./activities.html";
	}
}

/* Main */
/** function and class syntax examples */
rhit.main = function () {
	console.log("Ready");
	rhit.initializePages();
};

rhit.main();

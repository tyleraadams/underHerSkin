AboutTemplate = (function(){
	

	function setAboutSession() {
		Session.set("aboutOff",false);
	}

	function onAboutClick(e) {	
		Session.set('aboutOff',true);
		console.log(getAboutOff());
		$("#about").css("display", "none");
	}

	function onRender(){
		 setAboutSession();
	}

	function getAboutOff() {
		return Session.get('aboutOff');
	}

	return {
		onRender:onRender,
		onAboutClick:onAboutClick,
		getAboutOff:getAboutOff,
		setAboutSession:setAboutSession
	}
})();

Template.about.rendered = AboutTemplate.onRender;
Template.about.setAboutSession = AboutTemplate.setAboutSession;
Template.about.getAboutOff = AboutTemplate.getAboutOff;
Template.about.events = {
	"click #about": AboutTemplate.onAboutClick
}
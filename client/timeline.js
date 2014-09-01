PhotosFrameTemplate = (function(){
	

	function setSessions() {
		var names=["Miller","Coleman", "Echols"];
		for(var name in names){
			Session.set(names[name]+"On",false);
		}
	}

	function onPhotoClick(e) {	
		setSessions();	
		var name = e.target.id.charAt(0).toUpperCase() +  e.target.id.slice(1).split("-")[0];
		Session.set(name+"On",true);
		$($(e.target).siblings()).css('border-color','white');
		$(e.target).css('border-color','#FFA18F');
		$("body,html").animate({scrollTop: "900px"}, 1000);
	}


	function onAudioClick(e){
		var audioPlayer = document.getElementById('player');
		if(audioPlayer.paused){
			audioPlayer.play();
		}else{
			audioPlayer.pause();
		}
	}

	function onRender(){
		setSessions();
		getAboutOff();
	}

	function getMillerOn(){
		return Session.get('MillerOn');
	}

	function getColemanOn(){
		return Session.get('ColemanOn');
	}

	function getEcholsOn(){
		return Session.get('EcholsOn');
	}

	function getAboutOff() {
		return Session.get('aboutOff');
	}

	return {
		onRender:onRender,
		onPhotoClick:onPhotoClick,
		setSessions:setSessions,
		getMillerOn:getMillerOn,
		getColemanOn:getColemanOn,
		getEcholsOn: getEcholsOn,
		getAboutOff:getAboutOff,
		onAudioClick:onAudioClick
	}
})();

Template.photosFrame.rendered = PhotosFrameTemplate.onRender;
Template.photosFrame.setSessions = PhotosFrameTemplate.setSessions;
Template.photosFrame.getMillerOn = PhotosFrameTemplate.getMillerOn;
Template.photosFrame.getColemanOn = PhotosFrameTemplate.getColemanOn;
Template.photosFrame.getEcholsOn = PhotosFrameTemplate.getEcholsOn;
Template.photosFrame.getAboutOff = PhotosFrameTemplate.getAboutOff;
Template.photosFrame.events = {
	"click .photo": PhotosFrameTemplate.onPhotoClick,
	"click #audioButton": PhotosFrameTemplate.onAudioClick
}

// TemplateManager = (function)(){

// 	function TemplateConstructor(name) {
// 		this.name = name + "Template";

// 		this.onRender = function(){
			
// 		}
		
// 	};

// 	function createWomenTemplates(){


// 	}


// })();

MillerTemplate = (function(){

	function onRender(){
		createAudioOffListener()
	}
	
	function createAudioOffListener(){
	var audioPlayer = document.getElementById('player');
		audioPlayer.addEventListener('ended', disappearAudioButton);
	}

	function disappearAudioButton() {
		console.log("the audio is now off, now dim the volume button");
		$('#audioButton').css('display','none');
	}

	return {
		onRender:onRender
	}
})();

Template.miller.rendered = MillerTemplate.onRender;



ColemanTemplate = (function(){

	function onRender(){
		createAudioOffListener()
	}
	
	function createAudioOffListener(){
	var audioPlayer = document.getElementById('player');
		audioPlayer.addEventListener('ended', disappearAudioButton);
	}

	function disappearAudioButton() {
		console.log("the audio is now off, now dim the volume button");
		$('#audioButton').css('display','none')
	}

	return {
		onRender:onRender
	}
})();

Template.coleman.rendered = ColemanTemplate.onRender;


EcholsTemplate = (function(){

	function onRender(){
		createAudioOffListener()
	}
	
	function createAudioOffListener(){
	var audioPlayer = document.getElementById('player');
		audioPlayer.addEventListener('ended', disappearAudioButton);
	}

	function disappearAudioButton() {
		console.log("the audio is now off, now dim the volume button");
		$('#audioButton').css('display','none')
	}

	return {
		onRender:onRender
	}
})();

Template.echols.rendered = EcholsTemplate.onRender;







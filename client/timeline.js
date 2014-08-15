PhotosFrameTemplate = (function(){
	

	function setSessions() {
		var names=["Miller","Coleman", "Echols"];
		for(var name in names){
			Session.set(names[name]+"On",false);
		}
	}

	function onPhotoClick(e) {	
		setSessions()	
		var name = e.target.id.charAt(0).toUpperCase() +  e.target.id.slice(1).split("-")[0]
		Session.set(name+"On",true)
		$($(e.target).siblings()).css('border-color','white')
		$(e.target).css('border-color','#FFA18F')
	}

	function onRender(){
		 setSessions();
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

	return {
		onRender:onRender,
		onPhotoClick:onPhotoClick,
		setSessions:setSessions,
		getMillerOn:getMillerOn,
		getColemanOn:getColemanOn,
		getEcholsOn: getEcholsOn
	}
})();

Template.photosFrame.rendered = PhotosFrameTemplate.onRender;
Template.photosFrame.setSessions = PhotosFrameTemplate.setSessions;
Template.photosFrame.getMillerOn = PhotosFrameTemplate.getMillerOn;
Template.photosFrame.getColemanOn = PhotosFrameTemplate.getColemanOn;
Template.photosFrame.getEcholsOn = PhotosFrameTemplate.getEcholsOn;
Template.photosFrame.events = {
	"click .photo": PhotosFrameTemplate.onPhotoClick
}
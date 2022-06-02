widget.on('ready', ()=> {

	var widget = $(element)
	
	// Set the image \ icon selector below
	// The functino will configure the size of the icon according to the changed widget width
	
	const iconImageSelector = ".image-size-auto"

	var handleSymbolIconByWidth = function() {
		var image = widget[0].querySelector(iconImageSelector)
		var widthToPx = widget.clientWidth * 0.33
		var imageWidthInPx = widthToPx < 80 ? widthToPx : 80

		image.style.width = `${imageWidthInPx}px`
	}()
	
})
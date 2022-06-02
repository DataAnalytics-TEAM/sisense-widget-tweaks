widget.on('ready', ()=> {

	var widget = $(element)

	// Set the KPI Label selector below 
	// the function will configure the size of the label according to the changed widget width
	
	const kpiSelector = ".font-size-extraLarge"
	
	var handleFontSizeByWidth = function() {
		var kpi = widget.find(kpiSelector)[0]
		var widthToPx = kpi.clientWidth * 0.25
		var fonstSizeInPx = widthToPx < 50 ? widthToPx : 50

		kpi.style.fontSize = `${fonstSizeInPx}px`
	}()

})
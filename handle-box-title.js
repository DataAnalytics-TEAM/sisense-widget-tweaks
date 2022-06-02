widget.on('ready', ()=> {
	
	var widget = $(element)
	
	// This function will center the widget title
	var handleBloxTitle = function() {
		var blox = widget.parent()
		var header = blox.find('widget-header')
		var title = blox.find('.transput-parent')

		blox.find('.spacer').remove()
		header.css('justify-content','center')
		title.css({
			'width':'100%',
			'text-align':'center'
		})

	}()
	
})
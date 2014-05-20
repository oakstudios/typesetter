var GRUMPIES = {
	'short': {
		'text': "",
		'columns': [ // single column
			{
				sizes: [144],
				innerblock: 'div'
			}
		]
	},
};


function eventTextLineChange(e) {
	var $this = $(this);
	bulkChangeTextForTab(e.data.grumpy, $this.text(), $this);
}


function onblur() {
	var $this = $(this);
	var text = $this.html();
	if ($this.data('enter') !== text) {
		$this.data('enter', text);
		$this.trigger({type: 'change', action : 'save'});
	}
	return $this;
}


function onkeyup() {
	var $this = $(this);
	var text = $this.html();
	if ($this.data('before') !== text) {
		$this.data('before', text);
		$this.trigger({type: 'change', action : 'update'});
	}
	return $this;
}


function onfocus() {
	var $this = $(this);
	$this.data('enter', $this.html());
	$this.data('before', $this.html());
	return $this;
}


function setColumnTemplate(container, grumpy) {
	for (var k = 0; k < grumpy.columns.length; k++) {

		var sizes = grumpy.columns[k].sizes;
		var block = container.find(grumpy.columns[k].innerblock);
		for (var i = 0; i < sizes.length; i++) {
			fontsize = sizes[i].toString();
			// block.append($('<p>').addClass('sizelabel').text(fontsize + 'px'));

			var textline = $('<p>').addClass('textline')
				.css('font-size', fontsize + 'px')
				.attr('contenteditable', true)
				.text(grumpy.text)
				.on('focus', onfocus)
				.on('keyup paste', onkeyup)
				.on('blur', onblur)
				.on('change', {'grumpy': grumpy}, eventTextLineChange);

			block.append(textline);
			//block.append($('<p>&nbsp;</p>'));
		}
	}
}

function setSplitSingleToDual(container, grumpies_short, grumpies_long) {
	setColumnTemplate(container, grumpies_short);
	setColumnTemplate(container, grumpies_long);
}


function bulkChangeTextForTab(grumpy, value, except) {
	for (var i = 0; i < grumpy.columns.length; i++) {
		$(grumpy.tab).find(grumpy.columns[i].innerblock).find('.textline').not(except).text(value);
	}
}


function prepareAndShowFontLayout() {

	setColumnTemplate($('#typecontainer'), GRUMPIES.short);

	var target = document.createElement('div');
	target.setAttribute('style','width: 920px;');
	for (var a = 28; a>8; a--) {
		var sizelabel = document.createElement('p');
		sizelabel.setAttribute('class','sizelabel');
		sizelabel.textContent = a + 'px';
		target.appendChild(sizelabel);

	};
}

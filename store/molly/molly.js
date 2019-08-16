$(function(){
	$(document).keydown(function (e) {
		if ((e.ctrlKey && e.keyCode == 13) || (e.metaKey && e.keyCode == 13)) {
			e.preventDefault();
			var text = "";
		    if (window.getSelection) {
		        text = window.getSelection().toString();
		    } else if (document.selection && document.selection.type != "Control") {
		        text = document.selection.createRange().text;
		    }s

		    if(text!==''){
				$.ajax({
		    		url: 'http://localhost/jsTest/store/molly/molly.submit.php',
		    		type: 'post',
		    		data: 'text='+text
		    	});
		    }
		}
	});
});

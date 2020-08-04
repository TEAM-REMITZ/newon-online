function ajaxTest() {
  $.ajax({
		url: `${IP}/test/ajax`,
		type: 'post',
		data: '',
		success: data => {
			$('#ajax-test').text(data)
		}
	})
}

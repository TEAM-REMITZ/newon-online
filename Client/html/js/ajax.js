function ajaxTest() {
  const xhr = new XMLHttpRequest()
  xhr.open('POST', `${IP}/test/ajax`, true)
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')

  xhr.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      // Request Success
    }
  }
}

$(document).ready(function() {
  $('#download-jpeg').click(function () {
    domtoimage.toJpeg(document.getElementById('html-node'), { quality: 0.95 })
        .then(function (dataUrl) {
            var link = document.createElement('a');
            link.download = 'preview.jpeg';
            link.href = dataUrl;
            link.click();
        });
  });

  $('#download-png').click(function () {
    domtoimage.toBlob(document.getElementById('html-node'))
    .then(function (blob) {
      var link = document.createElement('a');
      var url = window.URL.createObjectURL(blob);
      link.href = url;
      link.download = 'preview.jpeg';
      link.click();
      window.URL.revokeObjectURL(url);
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });
  });

  $("#html-source" ).change(function(event) {
    console.log({event}, event.target.value)
    $("#html-node").html(event.target.value)
  });

  $("#html-node").html($("#html-source").val())
});

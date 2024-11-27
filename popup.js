
document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    var activeTabURL = activeTab.url;

    var qrcode = new QRCode(document.getElementById("qrcode"), {
      text: activeTabURL,
      width: 150,
      height: 150
    });

    document.getElementById('downloadBtn').addEventListener('click', function() {
      var canvas = document.querySelector('#qrcode canvas');
      var imgData = canvas.toDataURL('image/png');
      var a = document.createElement('a');
      a.href = imgData;
      a.download = 'qrcode.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  });
});

  
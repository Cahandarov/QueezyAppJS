export default function convertObjectURLToBase64(fileOrObjectURL) {
  var blob = new Blob(["Hello, world!"], { type: "text/plain" });
  var blobUrl = URL.createObjectURL(blob);

  var xhr = new XMLHttpRequest();
  xhr.responseType = "blob";

  xhr.onload = function () {
    var recoveredBlob = xhr.response;

    var reader = new FileReader();

    reader.onload = function () {
      var blobAsDataUrl = reader.result;
      window.location = blobAsDataUrl;
    };

    reader.readAsDataURL(recoveredBlob);
  };

  xhr.open("GET", blobUrl);
  xhr.send();
}

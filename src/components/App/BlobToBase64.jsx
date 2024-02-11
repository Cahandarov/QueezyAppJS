export default function BlobToBase64(blob) {
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}

let blob = null; // <= your blob object goes here

BlobToBase64(blob).then((base64String) => console.log(base64String));

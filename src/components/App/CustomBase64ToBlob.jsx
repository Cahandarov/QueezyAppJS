export default function CustomBase64toBlob(base64Data, contentType) {
  const blob = `data:image/${contentType}+xml;base64,${base64Data}`;
  return blob;
}

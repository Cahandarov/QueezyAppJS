export default function convertFileToBase64ForAllTypeFiles(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const fileType = file.type.split("/")[1];

      let dataUrlPrefix = "";

      switch (fileType) {
        case "svg+xml":
          dataUrlPrefix = "data:image/svg+xml";
          break;
        case "png":
          dataUrlPrefix = "data:image/png";
          break;
        case "jpg":
        case "jpeg":
          dataUrlPrefix = "data:image/jpeg";
          break;
        case "gif":
          dataUrlPrefix = "data:image/gif";
          break;
        case "audio":
          dataUrlPrefix = "data:audio";
          break;
        case "video":
          dataUrlPrefix = "data:video";
          break;
        default:
          dataUrlPrefix = "data";
      }

      resolve(`${dataUrlPrefix};base64,${reader.result.split(",")[1]}`);
    };

    reader.readAsDataURL(file);
    reader.onerror = (error) => reject(error);
  });
}

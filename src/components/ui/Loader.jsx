import { Hourglass } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="mx-auto flex justify-center items-center w-full h-screen">
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["#6A5AE0", "#c4b0fb"]}
      />
    </div>
  );
}

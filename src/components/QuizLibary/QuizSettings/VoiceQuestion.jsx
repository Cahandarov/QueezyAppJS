import { useState, useEffect } from "react";
import { useContext } from "react";
import { FormikContext } from "../CreateQuizModal/FormikContext";

export default function VoiceQuestion() {
  const [selectedAudio, setSelectedAudio] = useState("");
  const formik = useContext(FormikContext);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    const blobUrl = URL.createObjectURL(file);
    setSelectedAudio(blobUrl);
    formik.setFieldValue("addQuestion", blobUrl); // Update the field name accordingly
  };

  useEffect(() => {
    // Place any logic related to selectedAudio here if needed
  }, [selectedAudio]);

  return (
    <div className="flex flex-col w-full mt-6">
      <div
        className={`w-full h-24 border-[3px] mb-6 flex items-center justify-center border-dashed ${
          !selectedAudio ? `border-[#6A5AE0]` : `border-[green]`
        } rounded-xl  hover:bg-slate-200 hover:border-none focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300 `}
      >
        <label
          htmlFor="addAudioFile"
          className="font-medium my-0 mb-1 px-40 py-8 text-base font-Rubik text-left text-primaryColor"
        >
          {`${!selectedAudio ? `Add Audio File` : `File Selected`}`}
        </label>
        <input
          id="addAudioFile"
          name="addQuestion"
          onChange={handleFileChange}
          type="file"
          className="w-full h-full hidden"
        />
      </div>

      {/* <audio src={selectedAudio} controls></audio> */}

      <audio
        src={`data:audio/wav;base64,${formik.values.addQuestion}`}
        controls
      ></audio>
      <label
        htmlFor="addExplanationToVoiceQuestion"
        className="font-medium my-0 mb-2 mt-3 text-base font-Rubik w-full text-left text-textColorNeutralBlack_0C092A"
      >
        Add Explanation
      </label>

      <input
        id="addExplanationToVoiceQuestion"
        name="addExplanation"
        value={formik.values.addExplanation}
        onChange={formik.handleChange}
        className="w-full h-[3.5rem] rounded-[1.25rem]  py-4 px-4 bg-white border-2 border-[#EFEEFC]  hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300 "
        type="text"
        placeholder="Enter explanation to question"
      />
      <label
        htmlFor="addAnswerToVoiceQuestion"
        className="font-medium my-0 mt-6 mb-2 text-base font-Rubik w-full text-left text-textColorNeutralBlack_0C092A"
      >
        Add Answer
      </label>
      <input
        id="addAnswerToVoiceQuestion"
        name="addCorrectOption"
        value={formik.values.addCorrectOption}
        onChange={formik.handleChange}
        className="w-full h-[3.5rem] rounded-[1.25rem] font-Rubik font-normal text-base text-[#858494]  py-4 px-4 bg-white border-2 border-[#EFEEFC]  hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300"
        type="text"
        placeholder="Enter your answer"
      />
    </div>
  );
}

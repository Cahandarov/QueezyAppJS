import { useState, useRef } from "react";
import audioRecordIcon from "../images/audioRecordIcon.svg";
import convertFileToBase64 from "../../App/ConvertToBase64";
import { useDispatch } from "react-redux";
import { setAnswer } from "./quizPlaySlice";

const AudioRecorderAnswer = () => {
  const [permission, setPermission] = useState(false);
  const [stream, setStream] = useState(null);
  const mediaRecorder = useRef(null);
  const [recordingStatus, setRecordingStatus] = useState("inactive");
  const [audioChunks, setAudioChunks] = useState([]);
  const [audio, setAudio] = useState(null);
  const mimeType = "audio/wav";
  const dispatch = useDispatch();

  const getMicrophonePermission = async () => {
    if ("MediaRecorder" in window) {
      try {
        const streamData = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });
        setPermission(true);
        setStream(streamData);
      } catch (err) {
        alert(err.message);
      }
    } else {
      alert("The MediaRecorder API is not supported in your browser.");
    }
  };
  const startRecording = async () => {
    setRecordingStatus("recording");
    const media = new MediaRecorder(stream, { type: mimeType });
    mediaRecorder.current = media;
    mediaRecorder.current.start();
    let localAudioChunks = [];
    mediaRecorder.current.ondataavailable = (event) => {
      if (typeof event.data === "undefined") return;
      if (event.data.size === 0) return;
      localAudioChunks.push(event.data);
    };
    setAudioChunks(localAudioChunks);
  };
  const stopRecording = async () => {
    setRecordingStatus("inactive");
    mediaRecorder.current.stop();
    mediaRecorder.current.onstop = async () => {
      const audioBlob = new Blob(audioChunks, { type: mimeType });

      const audioBase64 = await convertFileToBase64(audioBlob);

      setAudio(audioBase64);
      setAudioChunks([]);
      dispatch(setAnswer(audioBase64));
    };
  };
  return (
    <div className="flex flex-col items-start justify-start gap-6">
      {!permission && (
        <button
          onClick={getMicrophonePermission}
          type="button"
          name="addVoiceAnswer"
          className="w-[55%] h-[3.5rem] rounded-[1.25rem] font-Rubik font-normal text-base text-[#858494] mt-2 flex justify-start items-center gap-8 px-4 bg-white border-2 border-[#EFEEFC] hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300 "
        >
          Get Microphone
          <img src={audioRecordIcon} alt="recorIcon" />
        </button>
      )}

      {permission && recordingStatus === "inactive" && (
        <button
          onClick={startRecording}
          type="button"
          name="addVoiceAnswer"
          className="w-[55%] h-[3.5rem] rounded-[1.25rem] font-Rubik font-normal text-base text-[#858494] mt-6 flex justify-start items-center gap-8 px-4 bg-white border-2 border-[#EFEEFC] hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300 "
        >
          Start Recording
          <img src={audioRecordIcon} alt="recorIcon" />
        </button>
      )}

      {recordingStatus === "recording" && (
        <button
          onClick={stopRecording}
          type="button"
          name="addVoiceAnswer"
          className="w-[55%] h-[3.5rem] rounded-[1.25rem] font-Rubik font-normal text-base text-[#858494] mt-6 flex justify-start items-center gap-8 px-4 bg-white border-2 border-[#EFEEFC] hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300 "
        >
          Stop Recording
          <img src={audioRecordIcon} alt="recorIcon" />
        </button>
      )}
      {audio ? (
        <div className="audio-container flex flex-col justify-center items-center gap-2">
          <audio src={`data:audio/wav;base64,${audio}`} controls></audio>
          <a download href={audio}>
            Download Recording
          </a>
        </div>
      ) : null}
    </div>
  );
};
export default AudioRecorderAnswer;

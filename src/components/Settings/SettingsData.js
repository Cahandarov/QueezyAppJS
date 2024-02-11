import profile from "./images/profileIcon.svg";
import mail from "./images/mailIcon.svg";
import lock from "./images/lockIcon.svg";
import portrait from "./images/portrait.svg";

const buttonData = [
  {
    image: profile,
    text1: "updateProfile",
    text2: "updateNameSurnameCountry",
  },
  {
    image: mail,
    text1: "changeEmail",
    text2: "madias@yahoo.com",
  },
  {
    image: lock,
    text1: "changePassword",
    text2: "lastPasswordChanges",
  },
  {
    image: portrait,
    text1: "updateAvatar",
    text2: "addAvatar",
  },
];
const FAQs = [
  {
    title: "intro",
    item: [
      {
        question: "introToQueezyApps",
        questionAze: "Queezy app-na giriş",
        questionEng: "Intro to Queezy apps",
        answer:
          "Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur",
      },
      {
        question: "howToLoginOrSignUp",
        questionAze: "Giriş və qeydiyyat necə edilir?",
        questionEng: "How to login or sign up?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur",
      },
    ],
  },
  {
    title: "createAndTekeQuiz",
    item: [
      {
        question: "howToCreateQuizInApp",
        questionAze: "App-da kuiz necə yaradılır?",
        questionEng: "How to create quiz in the app?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur",
      },
      {
        question: "howToTakeQuizInApp",
        questionAze: "App-da kuizlərdə necə iştirak edilir?",
        questionEng: "How to take quiz in the app?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur",
      },
      {
        question: "howDoPlayWithOthers",
        questionAze: "Digər oyunçularla necə kuiz oynaya bilərəm?",
        questionEng: "How do i play quiz with other players?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur",
      },
      {
        question: "canIinviteMyFriends",
        questionAze:
          "Dostlarımı birlikdə kuiz oynamaq üçün necə dəvət edə bilərəm?",
        questionEng: "Can i invite my friends to play quiz together?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur",
      },
    ],
  },
];

export { buttonData, FAQs };

import Quiz from "react-quiz-component";
import "./App-ar.css";

export const quiz = {
  "disableSynopsis":true,
  "appLocale": {
    "landingHeaderText": "<questionLength> أسئلة",
    "question": "السؤال",
    "startQuizBtn": "إبدء الأسئلة",
    "resultFilterAll": "الكل",
    "resultFilterCorrect": "صحيح",
    "resultFilterIncorrect": "خطئ",
    "prevQuestionBtn": "السابق",
    "nextQuestionBtn": "التالي",
    "resultPageHeaderText": "لقد أكملت الاختبار. لقد حصلت على <correctIndexLength> من <questionLength> الأسئلة.",
    "singleSelectionTagText": 'خيار وحيد',
  "multipleSelectionTagText": 'متعدد الخيارات',
  "pickNumberOfSelection": 'اختر <numberOfSelection>',

  },
  resultPagePoint: 'لقد حصلت على <correctPoints> من <totalPoints>.',

  quizTitle: "أسئلة تجريبية",
  quizSynopsis: "مهارات عامة",
  questions: [
    // السؤال الثاني
    {
      // السؤال
      question: "ما هي عاصمة الإمارات العربية المتحدة؟",
      // نوع السؤال
      questionType: "photo",
      answerSelectionType: "single",
      // الإجابات
      "answers": [
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1583771803077-e512cbd2059c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1506795213373-430e921fe2ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      ],
      // الإجابة الصحيحة
      correctAnswer: "1",
      messageForCorrectAnswer: "أحسنت، الجواب صحيح!",
      // الإجابة الخاطئة
      messageForIncorrectAnswer: "الجواب غير صحيح",
      // شرح الإجابة
      explanation: "عاصمة الإمارات العربية المتحدة هي أبوظبي",
      point: "1"
    },
    {
      // السؤال
      question: "ما هي العملة الرسمية للمملكة المتحدة؟",
      // نوع السؤال
      questionType: "text",
      answerSelectionType: "single",
      // الإجابات
      answers: ["الدولار الأمريكي", "اليورو", "الجنيه الإسترليني", "الفرنك السويسري"],
      // الإجابة الصحيحة
      correctAnswer: "2",
      messageForCorrectAnswer: "أحسنت، الجواب صحيح!",
      // الإجابة الخاطئة
      messageForIncorrectAnswer: "الجواب غير صحيح",
      // شرح الإجابة
      explanation: "العملة الرسمية للمملكة المتحدة هي الجنيه الإسترليني",
      point: "1"
    },
    {
      // السؤال
      question: "كم عدد الدول الأعضاء في الاتحاد الأوروبي؟",
      // نوع السؤال
      questionType: "text",
      answerSelectionType: "single",
      // الإجابات
      answers: ["28", "27", "26", "25"],
      // الإجابة الصحيحة
      correctAnswer: "1",
      messageForCorrectAnswer: "أحسنت، الجواب صحيح!",
      // الإجابة الخاطئة
      messageForIncorrectAnswer: "الجواب غير صحيح",
      // شرح الإجابة
      explanation: "يتكون الاتحاد الأوروبي حالياً من 27 دولة عضو",
      point: "1"
    }
    
  ]
};

export default function App() {
  return (
    <div className="quiz-container">
      <Quiz quiz={quiz} shuffle={true} showInstantFeedback={true} />
    </div>
  );
}

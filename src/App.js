import Quiz from "react-quiz-component";
import "./App.css";

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
    "singleSelectionTagText": '',
  "multipleSelectionTagText": '',
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
      questionType: "text",
      answerSelectionType: "single",
      // الإجابات
      answers: ["أبوظبي", "دبي", "الشارقة", "رأس الخيمة"],
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

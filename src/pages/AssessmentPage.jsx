import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";
import { answerOptions,assessmentQuestions } from "../data/questions";

const AssessmentPage = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(assessmentQuestions.length).fill(null));

  const progress = useMemo(
    () => ((currentQuestion + 1)/assessmentQuestions.length) * 100,
    [currentQuestion],
  );

  const handleSelect = (value) => {
    const nextAnswers = [...answers];
    nextAnswers[currentQuestion] = value;
    setAnswers(nextAnswers);
  };

  const currentAnswer = answers[currentQuestion];
  const isLastQuestion = currentQuestion === assessmentQuestions.length - 1;
  const canMoveForward = currentAnswer !== null;

  const handleSubmit = () => {
    const totalScore = answers.reduce((sum, value) => sum + value, 0);
    localStorage.setItem(
      "mental-health-assessment",
      JSON.stringify({ answers, totalScore, submittedAt: new Date().toISOString() }),
    );
    navigate("/result", { state: { totalScore } });
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <button
        type="button"
        onClick={() => navigate("/")}
        className="text-sm font-semibold text-lavender-600 transition hover:text-lavender-700"
      >
        Back to Home
      </button>

      <section className="rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-soft sm:p-8">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-semibold text-lavender-500">Assessment Progress</p>
          <p className="text-sm font-medium text-slate-500">
            {currentQuestion + 1}/{assessmentQuestions.length}
          </p>
        </div>

        <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-lavender-500 to-sky-400 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </section>

      <QuestionCard
        questionNumber={currentQuestion + 1}
        totalQuestions={assessmentQuestions.length}
        question={assessmentQuestions[currentQuestion]}
        options={answerOptions}
        selectedValue={currentAnswer}
        onSelect={handleSelect}
      />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={() => setCurrentQuestion((prev) => Math.max(prev - 1, 0))}
          disabled={currentQuestion === 0}
          className="rounded-2xl border border-slate-200 bg-white px-5 py-3 font-semibold text-ink-700 shadow-sm transition hover:border-lavender-200 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Previous
        </button>

        {isLastQuestion ? (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!answers.every((answer) => answer !== null)}
            className="rounded-2xl bg-lavender-600 px-6 py-3 font-semibold text-white shadow-card transition hover:bg-lavender-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Submit
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setCurrentQuestion((prev) => prev + 1)}
            disabled={!canMoveForward}
            className="rounded-2xl bg-lavender-600 px-6 py-3 font-semibold text-white shadow-card transition hover:bg-lavender-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next
          </button>
        )}
      </div>

      <section className="rounded-[1.75rem] border border-lavender-100 bg-lavender-50/80 px-5 py-4 text-sm leading-7 text-ink-700 shadow-card">
        Please answer all questions honestly. Your responses help this prototype provide
        better support and guidance.
      </section>
    </div>
  );
};

export default AssessmentPage;

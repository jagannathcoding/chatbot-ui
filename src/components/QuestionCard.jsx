const QuestionCard = ({
  questionNumber,
  totalQuestions,
  question,
  options,
  selectedValue,
  onSelect,
}) => {
  return (
    <section className="rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-soft sm:p-8">
      <p className="text-sm font-medium text-lavender-500">
        Question {questionNumber} of {totalQuestions}
      </p>
      <h2 className="mt-4 max-w-3xl text-2xl font-bold leading-tight text-ink-800 sm:text-3xl">
        {questionNumber}. {question}
      </h2>

      <div className="mt-8 space-y-4">
        {options.map((option) => {
          const checked = selectedValue === option.value;

          return (
            <label
              key={option.label}
              className={`flex cursor-pointer items-center gap-4 rounded-2xl border px-4 py-4 transition ${
                checked
                  ? "border-lavender-400 bg-lavender-50 shadow-sm"
                  : "border-slate-200 bg-white hover:border-lavender-200"
              }`}
            >
              <input
                type="radio"
                name={`question-${questionNumber}`}
                value={option.value}
                checked={checked}
                onChange={() => onSelect(option.value)}
                className="h-4 w-4 accent-lavender-500"
              />
              <span className="text-base font-medium text-ink-800">{option.label}</span>
            </label>
          );
        })}
      </div>
    </section>
  );
};

export default QuestionCard;

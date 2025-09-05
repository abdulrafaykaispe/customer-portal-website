export const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(" ") + " ...";
};

export function formatNumberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const highlightEmail = (text) => {
  const email = "info@kaispe.com";
  const parts = text.split(email);
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && (
            <span className="text-[#473BF0]">{email}</span>
          )}
        </span>
      ))}
    </>
  );
};

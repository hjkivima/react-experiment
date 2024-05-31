type Props = {
  onClick: () => void;
};

export function NextButton({ onClick }: Props) {
  return (
    <button
      className="next-button"
      onClick={onClick}>
      &#8594;
    </button>
  );
}

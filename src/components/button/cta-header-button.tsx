interface CTAButtonProps {
  width: string;
  height: string;
  textSize: string;
  text: string;
}
const CTAButton = ({ width, height, textSize, text }: CTAButtonProps) => {
  return (
    <button
      className={`${width} ${height} ${textSize} rounded-sm bg-[#3B82F6] text-white`}
    >
      {text}
    </button>
  );
};

export default CTAButton;

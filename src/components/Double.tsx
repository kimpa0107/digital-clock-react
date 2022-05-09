import Number from './Number';

interface Props {
  value: number;
  color?: string;
}

export default function Double({
  value,
  color = 'bg-gray-700',
}: Props) {
  const num1 = Math.floor(value / 10);
  const num2 = value % 10;

  return (
    <div className={`flex space-x-5`}>
      <Number value={num1} color={color} />
      <Number value={num2} color={color} />
    </div>
  );
}

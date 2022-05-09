import Number from './Number';

interface Props {
  visible?: boolean;
  color?: string;
}

export default function Split({
  visible = true,
  color = 'bg-gray-700',
}: Props) {
  return <Number split visible={visible} color={color} />;
}

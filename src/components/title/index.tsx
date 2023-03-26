import './style.scss';
import { TitleProps } from './types';

function Title(props: TitleProps) {
  const { text, description, className } = props;
  return (
    <>
      <div className={`Title ${className}`}>{text}</div>
      {description && <div className="Title__description">{description}</div>}
    </>
  );
}
export default Title;

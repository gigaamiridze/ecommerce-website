import { IHeadingProps } from '../interfaces';
import { H1Title, H2Title, H3Title, H4Title, H5Title } from '../components';

function Heading(props: IHeadingProps) {
  const { title, type } = props;

  const titleToApply = () => {
    switch (type) {
      case 1:
        return H1Title;
      case 2:
        return H2Title;
      case 3:
        return H3Title;
      case 4:
        return H4Title;
      case 5:
        return H5Title;
      default:
        return H3Title;
    }
  };

  const Title = titleToApply();

  return (
    <Title>{title}</Title>
  )
}

export default Heading;

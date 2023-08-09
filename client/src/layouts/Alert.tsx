import { IAlertProps } from '../interfaces';
import { AlertContainer } from '../components';

function Alert(props: IAlertProps) {
  const { variant, children } = props;

  return (
    <AlertContainer variant={variant}>
      {children}
    </AlertContainer>
  )
}

export default Alert

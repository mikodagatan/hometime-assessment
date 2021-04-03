import { Chip } from '@material-ui/core';

import { ReactComponent as QuestionMark } from '../../assets/icons/question-mark.svg';
import { ReactComponent as Check } from '../../assets/icons/check.svg';
import { ReactComponent as Cross } from '../../assets/icons/cross.svg';

import theme from '../../themes/BaseTheme';

const Status = (props) => {
  const icons = {
    success: <Check />,
    warning: <QuestionMark />,
    danger: <Cross />,
  };
  return (
    <Chip
      icon={icons[props.status]}
      label={`${props.label}`}
      style={{ backgroundColor: theme.palette[props.status].main }}
    />
  );
};

export default Status;

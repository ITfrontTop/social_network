import { Field } from 'react-final-form';
import { required } from '../../../utils/validators/validators';
import styles from './FormsControls.module.css';

const FormControl = ({ input, meta: { touched, error }, children }) => {
  const hasError = touched && error;
  return (
    <div className={styles.formControl + ' ' + (hasError ? styles.error : ' ')}>
      <div>{children}</div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export const createField = (
  placeholder,
  name,
  validate,
  component,
  props = {},
  text = ''
) => {
  <div>
    <Field
      placeholder={placeholder}
      name={name}
      validate={validate}
      component={component}
      {...props}
    />{' '}
    {text}
  </div>;
};

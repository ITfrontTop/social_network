import { Form, Field } from 'react-final-form';
import { createField, Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import style from './../common/FormControls/FormControls.module.css';

const LoginReduxForm = ({ handleSubmit, error }) => {
  return (
    <Form
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          {createField('Email', 'login', [required], Input)}
          {
            (createField('Password', 'password', [required], Input),
            { type: 'password' })
          }
          {createField(
            null,
            'rememberMy',
            [],
            Input,
            {
              type: 'checkbox'
            },
            'rememberMe'
          )}
          <div>
            <Field
              name={'rememberMy'}
              validate={[required]}
              component={Input}
              type={'checkbox'}
            />{' '}
            remember me
          </div>
          {captchaUrl && <img src={captchaUrl} />}
          {captchaUrl &&
            createField('Symbols from image', 'captcha', [reguired], Input, {})}
          {error && <div className={style.formSummaryError}>{error}</div>}
          <div>
            <button>Login</button>
          </div>
        </form>
      )}
    />
  );
};

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };

  if (props.isAuth) {
    return <Redirect to={'/profile'} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login })(Login);

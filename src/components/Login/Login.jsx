import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../../services/Auth/AuthServices';
import { selectCurrentUser, setCredentials } from '../../store/Auth/authSlice';

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();
  const username = useSelector(selectCurrentUser);
  const [user, setUser] = useState(username || '');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location?.state?.from?.pathname || '/';

  const [login, { isLoading }] = useLoginMutation({
    username: user,
    password: pwd,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = await login({
        username: user,
        password: pwd,
      });
      dispatch(setCredentials({ ...userData.data, user }));
      setUser('');
      setPwd('');
      navigate(fromPage);
    } catch (err) {
      if (!err?.originalStatus) {
        setErrMsg('No Server Response');
      } else if (err.originalStatus === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.originalStatus === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }
  };

  const handleUserInput = (e) => setUser(e.target.value);

  const handlePwdInput = (e) => setPwd(e.target.value);

  const content = isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className='login'>
      <p
        ref={errRef}
        className={errMsg ? 'errmsg' : 'offscreen'}
        aria-live='assertive'
      >
        {errMsg}
      </p>

      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username:</label>
        <input
          type='text'
          id='username'
          ref={userRef}
          value={user}
          onChange={handleUserInput}
          autoComplete='off'
          required
        />

        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          id='password'
          onChange={handlePwdInput}
          value={pwd}
          required
        />
        <button>Sign In</button>
      </form>
      <NavLink to='/register'>Click for Register new account!</NavLink>
    </section>
  );

  return content;
};
export { Login };

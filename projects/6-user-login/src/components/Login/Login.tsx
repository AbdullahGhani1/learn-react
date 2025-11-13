import React, { useEffect, useState, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

interface LoginProps {
   onLogin: (email: string, password: string) => void;
}

interface FormState {
   value: string;
   isValid: boolean | null;
}

interface FormAction {
   type: 'INPUT_BLUR' | 'USER_INPUT';
   val?: string;
}

const emailReducer = (state: FormState, action: FormAction): FormState => {
   if (action.type === 'USER_INPUT') {
      return { value: action.val!, isValid: action.val!.includes('@') };
   }

   if (action.type === 'INPUT_BLUR') {
      return { value: state.value, isValid: state.value.includes('@') };
   }
   return { value: '', isValid: false };
};
const passwordReducer = (state: FormState, action: FormAction): FormState => {
   if (action.type === 'USER_INPUT') {
      return { value: action.val!, isValid: action.val!.trim().length > 6 };
   }

   if (action.type === 'INPUT_BLUR') {
      return { value: state.value, isValid: state.value.trim().length > 6 };
   }
   return { value: '', isValid: false };
};
const Login = (props: LoginProps) => {
   // const [enteredEmail, setEnteredEmail] = useState("");
   // const [emailIsValid, setEmailIsValid] = useState<boolean | undefined>();
   // const [enteredPassword, setEnteredPassword] = useState("");
   // const [passwordIsValid, setPasswordIsValid] = useState();
   const [formIsValid, setFormIsValid] = useState<boolean | null>(false);
   const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
      value: '',
      isValid: null,
   });
   const [emailState, dispatchEmail] = useReducer(emailReducer, {
      value: '',
      isValid: null,
   });

   const { isValid: emailIsValid } = emailState;
   const { isValid: passwordIsValid } = passwordState;

   useEffect(() => {
      const identifer = setTimeout(() => {
         console.log('Checking form validity!');
         setFormIsValid(emailIsValid && passwordIsValid);
      }, 1000);
      return () => {
         console.log('CLEANUP!');
         clearTimeout(identifer);
      };
   }, [emailIsValid, passwordIsValid]);
   const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      // setEnteredEmail(event.target.value);
      dispatchEmail({
         type: 'USER_INPUT',
         val: event.target.value,
      });
   };

   const passwordChangeHandler = (
      event: React.ChangeEvent<HTMLInputElement>
   ) => {
      dispatchPassword({ type: 'USER_INPUT', val: event.target.value });
      setFormIsValid(emailState.isValid && passwordState.isValid);
   };

   const validateEmailHandler = () => {
      // setEmailIsValid(emailState.isValid);
      dispatchEmail({ type: 'INPUT_BLUR' });
   };

   const validatePasswordHandler = () => {
      dispatchPassword({ type: 'INPUT_BLUR' });
   };

   const submitHandler = (event: React.FormEvent) => {
      event.preventDefault();
      props.onLogin(emailState.value, passwordState.value);
   };

   return (
      <Card className={classes.login}>
         <form onSubmit={submitHandler}>
            <div
               className={`${classes.control} ${
                  emailState.isValid === false ? classes.invalid : ''
               }`}
            >
               <label htmlFor="email">E-Mail</label>
               <input
                  type="email"
                  id="email"
                  value={emailState.value}
                  onChange={emailChangeHandler}
                  onBlur={validateEmailHandler}
               />
            </div>
            <div
               className={`${classes.control} ${
                  passwordState.isValid === false ? classes.invalid : ''
               }`}
            >
               <label htmlFor="password">Password</label>
               <input
                  type="password"
                  id="password"
                  value={passwordState.value}
                  onChange={passwordChangeHandler}
                  onBlur={validatePasswordHandler}
               />
            </div>
            <div className={classes.actions}>
               <Button
                  type="submit"
                  className={classes.btn}
                  disabled={!formIsValid}
               >
                  Login
               </Button>
            </div>
         </form>
      </Card>
   );
};

export default Login;

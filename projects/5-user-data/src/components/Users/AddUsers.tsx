import React, { useRef, useState } from 'react';
import Card from '../UI/Card';
import styles from './AddUsers.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
interface AddUsersProps {
   onAddUser: (name: string, age: number) => void;
}
const AddUsers = (props: AddUsersProps) => {
   // const [enteredUserName, setEnteredUserName] = useState("");
   // const [enteredAge, setEnteredAge] = useState("");
   const [error, setError] = useState<{ title: string; message: string }>();
   const nameInputRef = useRef<HTMLInputElement>();
   const ageInputRef = useRef<HTMLInputElement>();
   console.log('render Component on Every Keystrock');

   const addUserHandler = (event: React.ChangeEvent<HTMLFormElement>) => {
      event.preventDefault();
      const name = nameInputRef.current?.value;
      const age = ageInputRef.current?.value;
      if (age.trim().length === 0 || name.trim().length === 0) {
         setError({
            title: 'Invalid input',
            message: 'Please enter a valid name and age (non-empty values).',
         });
      }
      if (+age < 1) {
         setError({
            title: 'Invalid age',
            message: 'Please enter a valid age (> 0).',
         });
      }
      // console.log(`userName\t${enteredUserName}\nage\t${enteredAge}`);
      props.onAddUser(name, +age);
      nameInputRef.current.value = '';
      ageInputRef.current.value = '';
      // setEnteredUserName("");
      // setEnteredAge("");
   };

   // const userNameChangeHandler = (
   //   event: React.ChangeEvent<HTMLInputElement>
   // ) => {
   //   setEnteredUserName(event.target.value);
   // };
   // const ageChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
   //   setEnteredAge(event.target.value);
   // };
   const errorHandler = () => {
      setError(undefined);
   };
   return (
      <React.Fragment>
         {error && (
            <ErrorModal
               title={error.title}
               message={error.message}
               onClick={errorHandler}
            />
         )}
         <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
               <label htmlFor="username">UserName</label>
               <input
                  id="username"
                  // value={enteredUserName}
                  type="text"
                  // onChange={userNameChangeHandler}
                  ref={nameInputRef}
               />
               <label htmlFor="age">Age (Years)</label>
               <input
                  id="age"
                  type="number"
                  // value={enteredAge}
                  // onChange={ageChangeHandler}
                  ref={ageInputRef}
               />
               <Button type="submit">Add User</Button>
            </form>
         </Card>
      </React.Fragment>
   );
};

export default AddUsers;

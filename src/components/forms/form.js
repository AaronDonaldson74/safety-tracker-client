import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="firstName" placeholder="first name" ref={register} />
        <input name="lastName" placeholder="last name" ref={register} />
        <select name="gender" ref={register}>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <input type="submit" />
      </form>
    </div>
  );
}
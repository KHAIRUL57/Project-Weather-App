import React from "react";
import {useForm} from 'react-hook-form'
import "../Style/Input.css"

const Input = (props) => {

    const { getweaters } = props
    const {handleSubmit, register} = useForm()

  return (
    <div>
    <form onSubmit={handleSubmit(getweaters)}>
      <input
        type="text"
        autoComplete="off"
        className="search-box"
        placeholder="Search for a city..."
        name="city"
        ref={register}
      />
      <button className="button-search">
        <i className="fas fa-search"></i>
      </button>
    </form>
  </div>
  );
};
export default Input

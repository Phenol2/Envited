import {
  InputWrapper,
} from "./Input.styled"

const Input = ({
  label,
  placeholder,
  type,
  value,
  onChange,
}) => {
  return (
    <InputWrapper>
      <label>{label}</label>
      <input 
        type = {type} 
        placeholder = {placeholder}
        value = {value}
        onChange = {onChange}
        />
    </InputWrapper>
    )
}

export default Input;

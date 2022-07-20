const RadioButton = ({ label, value, checked, onChange}) => {
    
    return (
      <label>
        <input type="radio" checked={value} onChange={onChange} />
        {label}
      </label>
    )
  }
  
  export default RadioButton;
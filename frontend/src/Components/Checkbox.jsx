const Checkbox = ({ label, value, onChange, checked }) => {
    return (
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          onChange={onChange}
          checked={checked}
          value={value}
          name={value}
          className="form-checkbox h-5 w-5 text-green-600"
        />
        <span className="text-black">{label}</span>
      </label>
    );
  };
export default Checkbox;  
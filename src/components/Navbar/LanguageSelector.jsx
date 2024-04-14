import PropTypes from 'prop-types';

const LanguageSelector = ({ onChange }) => {
  const handleLanguageChange = (e) => {
    console.log(e.target.value, 'language');
    const selectedLanguage = e.target.value;
    onChange(selectedLanguage); // Call the onChange function with the selected language
  };

  return (
    <select onChange={handleLanguageChange}>
      <option value='en'>ENGLISH</option>
      {/* <option value="de">GERMAN</option> */}
      <option value='jp'>日本語</option>
      {/* Add more options for other languages if needed */}
    </select>
  );
};

LanguageSelector.propTypes = {
  onChange: PropTypes.func.isRequired, // Function to be called when the language is changed
};

export default LanguageSelector;

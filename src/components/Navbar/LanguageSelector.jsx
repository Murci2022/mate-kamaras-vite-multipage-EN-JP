import PropTypes from 'prop-types';
import './LanguageSelector.css';

const LanguageSelector = ({ selectedLanguage, onChange }) => {
  console.log(selectedLanguage);
  const handleLanguageChange = (e) => {
    console.log(e.target.value, 'language');
    const selectedLanguage = e.target.value;
    onChange(selectedLanguage); // Call the onChange function with the selected language
  };

  return (
    <div className='language-selector__select'>
      <select
        onChange={handleLanguageChange}
        defaultValue={selectedLanguage}
        className='languageSelector'
      >
        <option value='en'>
          <p className='p__cormorant'>ENGLISH</p>
        </option>
        {/* <option value="de">GERMAN</option> */}
        <option value='jp'>日本語</option>
        <option value='hu'>MAGYAR</option>
        <option value='zh'>简体中文</option>
        <option value='ko'>한국어</option>
        {/* Add more options for other languages if needed */}
      </select>
    </div>
  );
};

LanguageSelector.propTypes = {
  onChange: PropTypes.func.isRequired, // Function to be called when the language is changed
};

export default LanguageSelector;

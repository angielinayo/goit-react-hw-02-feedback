import PropTypes from 'prop-types';
import { ButtonContainer } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, updateState }) => {
  return (
    <ButtonContainer>
      {options.map(option => {
        return (
          <button
            key={option}
            onClick={() => {
              updateState(option);
            }}
          >
            {option}
          </button>
        );
      })}
    </ButtonContainer>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  updateState: PropTypes.func.isRequired,
};

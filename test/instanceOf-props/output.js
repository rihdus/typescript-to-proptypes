import * as React from 'react';
import PropTypes from 'prop-types';

function DatePickerField(props) {
	const { date } = props;

	return (
		<React.Fragment>
			<input value={JSON.stringify(date)} />
		</React.Fragment>
	);
}

DatePickerField.propTypes = {
	date: PropTypes.oneOfType([
		PropTypes.instanceOf(Date),
		PropTypes.shape({
			from: PropTypes.instanceOf(Date),
			to: PropTypes.instanceOf(Date),
		}),
	]),
};

export default DatePickerField;

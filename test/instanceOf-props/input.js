import * as React from 'react';

function DatePickerField(props) {
	const { date } = props;

	return (
		<React.Fragment>
			<input value={JSON.stringify(date)} />
		</React.Fragment>
	);
}

export default DatePickerField;

import * as React from 'react';

export interface MultipleDatesProps {
	from?: Date;
	to?: Date;
}

export type DatePickerProps = {
	date?: Date | MultipleDatesProps;
};

export default function DatePickerField(props: DatePickerProps): JSX.Element;

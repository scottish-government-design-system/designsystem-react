import { test, expect, vi } from 'vitest';
import { render, screen, within, fireEvent } from '@testing-library/react';
import DatePicker from './DatePicker';

const LABEL_TEXT = 'Date of birth';
const DATE_PICKER_ID = 'date-picker';

test('date picker renders correctly', () => {
    render(
        <DatePicker
            id={DATE_PICKER_ID}
            label={LABEL_TEXT}
        />
    );

    // a little hacky. maybe testid would be better?
    const datePicker = screen.getAllByRole('generic')[1];
    const label = within(datePicker).getByText(LABEL_TEXT);
    const textInput = within(datePicker).getByRole('textbox');

    expect(datePicker).toHaveClass('ds_datepicker');
    expect(label).toHaveClass('ds_label');
    expect(label).toHaveAttribute('for', textInput.id);
    expect(label.tagName).toEqual('LABEL');
    expect(textInput).toHaveClass('ds_input', 'ds_input--fixed-10');
    expect(textInput.id).toEqual(DATE_PICKER_ID);
});

test('date picker with disabled dates', () => {
    const DISABLED_DATES = '18/05/2023 19/05/2023'

    render(
        <DatePicker
            id={DATE_PICKER_ID}
            label={LABEL_TEXT}
            disabledDates={DISABLED_DATES}
        />
    );
    const datePicker = screen.getAllByRole('generic')[1];

    expect(datePicker).toHaveAttribute('data-disableddates', DISABLED_DATES);
});

test('date picker with hint text', () => {
    const HINT_TEXT = 'My hint text'

    render(
        <DatePicker
            id={DATE_PICKER_ID}
            label={LABEL_TEXT}
            hintText={HINT_TEXT}
        />
    );
    const datePicker = screen.getAllByRole('generic')[1];
    const hintTextEl = screen.getByText(HINT_TEXT);
    const textInput = within(datePicker).getByRole('textbox');

    expect(hintTextEl).toBeInTheDocument();
    expect(textInput).toHaveAttribute('aria-describedby', hintTextEl.id);
});

test('date picker with custom icon path', () => {
    const ICON_PATH = '/my/icon/path'

    render(
        <DatePicker
            id={DATE_PICKER_ID}
            label={LABEL_TEXT}
            iconPath={ICON_PATH}
        />
    );

    // todo
});

test('date picker with max date', () => {
    const MAX_DATE = '28/05/2023'

    render(
        <DatePicker
            id={DATE_PICKER_ID}
            label={LABEL_TEXT}
            maxDate={MAX_DATE}
        />
    );
    const datePicker = screen.getAllByRole('generic')[1];

    expect(datePicker).toHaveAttribute('data-maxDate', MAX_DATE);
});

test('date picker with min date', () => {
    const MIN_DATE = '28/05/2023'

    render(
        <DatePicker
            id={DATE_PICKER_ID}
            label={LABEL_TEXT}
            minDate={MIN_DATE}
        />
    );
    const datePicker = screen.getAllByRole('generic')[1];

    expect(datePicker).toHaveAttribute('data-mindate', MIN_DATE);
});

test('date picker with blur fn', () => {
    const ONBLUR_FUNCTION = vi.fn();

    render(
        <DatePicker
            id={DATE_PICKER_ID}
            label={LABEL_TEXT}
            onBlur={ONBLUR_FUNCTION}
        />
    );
    const datePicker = screen.getAllByRole('generic')[1];
    const textInput = within(datePicker).getByRole('textbox');

    fireEvent.blur(textInput);

    expect(ONBLUR_FUNCTION).toHaveBeenCalled();
});

test('date picker with change fn', () => {
    const ONCHANGE_FUNCTION = vi.fn();

    render(
        <DatePicker
            id={DATE_PICKER_ID}
            label={LABEL_TEXT}
            onChange={ONCHANGE_FUNCTION}
        />
    );
    const datePicker = screen.getAllByRole('generic')[1];
    const textInput = within(datePicker).getByRole('textbox');

    fireEvent.change(textInput, {target: {value: 'foo'}});

    expect(ONCHANGE_FUNCTION).toHaveBeenCalled();
});

test('date picker with initial value', () => {
    const INITIAL_VALUE = '28/05/2023';

    render(
        <DatePicker
            id={DATE_PICKER_ID}
            label={LABEL_TEXT}
            value={INITIAL_VALUE}
        />
    );
    const datePicker = screen.getAllByRole('generic')[1];
    const textInput = within(datePicker).getByRole('textbox');

    expect(textInput).toHaveValue(INITIAL_VALUE);
});

test('date picker with multiple inputs', () => {
    const INITIAL_VALUE = '28/05/2023';

    render(
        <DatePicker
            id={DATE_PICKER_ID}
            label={LABEL_TEXT}
            multiple
            value={INITIAL_VALUE}
        />
    );

    const datePicker = screen.getAllByRole('generic')[1];
    const textInputs = within(datePicker).getAllByRole('textbox');
    const dateInput = textInputs[0];
    const monthInput = textInputs[1];
    const yearInput = textInputs[2];
    const dateLabel = within(datePicker).getByText('Day');
    const monthLabel = within(datePicker).getByText('Month');
    const yearLabel = within(datePicker).getByText('Year');

    expect(textInputs.length).toEqual(3);

    expect(dateInput).toHaveValue(INITIAL_VALUE.split('/')[0]);
    expect(monthInput).toHaveValue(INITIAL_VALUE.split('/')[1]);
    expect(yearInput).toHaveValue(INITIAL_VALUE.split('/')[2]);

    expect(dateInput).toHaveAttribute('id', `${DATE_PICKER_ID}-day`);
    expect(monthInput).toHaveAttribute('id', `${DATE_PICKER_ID}-month`);
    expect(yearInput).toHaveAttribute('id', `${DATE_PICKER_ID}-year`);

    expect(dateInput).toHaveClass('ds_input', 'ds_input--fixed-2', 'js-datepicker-date');
    expect(monthInput).toHaveClass('ds_input', 'ds_input--fixed-2', 'js-datepicker-month');
    expect(yearInput).toHaveClass('ds_input', 'ds_input--fixed-4', 'js-datepicker-year');

    expect(dateLabel).toHaveClass('ds_label');
    expect(monthLabel).toHaveClass('ds_label');
    expect(yearLabel).toHaveClass('ds_label');

    expect(dateLabel).toHaveAttribute('for', dateInput.id);
    expect(monthLabel).toHaveAttribute('for', monthInput.id);
    expect(yearLabel).toHaveAttribute('for', yearInput.id);
});

test('date picker with error message', () => {
    const ERROR_MESSAGE_TEXT = 'This is a required field';

    render(
        <DatePicker
            id={DATE_PICKER_ID}
            label={LABEL_TEXT}
            errorMessage={ERROR_MESSAGE_TEXT}
            hasError
        />
    );

    const textInput = screen.getByRole('textbox');
    const errorMessageElement = screen.getByText(ERROR_MESSAGE_TEXT);

    expect(textInput).toHaveClass('ds_input--error')
    expect(textInput).toHaveAttribute('aria-describedby', errorMessageElement.id);
    expect(textInput).toHaveAttribute('aria-invalid', 'true');
    expect(errorMessageElement).toBeInTheDocument();
    expect(errorMessageElement).toHaveClass('ds_question__error-message');
});

test('passing additional props', () => {
    render(
        <DatePicker
            id={DATE_PICKER_ID}
            label={LABEL_TEXT}
            data-test="foo"
        />
    )

    const datePicker = screen.getAllByRole('generic')[1];
    expect(datePicker?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <DatePicker
            id={DATE_PICKER_ID}
            label={LABEL_TEXT}
            className="foo"
        />
    )

    const datePicker = screen.getAllByRole('generic')[1];
    expect(datePicker).toHaveClass('foo', 'ds_datepicker');
});

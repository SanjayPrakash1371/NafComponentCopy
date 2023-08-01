/* eslint-disable react/button-has-type */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable max-len */
/* eslint-disable react/require-default-props */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import Calendar from 'react-calendar';
import { Icon } from '../Icon/Icon';
import './Datepicker.scss';

interface InputProps{
    currentDate:Date;
    onChange?: (e: any) => any;
    className?:string;
    id?:string;
    readOnly?:boolean;
    name?:string;
    minDate?:Date;
    maxDate?:Date;
}
export const Datepicker = ({
    currentDate,
    onChange,
    className,
    id,
    name,
    minDate,
    maxDate,
    readOnly, ...props
}: InputProps) => {
    const [date, setDate] = useState(currentDate); // useState<Date | null | undefined>(currentDate);//
    const [selecteddate, setselectedDate] = useState(currentDate);
    const [isvalueChanged, setIsvalueChanged] = useState(false);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const handleClick: () => void = () => {
        setIsDropdownVisible(!isDropdownVisible);
        setselectedDate(date);
        setIsvalueChanged(true);
    };
    const fileRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isvalueChanged) {
            fileRef.current?.click();
        }
        setIsDropdownVisible(false);
        setIsvalueChanged(false);
    }, [isvalueChanged]);

    return (
        <div className={className}>
            <div className="naf-datepicker" onClick={(e) => { setIsDropdownVisible(!isDropdownVisible); }}>
                <input
                    type="text"
                    className={[
                        'naf-datepicker__input',
                        isDropdownVisible ? 'naf-datepicker__input--active naf-datepicker__input--toggle'
                            : (selecteddate.toDateString() !== currentDate.toDateString()
                                ? 'naf-datepicker__input--completed' : ''),
                    ].join(' ')}
                    value={selecteddate?.toLocaleDateString() ?? ''}
                    readOnly
                    onClick={onChange}
                    id={id}
                    ref={fileRef}
                    name={name}
                />
                <span className={(selecteddate.toDateString() === currentDate.toDateString() ? 'naf-datepicker__icon--wrapper--toggle ' : 'naf-datepicker__icon--wrapper--completed ')
         + (isDropdownVisible ? 'naf-datepicker__icon--wrapper--active' : '')}
                >
                    <Icon icon={['far', 'fa-calendar-day']} className="naf-calendar__icon" />
                </span>

            </div>
            {
                !readOnly && isDropdownVisible && (
                    <div className="naf-calendar__container">
                        <Calendar
                            calendarType="US"
                            onClickDay={setDate}
                            value={date}
                            minDate={minDate}
                            maxDate={maxDate}
                        />

                        <div className="naf-calendar__footerbtn">
                            <button className="naf-calendar__footerbtn--btn-cancel" onClick={(e) => { setIsDropdownVisible(!isDropdownVisible); }}>Cancel</button>
                            <button
                                className="naf-calendar__footerbtn--btn-apply"
                                onClick={handleClick}
                            >
                                Apply
                            </button>
                        </div>

                    </div>
                )
            }
        </div>
    );
};

export default Datepicker;

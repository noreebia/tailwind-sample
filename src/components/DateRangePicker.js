import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    // <div class="flex justify-center">
        <div>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        dateFormat="Pp"
        placeholderText="Please select a date"
      />
      <DatePicker selected={endDate} onChange={(date) => setEndDate(date)}         showTimeSelect
        dateFormat="Pp"
        placeholderText="Please select a date"
/>
    </div>
  );
};

export default DateRangePicker;

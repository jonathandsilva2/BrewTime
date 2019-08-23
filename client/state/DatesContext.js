import React, { createContext } from 'react';

const dates = [];

export const DatesContext = createContext(dates);

export const AddToDatesContext = createContext(item => {
  dates.push(item);
  console.log('Booking Added', dates);
});

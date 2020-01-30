import React, { createContext } from 'react';

const bookings = [];

export const BookingsContext = createContext(bookings);

export const AddToBookingsContext = createContext(item => {
  bookings.push(item);
  console.log('Booking Added', bookings);
});

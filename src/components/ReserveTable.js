import React from "react";
import "../styles/ReserveTable.css";
import Button from "./Button";
import { useState } from "react";

const ReserveTable = () => {
  const [formNumber, setformNumber] = useState(1);

  const nextForm = (event) => {
    event.preventDefault();
    setformNumber((formNumber) => formNumber + 1);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setformNumber((formNumber) => formNumber + 1);
  };

  return (
    <main id="reserve-table">
      <h1>Reserve a Table</h1>
      <section id="form-section">
        {formNumber === 1 && (
          <form id="first">
            <label htmlFor="res-date">
              Choose date <input type="date" id="res-date" />
            </label>
            <label htmlFor="res-time">
              Choose time
              <select id="res-time ">
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
              </select>
            </label>
            <label htmlFor="guests">
              Number of guests
              <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
              />
            </label>
            <label htmlFor="occasion">
              Occasion
              <select id="occasion">
                <option>Select</option>
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
            </label>
            <label htmlFor="seating">
              Seating option
              <select id="seating">
                <option>Indoors</option>
                <option>Outdoors</option>
              </select>
            </label>
            <Button onClick={nextForm}>Next</Button>
          </form>
        )}
        {formNumber === 2 && (
          <form id="second">
            <label htmlFor="firstName">
              First Name <input type="text" id="firstName" />
            </label>
            <label htmlFor="lastName">
              Last Name <input type="text" id="lastName" />
            </label>
            <label htmlFor="mobileNumber">
              Mobile Number <input type="number" id="mobileNumber" />
            </label>
            <label htmlFor="email">
              Email <input type="text" id="email" />
            </label>
            <label htmlFor="special">
              Special request <textarea id="special" />
            </label>
            <Button onClick={submitHandler}>Book</Button>
          </form>
        )}
        {formNumber === 3 && (
          <article>
            <h1>Congratulations!</h1>
            <p>Your table has been booked.</p>
            <Button onClick={() => setformNumber(1)}>Book another</Button>
          </article>
        )}
      </section>
    </main>
  );
};

export default ReserveTable;

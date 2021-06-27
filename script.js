let bookedSeatsElement = document.querySelector(`.booking_seats`);
let remainingSeatsElement = document.querySelector(`.remaining_seats`);
let seats = document.querySelectorAll(`.box`);

let booked = 0;
let remaining = seats.length;

bookedSeatsElement.innerText = booked;
remainingSeatsElement.innerText = remaining;
seats.forEach((seat) => {
    seat.addEventListener(`click`, () => {
      seat.classList.toggle(`boxclicked`);
      seat.classList.contains(`boxclicked`) ? bookeSeats(1) : bookeSeats(-1);
    });
  });
  const bookeSeats = (s) => {
    booked += 1 * s;
    remaining -= 1 * s;
  
    bookedSeatsElement.innerText = booked;
    remainingSeatsElement.innerText = remaining;
  };
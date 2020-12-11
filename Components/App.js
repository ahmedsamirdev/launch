import "./App.module.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    (function () {
      const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

      let birthday = "Jan 20, 2021 00:00:00",
        countDown = new Date(birthday).getTime(),
        x = setInterval(function () {
          let now = new Date().getTime(),
            distance = countDown - now;

          (document.getElementById("days").innerText = Math.floor(
            distance / day
          )),
            (document.getElementById("hours").innerText = Math.floor(
              (distance % day) / hour
            )),
            (document.getElementById("minutes").innerText = Math.floor(
              (distance % hour) / minute
            )),
            (document.getElementById("seconds").innerText = Math.floor(
              (distance % minute) / second
            ));

          //do something later when date is reached
          if (distance < 0) {
            let headline = document.getElementById("headline"),
              countdown = document.getElementById("countdown"),
              content = document.getElementById("content");

            headline.innerText = "Here We Are .. ";

            clearInterval(x);
          }
          //seconds
        }, 0);
    })();
  }, []);
  return (
    <div className="container">
      <h3 id="headline">Countdown to the launch</h3>
      <div id="countdown">
        <ul>
          <li>
            <span id="days"></span>days
          </li>
          <li>
            <span id="hours"></span>Hours
          </li>
          <li>
            <span id="minutes"></span>Minutes
          </li>
          <li>
            <span id="seconds"></span>Seconds
          </li>
        </ul>
      </div>
      
    </div>
  );
}

export default App;

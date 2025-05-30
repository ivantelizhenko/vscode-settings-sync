function Calendar() {
  return (
    <div>
      {/*
* Import Cally web component from CDN
<script type="module" src="https://unpkg.com/cally"></script>

* Or install as a dependency:
npm i cally
* and import it in JS
import "cally";
*/}

      <button
        popoverTarget="cally-popover1"
        className="input input-border"
        id="cally1"
        style="anchorName:--cally1"
      >
        Pick a date
      </button>
      <div
        popover
        id="cally-popover1"
        className="dropdown bg-base-100 rounded-box shadow-lg"
        style="positionAnchor:--cally1"
      >
        <calendar-date
          class="cally"
          onchange={(document.getElementById('cally1').innerText = this.value)}
        >
          <svg
            aria-label="Previous"
            className="fill-current size-4"
            slot="previous"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M15.75 19.5 8.25 12l7.5-7.5"></path>
          </svg>
          <svg
            aria-label="Next"
            className="fill-current size-4"
            slot="next"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
          </svg>
          <calendar-month></calendar-month>
        </calendar-date>
      </div>
    </div>
  );
}

export default Calendar;

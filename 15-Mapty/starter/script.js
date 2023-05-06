'use strict';

console.log(55 / '888');
class Workout {
  date = new Date();
  id = (new Date().getTime() + '').slice(-10); //เอาค่าเสี้ยววินาที 10 ตัวสุดท้ายมาเป็นไอดี
  constructor(coords, distance, duration) {
    this.coords = coords; //[lat,lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }

  _setDescription() {
    // ตัวไว้สำหรับบอกวันเวลา
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.discription = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }
}
class Running extends Workout {
  //min/km
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calPace();
    this._setDescription();
  }
  calPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}
class Cycling extends Workout {
  //km/h
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calSpeed();
    this._setDescription();
  }
  calSpeed() {
    this.speed = this.distance / (this.duration / 60); //เนื่องจากต้องเปลี่ยนหน่วยเป็นชั่วโมง
    return this.speed;
  }
}

const run1 = new Running([32, 34], 50, 78, 29);
const cycling1 = new Cycling([30, 84], 40, 87, 289);
console.log(run1, cycling1);

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class App {
  #map;
  #mapEvent;
  #workouts = [];
  constructor() {
    this._getPosition(); // สิ่งที่จะทำงานทันทีเมื่อมีการ สร้าง obj
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField); // พี่อันนี้ไม่ต้องใส่ bind เพราะข้างในนั้นไม่ได้มีการอ้างอิงถึง this คีย์ Word
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
  }
  _getPosition() {
    navigator.geolocation.getCurrentPosition(
      this._loadMap.bind(this),
      function () {
        // ถ้าไม่ใส่ bind มันจะเป็นแค่การให้ฟังชั่นปกติซึ่งไม่ได้เรียก เม็ดตอดจริงไม่มีคีย์ Word this
        alert('could not get you position');
      }
    );
  }
  _loadMap(position) {
    // เป็นฟังชั่นแบบสอบถามโดยค่าแรกจะเป็นสิ่งที่กระทำหากยอมรับและค่าที่สองมันเป็นสิ่งที่จะทำหักไม่ยอมรับ
    const { latitude, longitude } = position.coords; //distuceting
    //   const { longitude } = position.coords.longitude;
    console.log(`https://www.google.co.th/maps/@${latitude},${longitude}`);
    const coords = [latitude, longitude];
    this.#map = L.map('map').setView(coords, 16);

    console.log(this);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.fr/hot/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on('click', this._showFrom.bind(this));
  }
  _showFrom(mapE) {
    // เอาฟังก์ชั่นไปใส่ในนี้แล้วจะทำให้สามารถเข้าถึง mapEvent ได้
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus(); // ทำให้เคอร์เซอร์ไปอยู่ในช่องinputนั้น
  }
  _toggleElevationField() {
    // เปลี่ยนการกรอกข้อมูลตามประเภท
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    e.preventDefault();
    //get date form form
    const validInput = (...inputs) => inputs.every(inp => Number.isFinite(inp)); // เข้าไปบนทุกตัวข้างในว่าเป็นตัวเลขหรือไม่ เทียบได้กลับ
    const allPositive = (...inputs) => inputs.every(inp => inp > 0); // เช็คว่ามากกว่าศูนย์หรือเปล่า
    // !Number.isFinite(distanc) ||
    // !Number.isFinite(duration) ||
    // !Number.isFinite(cadence)
    const type = inputType.value;
    const distance = +inputDistance.value; //+ ต้องเป็นตัวเลข
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    //If workout running,create running object
    if (type === 'running') {
      // ที่ไม่ใช้ else เพราะถ้าเขียนในรูปแบบนี้จะดูง่ายกว่า
      const cadence = +inputCadence.value;
      if (
        !validInput(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      ) {
        return alert('Input have to be positive number');
      }
      workout = new Running([lat, lng], distance, duration, cadence);
      console.log(workout);
    }

    //if workout cycling,create cycling object
    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      if (
        !validInput(distance, duration, elevation) ||
        !allPositive(distance, duration)
      ) {
        return alert('Input have to be positive number');
      }
      workout = new Cycling([lat, lng], distance, duration, elevation);
      console.log(workout);
    }

    //add new object to workouts array
    this.#workouts.push(workout);

    //render workout on map as marker
    this._renderWorkoutMarker(workout); //renderWorkoutMarker ถือว่าเป็น medthod อยู่แล้วเพราะใช้ this จึงไม่ต้องใช้ bind คืออ้างอิง
    this._renderWorkout(workout);
    //hide form + clear input fields

    this._hidenform();

    // console.log(this.#mapEvent);

    // console.log(lat);
  }
  _hidenform() {
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';
    form.style.display = 'none'; // ที่ทำแบบนี้เพื่อให้เปรียบเสมือนการแทนที่ด้วยกิจกรรมทันทีไม่ต้องรออนิเมชั่นจาก hidden
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000); // ไว้สำหรับเปลี่ยนให้กลับเป็นเหมือนเดิม
  }
  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidtg: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.discription}`
      )
      .openPopup();
  }
  _renderWorkout(workout) {
    console.log('hh');
    // ตารางเมนูด้านซ้าย
    let html = `
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
    <h2 class="workout__title">${workout.discription}</h2>
    <div class="workout__details">
      <span class="workout__icon">${
        workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
      }</span>
      <span class="workout__value">${workout.distance}</span>
      <span class="workout__unit">km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⏱</span>
      <span class="workout__value">${workout.duration}</span>
      <span class="workout__unit">min</span>
    </div>
`;

    if (workout.type === 'running') {
      console.log('run');
      html += `
      <div class="workout__details">
      <span class="workout__icon">⚡️</span>
      <span class="workout__value">${workout.pace.toFixed(1)}</span>
      <span class="workout__unit">min/km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">🦶🏼</span>
      <span class="workout__value">${workout.cadence}</span>
      <span class="workout__unit">spm</span>
    </div>
  </li>`;
    }

    if (workout.type === 'cycling') {
      html += `
      <div class="workout__details">
      <span class="workout__icon">⚡️</span>
      <span class="workout__value">${workout.speed.toFixed(1)}</span>
      <span class="workout__unit">km/h</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⛰</span>
      <span class="workout__value">${workout.elevationGain}</span>
      <span class="workout__unit">m</span>
    </div>
  </li>`;
    }
    form.insertAdjacentHTML('afterend', html);
  }

  _moveToPopup(e) {
    const workoutEl = e.target.closest('.workout');
    console.log(workoutEl);

    if (!workoutEl) return;

    const workout = this.#workouts.find(
      work => work.id === workoutEl.dataset.id //return ค่าที่่เจอ
    );
    console.log(workout);
  }
}

if (navigator.geolocation) {
  // เพื่อป้องกันการ Error จากการรองรับของเบาเซอร์จึงต้องมีการเช็คก่อนว่ามีคำสั่งนี้จริงหรือไม่
  const app = new App();
}

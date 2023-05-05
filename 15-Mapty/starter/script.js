'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class Workout {
  date = new Date();
  id = (new Date() + '').slice(-10); //เอาค่าเสี้ยววินาที 10 ตัวสุดท้ายมาเป็นไอดี
  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
  }
}
class Running extends Workout {
  constructor(coords, distance, duration) {}
}
class Cycling extends Workout {
  constructor(coords, distance, duration) {}
}

class App {
  #map;
  #mapEvent;
  constructor() {
    this._getPosition(); // สิ่งที่จะทำงานทันทีเมื่อมีการ สร้าง obj
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField); // พี่อันนี้ไม่ต้องใส่ bind เพราะข้างในนั้นไม่ได้มีการอ้างอิงถึง this คีย์ Word
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
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';
    console.log(this.#mapEvent);
    const { lat, lng } = mapEvent.latlng;
    console.log(lat);
    L.marker([lat, lng])
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidtg: 100,
          autoClose: false,
          closeOnClick: false,
          className: 'running-popup',
        })
      )
      .setPopupContent('Workout')
      .openPopup();
  }
}

if (navigator.geolocation) {
  // เพื่อป้องกันการ Error จากการรองรับของเบาเซอร์จึงต้องมีการเช็คก่อนว่ามีคำสั่งนี้จริงหรือไม่

  const app = new App();
}

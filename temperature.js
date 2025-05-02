class Room {
    constructor(name, currTemp, coldPreset, warmPreset, image, startTime, endTime) {
      this.name = name;
      this.currTemp = currTemp;
      this.coldPreset = coldPreset;
      this.warmPreset = warmPreset;
      this.image = image;
      this.airConditionerOn = false;
      this.startTime = startTime;
      this.endTime = endTime;
      this.manualOverride = false;
    }
  
    setCurrTemp(temp) {
      this.currTemp = temp;
    }
  
    setColdPreset(newCold) {
      this.coldPreset = newCold;
    }
  
    setWarmPreset(newWarm) {
      this.warmPreset = newWarm;
    }
  
    decreaseTemp() {
      if (this.currTemp > 10) this.currTemp--;
    }
  
    increaseTemp() {
      if (this.currTemp < 32) this.currTemp++;
    }
  
    toggleAircon() {
      this.airConditionerOn = !this.airConditionerOn;
      this.manualOverride = true;
    }
  }
  
  // Predefined rooms
  const rooms = [
    new Room("Living Room", 24, 18, 28, "living-room.jpg", "08:00", "22:00"),
    new Room("Bedroom", 22, 16, 26, "bedroom.jpg", "20:00", "06:00"),
  ];
  
  module.exports = { Room, rooms };
  
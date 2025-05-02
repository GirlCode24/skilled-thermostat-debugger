
// const { describe } = require('yargs');
const { Room } = require('../temperature.js');

describe('Room Class Methods', () => {
  test('setCurrTemp should update the current temperature', () => {
    const room = new Room("Living Room", 25, 18, 28, "image.jpg", "08:00", "22:00");
    room.setCurrTemp(21);
    expect(room.currTemp).toBe(21);
  }); 
});

test('setWarmPreset should update the warm preset temperature', () => {
    const room = new Room("BedRoom", 25, 18, 28, "image.jpg", "08:00", "22:00");
    room.setWarmPreset(30);
    expect(room.warmPreset).toBe(30);
    });

    test('setColdPreset should update the cold preset temperature', () => {
        const room = new Room("Beach House", 25, 18, 28, "image.jpg", "08:00", "22:00");
        room.setColdPreset(15);
        expect(room.coldPreset).toEqual(15);
    });

    test('decreaseTemp should decrease the current temperature', () => {
        const room = new Room("Kitchen", 25, 18, 28, "image.jpg", "08:00", "22:00");
        room.decreaseTemp();
        expect(room.currTemp).toEqual(24);
    });
describe ('Air Condition Control Functionality', () => {
    test('toggleAircon should toggle the air conditioner state', () => {
        const room = new Room("BathRoom", 25, 18, 28, "image.jpg", "08:00", "22:00");
        room.toggleAircon();
        expect(room.airConditionerOn).toBeTruthy;
        expect(room.manualOverride).toBeTruthy;
        room.toggleAircon();
        expect(room.airConditionerOn).toBeFalsy;
    });
});

describe('Temperature Limits', () => {
    test('decreaseTemp should not go below 10 degrees', () => {
        const room = new Room("Beach House", 10, 18, 28, "image.jpg", "08:00", "22:00");
        room.decreaseTemp();
        expect(room.currTemp).toStrictEqual(10);
    });
});

    test('increaseTemp should not go above 32 degrees', () => {
        const room = new Room("Balcony", 32, 18, 28, "image.jpg", "08:00", "22:00");
        room.increaseTemp();
        expect(room.currTemp).toStrictEqual(32);
    });


describe ('Add A Room Modal',()=>{
    test('Add a new room',() =>{
        const room = new Room("Game Room", 25, 18, 28, "image.jpg", "08:00", "22:00");
        expect(room.name).toContain("Game Room");
        expect(room.currTemp).toEqual(25);
        expect(room.coldPreset).toEqual(18);
        expect(room.warmPreset).toEqual(28);
        expect(room.image).toContain("image.jpg");
        expect(room.startTime).toStrictEqual("08:00");
        expect(room.endTime).toStrictEqual("22:00");
    });
});

describe('Temperature Images',() =>{
    test('Image should change based on cold temperature limit',()=>{
    const room = new Room("Game Room", 25, 18, 28, "image.jpg", "08:00", "22:00");
        room.setCurrTemp(25);
        expect(room.image).toMatch("image.jpg");
    });
});
test('should have valid temperature presets', () => {
    const room = new Room("Garage", 22, 15, 28);
    expect(room.coldPreset).toBeGreaterThanOrEqual(10);
    expect(room.coldPreset).toBeLessThanOrEqual(15);
    expect(room.warmPreset).toBeGreaterThanOrEqual(25);
    expect(room.warmPreset).toBeLessThanOrEqual(32);
    });
  
/*
    In Node.js, events are a core part of the architecture, and they allow asynchronous, event-driven programming. The EventEmitter class is used to create and handle custom events. When an event occurs, an event is emitted, and listeners (or handlers) attached to that event are executed. This makes Node.js ideal for building scalable, non-blocking applications.

    Key Concepts:
    1. EventEmitter: A class in Node.js that allows you to create and handle custom events. It is part of the events module.
    2. Event Loop: The underlying mechanism in Node.js that processes events and asynchronous operations.
    3. Emit: To trigger or fire an event.
    4. On: To listen for or subscribe to an event.
    5. Once: Listens to an event only once.

    Steps in Using Events in Node.js:
    1. Create an EventEmitter: Use the events module to create an event emitter.
    2. Listen to an Event: Use .on() or .once() to listen to a specific event.
    3. Emit an Event: Use .emit() to trigger an event.

*/

const EventEmitter = require("events");

// Create a new instance of EventEmitter
const eventEmitter = new EventEmitter();

// Create an event listener
eventEmitter.on("event", () => {
  console.log("An event has occurred!");
});

// Event with Arguments
eventEmitter.on("greeting", (name, age) => {
  console.log(`Hello My name is ${name} and age is ${age}`);
});
eventEmitter.on("greeting", (name, age) => {
  console.log(`Hello My name is ${name} and age is ${age}`);
});


// once --> it will execute only once
eventEmitter.once("onceEvent", () => {
    console.log("This will execute only once")
})

//multiple listeners
eventEmitter.on("multipleListner", () => {
    console.log("Multiple one")
})
eventEmitter.on("multipleListner", () => {
    console.log("Multiple two")
})


// Emit the event or trigger the event
eventEmitter.emit("event");
eventEmitter.emit("greeting", "kapil", 20);
eventEmitter.emit("greeting", "kapil", 20);
eventEmitter.emit("onceEvent") // execute only once
eventEmitter.emit("onceEvent") // no output
eventEmitter.emit("multipleListner") // Multiple Listner
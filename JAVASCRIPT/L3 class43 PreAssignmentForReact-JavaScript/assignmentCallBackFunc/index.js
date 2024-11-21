/*

promise, callback function, async await, settimeout and setinterval..


step 1 - dice server connect

step 2 - course explore

step 3 - course selection

step 4 - class enroll

*/

// callback function - 

// Step 1: Connect to the dice server
function connectToDiceServer(callback) {
    console.log("Connecting to Dice server...");
    setTimeout(() => {
        console.log("Connected to Dice server.");
        callback();
    }, 1000); // Simulating server connection delay
}

// Step 2: Explore courses
function exploreCourses(callback) {
    console.log("Exploring available courses...");
    setTimeout(() => {
        console.log("Courses explored.");
        callback();
    }, 1000); // Simulating course exploration delay
}

// Step 3: Select a course
function selectCourse(callback) {
    console.log("Selecting a course...");
    setTimeout(() => {
        console.log("Course selected.");
        callback();
    }, 1000); // Simulating course selection delay
}

// Step 4: Enroll in class
function enrollInClass(callback) {
    console.log("Enrolling in the class...");
    setTimeout(() => {
        console.log("Successfully enrolled in class.");
        callback();
    }, 1000); // Simulating class enrollment delay
}

// Final callback - Perform something after all steps are completed
function finalCallback() {
    console.log("All steps completed!");
}

// Starting the process with callbacks
connectToDiceServer(function() {
    exploreCourses(function() {
        selectCourse(function() {
            enrollInClass(finalCallback);
        });
    });
});

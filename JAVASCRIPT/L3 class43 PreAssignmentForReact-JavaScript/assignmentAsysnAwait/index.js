

/*



step 1 - dice server connect

step 2 - course explore

step 3 - course selection

step 4 - class enroll

*/

// async await

// Simulate async operations for each step
async function connectToDiceServer() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 1: Connected to the dice server.");
            resolve("Connected to dice server");
        }, 1000); // Simulate a delay of 1 second
    });
}

async function exploreCourses() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 2: Exploring available courses.");
            resolve("Courses explored");
        }, 1000); // Simulate a delay of 1 second
    });
}

async function selectCourse() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 3: Selected a course.");
            resolve("Course selected");
        }, 1000); // Simulate a delay of 1 second
    });
}

async function enrollClass() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 4: Enrolled in the class.");
            resolve("Class enrolled");
        }, 1000); // Simulate a delay of 1 second
    });
}

// Main async function that runs all steps
async function startProcess() {
    try {
        await connectToDiceServer();
        await exploreCourses();
        await selectCourse();
        await enrollClass();
        console.log("Process complete: Enrollment successful!");
    } catch (error) {
        console.error("Error during the process:", error);
    }
}

// Start the process
startProcess();

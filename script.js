// // JavaScript code for accessing webcam stream and counting people
const videoElement = document.querySelector('.stream');
const startStreamBtn = document.getElementById('startStreamBtn');
const stopStreamBtn = document.getElementById('stopStreamBtn');
const peopleCountElement = document.getElementById('peopleCount');

// Function to start webcam stream
const startWebcamStream = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        videoElement.srcObject = stream;

        // Set interval to update people count every second
        const intervalId = setInterval(() => {
            // Dummy code to simulate people count
            const randomCount = Math.floor(Math.random() * 10) + 1;
            peopleCountElement.textContent = randomCount;
        }, 1000);

        // Store interval ID for stopping later
        videoElement.dataset.intervalId = intervalId;
    })
    .catch(error => {
        console.error('Error accessing webcam:', error);
    });
};

// Function to stop webcam stream
const stopWebcamStream = () => {
    const stream = videoElement.srcObject;
    const tracks = stream.getTracks();

    tracks.forEach(track => {
        track.stop();
    });

    videoElement.srcObject = null;

    // Clear interval for updating people count
    clearInterval(videoElement.dataset.intervalId);
};

// Event listeners for start/stop stream buttons
startStreamBtn.addEventListener('click', startWebcamStream);
stopStreamBtn.addEventListener('click', stopWebcamStream);
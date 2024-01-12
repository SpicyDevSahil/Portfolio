
  let backgroundImages = [
    'https://wallpapercave.com/wp/wp8953919.gif',
    'https://wallpapercave.com/wp/wp2761928.gif',
    'https://i.pinimg.com/originals/14/d2/09/14d20919b5d877d3942428df52c72ea3.gif'
  ];

  function changeBackground() {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    document.body.style.backgroundImage = `url('${backgroundImages[randomIndex]}')`;
  }

  window.addEventListener('devicemotion', (event) => {
    const acceleration = event.accelerationIncludingGravity;
    const accelerationThreshold = 15;

    if (
      Math.abs(acceleration.x) > accelerationThreshold ||
      Math.abs(acceleration.y) > accelerationThreshold ||
      Math.abs(acceleration.z) > accelerationThreshold
    ) {
      changeBackground();
    }
  });




function updateTime() {
  const currentTimeElement = document.getElementById('currentTime');
  const now = new Date();
  let hours = now.getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12; // Convert to 12-hour format
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  currentTimeElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
}

setInterval(updateTime, 1000);

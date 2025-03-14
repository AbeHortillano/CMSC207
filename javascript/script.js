
document.addEventListener("DOMContentLoaded", function () {
    const musicButton = document.getElementById("play-pause-bgmusic");
    const music = document.getElementById("background-music");

    musicButton.addEventListener("click", function () {
        if (music.paused) {
            music.play();
            musicButton.textContent = "Pause Music";
        } else {
            music.pause();
            musicButton.textContent = "Play Music";
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("change-bgimage");

    // Array of wallpaper images
    const wallpapers = [
        "images/bg-image1.jpg",
        "images/bg-image2.jpg",
        "images/bg-image3.jpg"
    ];

    let currentWallpaperIndex = 0;

    button.addEventListener("click", function () {
        currentWallpaperIndex = (currentWallpaperIndex + 1) % wallpapers.length; // Cycle through images
        document.body.style.backgroundImage = `url('${wallpapers[currentWallpaperIndex]}')`;
    });
});

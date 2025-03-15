
document.getElementById("play-pause-bgmusic2").addEventListener("click", function () {
    const music = document.getElementById("fave-music2");
    const buttonImage2 = document.getElementById("btn-music-img2");

    if (music.paused) {
		music.play();
		buttonImage2.src = "images/pause-button.png";
    } else {
        music.pause();
		buttonImage2.src = "images/play-button-icon.png";
    }
	
	// Song plays again when it ends
	music.addEventListener("ended", function () {
    music.currentTime = 0; 
    music.play();
});

});

document.getElementById("play-pause-bgmusic1").addEventListener("click", function () {
    const music = document.getElementById("fave-music1");
    const buttonImage1 = document.getElementById("btn-music-img1");

    if (music.paused) {
		music.play();
		buttonImage1.src = "images/pause-button.png";
    } else {
        music.pause();
		buttonImage1.src = "images/play-button-icon.png";
    }
	
});

document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("change-bgimage");

    const wallpapers = [
        "images/bg-image1.jpg",
        "images/bg-image2.jpg",
        "images/bg-image3.jpg"
    ];

    let currentWallpaperIndex = 0;

    button.addEventListener("click", function () {
        currentWallpaperIndex = (currentWallpaperIndex + 1) % wallpapers.length;
        document.body.style.backgroundImage = `url('${wallpapers[currentWallpaperIndex]}')`;
    });
});



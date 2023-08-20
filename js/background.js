const bgs = ["1.mp4", "2.mp4", "3.mp4", "4.mp4", "5.mp4", "6.mp4"];

const chosenBgs = bgs[Math.floor(Math.random() * bgs.length)];

const bgVideo = document.querySelector(".mainBg");

bgVideo.src = `src/${chosenBgs}`;

document.body.appendChild(bgVideo);

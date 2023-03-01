var $=jQuery.noConflict();jQuery(function($){
$(".video").each(function(){
$(".volume-button").click(function mute(){
	$(".volume-button").toggleClass('fa-volume-mute').toggleClass('fa-volume-up');
	$("video").prop('muted',!$("video").prop('muted'));});});});
function refresh(){
var count = Math.floor(Math.random() * videoArray.length);
document.getElementsByTagName('source')[0].src = "./videos/" + videoArray[count];video.load();}
var videoArray = ["Blake Basic  BAD INFLUENCE ft Yamakazi.mp4","UNDAGROUND ENEMY.mp4","GHOSTEMANE  Pouya  Stick Out.mp4","PLAYBOI CARTI  LET EM IN.mp4", "6HOST I HOPE YOU CAVE.mp4", "jpn amend.mp4"];

function pauseplay() { 
    if(video.paused)
    	video.play();else video.pause();
}

document.addEventListener('DOMContentLoaded', function() {
	// отслеживаем активность вкладки браузера
	document.addEventListener('visibilitychange', function() {
		if (document.hidden) { // ставим видео на паузу
			video.pause();
		} else { // продолжаем воспроизведение
			video.play();
		}
	});
});

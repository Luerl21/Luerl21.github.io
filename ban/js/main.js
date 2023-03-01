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
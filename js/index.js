$(document).ready(function(){

	let startCount = 5;
	let startLikeDislikeLabel = 2;

	function swipeFun(htmlDiv, isRight, clearTimeoutParam){
		clearTimout(clearTimeoutParam);
		swipeEffects(htmlDiv, isRight);
		setImgText(isRight);
		prinderNamespace.count++;
		switcheroo("buddy");
	}

	let swipeEffects = function(htmlDiv, isRight) {
		addTypeWriterEffect();

		let rotateClass = isRight ? 'rotate-right' : 'rotate-left';
		let daNu = isRight ? 'OK' : 'Escrocherie';
		let likeDis = isRight ? 'like' : 'dislike';

		htmlDiv.addClass(rotateClass).delay(700).fadeOut(1);
		$('.buddy').find('.status').remove();
		if(prinderNamespace.count > startCount || prinderNamespace.count === 2 || prinderNamespace.count === 3){
			htmlDiv.append('<div class="status note ' + likeDis + '">' + daNu + '</div>');
		}

		if ( htmlDiv.is(':last-child') ) {
			$('.buddy:nth-child(1)').removeClass('rotate-left rotate-right').fadeIn(300);
		} else {
			htmlDiv.next().removeClass('rotate-left rotate-right').fadeIn(400);
		}
	}
	prinderNamespace.timeIsUp = function () {
		$(".buddy.isHidden > .text").html(questionsLoose2.text);
		$(".buddy.isHidden > .img").css('background-image', 'url(' + questionsLoose2.img + ')');

		swipeEffects($(".buddy.isVisible"), null);
		switcheroo("buddy");
		prinderNamespace.count = 3;
	};

	function setImgText(isRight) {

		let gameStarted = prinderNamespace.count >= startCount;
		let text;
		let img;

		if (gameStarted) {
			if (prinderNamespace.count >= questions.length) {
				// win
				text = questionsWin.text;
				img = questionsWin.img;
				$(".buddy.isHidden > .text").html(text);
				$(".buddy.isHidden > .img").css('background-image', 'url(' + img + ')');
				prinderNamespace.count = 3;
				return;
			} else if (isRight === questions[prinderNamespace.count - 1].isCon){
				// loose
				if (isRight) {
					text = questionsLoose0.text;
					img = questionsLoose0.img;
				} else {
					text = questionsLoose1.text;
					img = questionsLoose1.img;
				}

				$(".buddy.isHidden > .text").html(text);
				$(".buddy.isHidden > .img").css('background-image', 'url(' + img + ')');
				prinderNamespace.count = 3;
				return;
			}
			// continue
			startTimerCountdown();
		}
		// continue
		text = questions[prinderNamespace.count].text;
		img = questions[prinderNamespace.count].img;
		$(".buddy.isHidden > .text").html(text);
		$(".buddy.isHidden > .img").css('background-image', 'url(' + img + ')');
	}


	// Swipe
	let buddy = $(".buddy");
	buddy.on("swiperight", function(){
		swipeFun($(this), true, true);
	}); 
	buddy.on("swipeleft", function(){
		swipeFun($(this), false, true);
	});

	// Stop scheduled stuff
	let timeouts = [];
	let skipFlag = false;
	function clearTimout(isClearTimout) {
		onTimesUp();
		if(isClearTimout){
			for (let i = 0; i < timeouts.length; i++) {
				clearTimeout(timeouts[i]);
			}
			timeouts = [];

			if(prinderNamespace.count < startCount && prinderNamespace.count > 0 && !skipFlag) {
				prinderNamespace.count = startCount - 1;
				skipFlag = true;
			}
		}

	}

	function startTimerCountdown() {
		addTimer(".buddy.isHidden > .timer");
		startTimer();
		removeTypeWriterEffect();
	}

	function addTypeWriterEffect() {
		if(prinderNamespace.count < startCount) {
			$(".centered").addClass("type");
		}
	}

	function removeTypeWriterEffect() {
		$(".type").removeClass("type");
	}

	function switcheroo(el){
		let visible = $("." + el + ".isVisible");
		let hidden = $("." + el + ".isHidden");

		visible.removeClass("isVisible");
		visible.addClass("isHidden");

		hidden.removeClass("isHidden");
		hidden.addClass("isVisible");
	}

	// Tutorial
	function setTimoutSwipeTutorial(isRight, timeout){
		let id = setTimeout(function(){
			swipeFun($(".buddy.isVisible"), isRight, false);
		}, timeout);
		timeouts.push(id);
	}

	let c = 3000;
	setTimoutSwipeTutorial(true, 2000);
	setTimoutSwipeTutorial(true, 5000 * 2 - c);
	setTimoutSwipeTutorial(false, 5000 * 3 - c);
	setTimoutSwipeTutorial(true, 5000 * 4 - c);
	setTimoutSwipeTutorial(false, 5000 * 5 - c);
});



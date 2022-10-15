const para = [
  `The quick brown fox jumps over the lazy dog.`,
  `Moon over Parma, bring my love to me tonight. Guide her to Cleveland, underneath your silvery light. We're going  bowlin' so don't lose her in Solon. Moon over Parma, tonight! Here's how it is: Earth got used up, so we terraformed a whole new galaxy of Earths, some rich and flush with the new technologies, some not so much. Central Planets, they formed the Alliance, waged war to bring everyone under their rule; a few idiots tried to fight it, among them myself. I'm Malcolm Reynolds, captain of Serenity. Got a good crew: fighters, pilots, mechanics. We even picked up a preacher and a bona fide companion. There's a doctor, too, who took his genius sister out of some Alliance camp, so they're keeping a low profile. You got a job, we can do it, don't much care what it is. Making your way in the world today takes everything you've got. Taking a break from all your worries sure would help a lot. Wouldn't you like to get away? Sometimes you want to go where everybody knows your name, and they're always glad you came. You wanna be where you can see, our troubles are all the same. You want to be where everybody knows your name. You want to go where people know, people are all the same, you want to go where everybody knows your name.`,
  `Once upon a time there were three little girls who went to the police academy. Two in Los Angeles. The other in San Francisco. And they were each assigned very hazardous duties. But I took them away from all that. And now they work for me. My name is Charlie. I bet we been together for a million years, And I bet we'll be together for a million more. Oh, It's like I started breathing on the night we kissed, and I can't remember what I ever did before. What would we do baby, without us? What would we do baby, without us? And there ain't no nothing we can't love each other through. What would we do baby, without us? Sha la la la. Your tread must be light and sure, as though your path were upon rice paper. It is said, a Shaolin priest can walk through walls. Looked for, he can not be seen. Listened for, he can not be heard. Touched, can not be felt. This rice paper is the test. Fragile as the wings of the dragonfly, clinging as the cocoon of the silk worm. When you can walk its length and leave no trace. You will have learned.`,
  `The world looks mighty good to me, cause Tootsie Rolls are all I see. Whatever it is I think I see, becomes a Tootsie Roll to me! Tootsie Roll how I love your chocolatey chew, Tootsie Roll I think I'm in love with you. Whatever it is I think I see, becomes a Tootsie Roll to me! Weebles wobble but they don't fall down. Weebles are around, don't fall down! Weeble wobble, Weeble wobble, Weeble wobble, Weeble wobble, Weeble wobble, Weeble wobble. Don't fall down! Hot dogs, Armour hot dogs. What kind of kids eat Armour hot dogs? Fat kids, skinny kids, kids who climb on rocks. Tough kids, sissy kids, even kids with chicken pox love hot dogs, Armour hot dogs... The dogs kids love to bite!`,
  `Look for the Union Label when you are buying a coat, dress, or blouse. Remember, somewhere our union's sewing, our wages going to feed the kids, and run the house. We work hard, but who's complaining. Thanks to the I.L.G. we're paying our way. So always look for the Union Label. It means we're able to make it in the U.S.A.! You unlock this door with the key of imagination. Beyond it is another dimension: a dimension of sound, a dimension of sight, a dimension of mind. You're moving into a land of both shadow and substance, of things and ideas; you've just crossed over into the Twilight Zone. Well we're movin' on up, to the east side. To a deluxe apartment in the sky. Movin' on up, To the east side. We finally got a piece of the pie. Fish don't fry in the kitchen, beans don't burn on the grill. Took a whole lotta tryin' just to get up that hill. Now we're up in the big leagues, gettin' our turn at bat. As long as we live, it's you and me baby, There ain't nothin' wrong with that. Well we're movin' on up, to the east side. To a deluxe apartment in the sky. Movin' on up, to the east side. We finally got a piece of the pie.`,
  `Wanted to get myself a new cell phone so I could hear myself as a ringtone. Who knew the store would go and check my credit score? Now all they let me have is this dinosaur! Hello hello hello, can anybody hear me? I know I know I know, I should have gone to Free Credit Report dot com! That's where I should have gone, could have got my knowledge on. We got a right to pick a little fight, Bonanza! If anyone fights anyone of us, he's gotta fight with me! We're not a one to saddle up and run, Bonanza! Anyone of us who starts a little fuss knows he can count on me! One for four, four for one, this we guarantee. We got a right to pick a little fight, Bonanza! If anyone fights anyone of us he's gotta fight with me! Weebles wobble but they don't fall down. Weebles are around, don't fall down! Weeble wobble, Weeble wobble, Weeble wobble, Weeble wobble, Weeble wobble, Weeble wobble. Don't fall down!`,
  `Dance your cares away, worry's for another day. Let the music play, down at Fraggle Rock! Work you cares away, dancing's for another day. Let the Fraggles play, We're Gobo, Mokey, Wembley, Boober, Red! Dance your cares away, worry's for another day. Let the music play, down at Fraggle Rock! Down at Fraggle Rock! Down at Fraggle Rock. his is it, this is it. This is life, the one you get, so go and have a ball. This is it, this is it. Straight ahead, and rest assured you can't be sure at all. So while you're here enjoy the view, keep on doing what you do, so hold on tight we'll muddle through one day at a time, one day at a time. So up on your feet, up on your feet - somewhere there's music playing. Don't you worry none, we'll just take it like it comes, one day at a time, one day at a time. Well we're movin' on up, to the east side. To a deluxe apartment in the sky. Movin' on up, To the east side. We finally got a piece of the pie. Fish don't fry in the kitchen, beans don't burn on the grill. Took a whole lotta tryin' just to get up that hill. Now we're up in the big leagues, gettin' our turn at bat. As long as we live, it's you and me baby, There ain't nothin' wrong with that. Well we're movin' on up, to the east side. To a deluxe apartment in the sky. Movin' on up, to the east side. We finally got a piece of the pie.`,
  `Man lives in the sunlit world of what he believes to be reality. But, there is, unseen by most, an underworld, a place that is just as real, but not as brightly lit... a darkside. The darkside is always there, waiting for us to enter, waiting to enter us. So until next time, try to enjoy the daylight. Butterfly in the sky, I can go twice as high. Take a look, it's in a book - Reading Rainbow. I can go anywhere! Friends to know and ways to grow - Reading Rainbow. I can be anything! Take a look, it's in a book - Reading Rainbow. Reading Rainbow, Reading Rainbow, Reading Rainbow, Reading Rainbow! Come and knock on our door. We've been waiting for you. Where the kisses are hers and hers and his, three's company, too! Come and dance on our floor. Take a step that is new. We've a lovable space that needs your face, three's company, too! You'll see that life is a ball again and laughter is callin' for you. Down at our rendezvous, three's company, too!`,
  `Tell me why, I love you like I do. Tell me who, could stop my heart as much as you. Let's take each other's hand, as we jump into the final frontier. Mad about you baby, yeah, I'm mad about you. Whoo hoo hoo. Extraordinary crimes against the people and the state had to be avenged by agents extraordinary. Two such people are John Steed, top professional; and his partner, Emma Peel, talented amateur... otherwise known as The Avengers. I am Duncan Macleod, born 400 years ago in the Highlands of Scotland. I am Immortal, and I am not lone. For centuries, we have waited for the time of the Gathering when the stroke of a sword and the fall of a head ill release the power of the Quickening. In the end, there can be only one.`,
  `He was once a little green slab of clay. Gumby! You should see what Gumby can do today. Gumby! He can walk into any book, with his pony pal Pokey, too. If you've got a heart then Gumby's a part of you. There once was a story about a man who could turn invisible. I thought it was only a story... until it happened to me. Ok, so here's how it works: there's this stuff called Quicksilver that can bend light. Some scientist made it into a synthetic gland, and that's where I came in. See, I was facing life in prison and they were looking for a human experiment. So, we made a deal. They put the gland in my brain; I walk free. The operation was a success... but that's where everything started to go wrong. Wally Gator is a swinging alligator in the swamp. He's the greatest percolator when he really starts to romp. There has never been a greater operator in the swamp. See ya later, Wally Gator.`,
  `Lady Godiva was a freedom rider, she didn't care if the whole world looked. Joan of Arc with the Lord to guide her, she was a sister who really cooked. Isadora was the first bra burner, ain't you glad she showed up. And when the country was falling apart Betsy Ross got it all sewed up. And then there's Maude. That old compromisin', enterprisin', anything but tranquilizing, right-on Maude. Wally Gator is a swinging alligator in the swamp. He's the greatest percolator when he really starts to romp. There has never been a greater operator in the swamp. See ya later, Wally Gator. We never thought of findin' a place where we belong. Don't have to stand alone, we'll never let you fall. Don't need permission to decide what you believe. You gotta learn something when we meet you after school. I said jump, down on Jump Street. I said jump, down on Jump Street. Your friends will be there when your back is to the wall. You'll find you'll need us cause there's no one else to call. When it was hopeless a decision is what you need. You'd better be ready cause' your runnin' outta time. Say jump, 21 Jump, Street.`,
]


let dummyPara = document.querySelector('.dummy-para .textarea')
let typingArea = document.querySelector('.typing-area textarea')
let totalChar = document.getElementById('totalChar')
let totalTypedChar = document.getElementById('totalTypedChar')
let totalCorrectTypedChar = document.getElementById('totalCorrectTypedChar')
let totalIncorrectTypedChar = document.getElementById('totalIncorrectTypedChar')
let mistakes = document.getElementById('mistakes')
let timeSecLeft = document.getElementById('timeSecLeft');
let timeMinLeft = document.getElementById('timeMinLeft');
let tryAgain = document.getElementById('tryAgain');
let start = document.getElementById('start');
let pause = document.getElementById('pause');
let showInfo = document.querySelector('.blankSpace button')
let moreInfo = showInfo.previousElementSibling;
let showMoreScoresBtn = document.querySelector('.show-score-btn')
let showScoreBoard = showMoreScoresBtn.previousElementSibling;

let charIndex = 0;

pause.style.display = "none"

// function to random paragraph
function randomPara() {
  let randomIndex = Math.floor(Math.random() * para.length);
  para[randomIndex].split("").forEach(span => {
    let spanTag = `<span>${span}</span>`
    dummyPara.innerHTML += spanTag;
  })
  totalChar.innerText = para[randomIndex].split("").length;

  // show in thank you massage
  document.querySelector('.tc span').innerText = para[randomIndex].split("").length;

  // Focus typing area when keydown on document or click on dummyPara
  document.addEventListener('keydown', () => typingArea.focus())
  dummyPara.addEventListener('click', () => typingArea.focus())
}

function totalTime() {
  let second = 0;
  let minute = 0;
  finishTime = setInterval(() => {
    second++;
    if (second <= 9) {
      second = "0" + second;
    }
    timeSecLeft.innerText = `${second}`;
    document.querySelector('.mySecond').innerText = `${second}`;
    if (second == 60) {
      second = 00;
      minute++;
      if (minute <= 9) {
        minute = "0" + minute;
      }
      timeMinLeft.innerText = `${minute}`
      document.querySelector('.myMinute').innerText = `${minute}`;
    }
  }, 1000)
}

function initialTyping(key) {
  // console.log(key)
  startTime()
  let characters = dummyPara.querySelectorAll('span')
  let typeChar = typingArea.value.split('')[charIndex];
  if (key.inputType != "deleteContentBackward") {
    if (characters[charIndex].innerText == typeChar) {
      characters[charIndex].classList.add('correct')
    } else {
      characters[charIndex].classList.add('incorrect')
      window.navigator.vibrate(100)
    }
    totalTypedChar.innerText = typingArea.value.length;
    charIndex++;
  } else {
    typingArea.setAttribute("readonly", "readonly")
    clearInterval(finishTime)
    popup()
    moreInfo.classList.add('showMoreInfo')
    // typingArea.fo
    start.style.display = "none"
    pause.style.display = "none"
    console.log("you press backspace")
  }

  // show in more option
  let correctChar = document.querySelectorAll('.correct')
  totalCorrectTypedChar.innerText = correctChar.length;
  let incorrectChar = document.querySelectorAll('.incorrect')
  totalIncorrectTypedChar.innerText = incorrectChar.length;
  mistakes.innerText = incorrectChar.length;

  // show in thank you massage
  document.querySelector('.ttc span').innerText = typingArea.value.length;
  document.querySelector('.tctc span').innerText = correctChar.length;
  document.querySelector('.titc span').innerText = incorrectChar.length;



  if (typingArea.value.split('').length == 1) {
    totalTime()
  }
  else if (typingArea.value.split('').length == totalChar.innerText) {
    typingArea.setAttribute("readonly", "readonly")
    clearInterval(finishTime)
    popup()
    moreInfo.classList.add('showMoreInfo')
    // typingArea.fo
    start.style.display = "none"
    pause.style.display = "none"
  }
  if (timeSecLeft == "0" && timeMinLeft == "0") {
    document.getElementById('cpm').innerText = 00;
  } else {
    let cpm = Math.floor(typingArea.value.split('').length / (+(timeSecLeft.innerText / 60) + +timeMinLeft.innerText).toFixed(2));
    document.getElementById('cpm').innerText = cpm;
    cpmInPer = Math.floor((cpm / 600) * 100);
    //  console.log(cpm, cpmInPer)

    /// for cpm
    let cpmShow = document.querySelector('.para-meter-cpm');
    cpmShow.style.width = `${cpmInPer}%`
    cpmShowInPer = document.getElementById('score-result-cpm')
    cpmShowInPer.innerText = `${cpmInPer}%`
    cpmShow.querySelector('span').innerText = cpm;

    // show cpm in thank you message
    document.querySelector('.cpm span').innerText = cpm;

    if (cpmInPer >= 0 && cpmInPer <= 30) {
      cpmShow.style.backgroundColor = "#ffc0cb"
      cpmShow.setAttribute("title", "This is below average. Not Good. Keep practising")
    } else if (cpmInPer > 30 && cpmInPer <= 60) {
      cpmShow.style.backgroundColor = "rgb(245, 245, 116)"
      cpmShow.setAttribute("title", "This is average. Even not Good. Keep practising")
    } else {
      cpmShow.style.backgroundColor = "rgb(179, 252, 179"
      cpmShow.setAttribute("title", "This is above average. Good. But don't stop practising")
    }

    ///for accuracy
    let accInPer = Math.floor((totalCorrectTypedChar.innerText / totalTypedChar.innerText) * 100);
    //  console.log(accInPer)
    let accShow = document.querySelector('.para-meter-acc')
    accShow.style.width = `${accInPer}%`
    let accShowInPer = document.getElementById('score-result-acc')
    accShowInPer.innerText = `${accInPer}%`

    // show acc in thanks message
    document.querySelector('.acc span').innerText = `${accInPer}%`;

    if (accInPer >= 0 && accInPer <= 30) {
      accShow.style.backgroundColor = "#ffc0cb"
    } else if (accInPer > 30 && accInPer <= 60) {
      accShow.style.backgroundColor = "rgb(245, 245, 116)"
    } else {
      accShow.style.backgroundColor = "rgb(179, 252, 179"
    }
  }
}

tryAgain.addEventListener('click', refresh)
document.getElementById('playAgain').addEventListener('click', refresh)
document.getElementById('playAgain2').addEventListener('click', refresh)


function refresh() {
  window.location.reload("Refresh")
}

function startTime() {
  typingArea.focus();
  // totalTime()
  start.style.display = "none"
  pause.style.display = "initial"
}
function pauseTime() {
  clearInterval(finishTime)
  typingArea.setAttribute('readonly', 'readonly')
  moreInfo.classList.add('showMoreInfo')
  start.style.display = "none"
  pause.style.display = "none"
}

start.addEventListener('click', startTime)
pause.addEventListener('click', pauseTime)



randomPara()
typingArea.addEventListener('input', initialTyping)

showInfo.addEventListener('click', () => {
  moreInfo.classList.toggle('showMoreInfo')
});

function showMoreScores() {
  // console.log(showScoreBoard)
  showScoreBoard.classList.toggle('show-more-scores')
}

showMoreScoresBtn.addEventListener('click', showMoreScores)

// Show popup
let popupBtn = document.getElementById('popupBtn')
popupBtn.addEventListener('click', popup)
// hide popup
let closePopup = document.getElementById('closePopup')
closePopup.addEventListener('click', hidePopup)
/// function for popup
function popup() {
  let popupContainer = document.querySelector('.popup-container')
  popupContainer.classList.add('showPopup')
  document.body.style.overflow = "hidden"
}
// function for hid popup
function hidePopup() {
  let popupContainer = document.querySelector('.popup-container')
  popupContainer.classList.remove('showPopup')
  document.body.style.overflow = "auto"
}

// addEventListener for show popup2
let thankYou = document.getElementById('thankYou')
thankYou.addEventListener('click', popup2)

// function show popup2
function popup2() {
  let popupContainer2 = document.querySelector('.popup2')
  popupContainer2.classList.add('showPopup2')
  let popupContainer = document.querySelector('.popup-container')
  // popupContainer.style.filter = "blur(5px)"
  popupContainer.querySelector('.popup').style.display = "none"
}

// close window
function exit(){
  window.opener = self;
  window.close()
}

// function for close rules container
let rulesContainer = document.querySelector('.rules-container')
console.log(!rulesContainer.classList.contains('close-rules-container'))
if(!rulesContainer.classList.contains('close-rules-container')){
  // rulesContainer.classList.add('close-rules-container')
  document.body.style.overflow = "hidden"
}else{
  // rulesContainer.classList.remove('close-rules-container')
  document.body.style.overflow = "auto"
}
function closeRulesContainer(){
  rulesContainer.classList.add('close-rules-container')
  document.body.style.overflow = "auto"
}

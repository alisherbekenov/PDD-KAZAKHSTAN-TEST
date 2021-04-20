let testResult = 0;


let questions = [
{
	'number' : '1',
  'userAnswer': '0',
	'correctAnswer': '1'
},
{
	'number' : '2',
  'userAnswer': '0',
	'correctAnswer': '2'
},
{
	'number' : '3',
  'userAnswer': '0',
	'correctAnswer': '2'
},
{
	'number' : '4',
  'userAnswer': '0',
	'correctAnswer': '1'
},
{
	'number' : '5',
  'userAnswer': '0',
	'correctAnswer': '2'
},
{
	'number' : '6',
  'userAnswer': '0',
	'correctAnswer': '2'
},
{
	'number' : '7',
  'userAnswer': '0',
	'correctAnswer': '2'
},
{
	'number' : '8',
  'userAnswer': '0',
	'correctAnswer': '2'
},
{
	'number' : '9',
  'userAnswer': '0',
	'correctAnswer': '2'
},
{
	'number' : '10',
  'userAnswer': '0',
	'correctAnswer': '1'
},
{
	'number' : '11',
  'userAnswer': '0',
	'correctAnswer': '3'
},
{
	'number' : '12',
  'userAnswer': '0',
	'correctAnswer': '4'
},
{
	'number' : '13',
  'userAnswer': '0',
	'correctAnswer': '3'
},
{
	'number' : '14',
  'userAnswer': '0',
	'correctAnswer': '2'
},
{
	'number' : '15',
  'userAnswer': '0',
	'correctAnswer': '1'
},
{
	'number' : '16',
  'userAnswer': '0',
	'correctAnswer': '1'
},
{
	'number' : '17',
  'userAnswer': '0',
	'correctAnswer': '2'
},
{
	'number' : '18',
  'userAnswer': '0',
	'correctAnswer': '2'
},
{
	'number' : '19',
  'userAnswer': '0',
	'correctAnswer': '2'
},
{
	'number' : '20',
  'userAnswer': '0',
	'correctAnswer': '1'
},
{
	'number' : '21',
  'userAnswer': '0',
	'correctAnswer': '2'
},
{
	'number' : '22',
  'userAnswer': '0',
	'correctAnswer': '1'
},
{
	'number' : '23',
  'userAnswer': '0',
	'correctAnswer': '1'
},
{
	'number' : '24',
  'userAnswer': '0',
	'correctAnswer': '3'
},
{
	'number' : '25',
  'userAnswer': '0',
	'correctAnswer': '1'
},
{
	'number' : '26',
  'userAnswer': '0',
	'correctAnswer': '3'
},
{
	'number' : '27',
  'userAnswer': '0',
	'correctAnswer': '1'
},
{
	'number' : '28',
  'userAnswer': '0',
	'correctAnswer': '3'
},
{
	'number' : '29',
  'userAnswer': '0',
	'correctAnswer': '3'
},
{
	'number' : '30',
  'userAnswer': '0',
	'correctAnswer': '3'
},
{
	'number' : '31',
  'userAnswer': '0',
	'correctAnswer': '3'
},
{
	'number' : '32',
  'userAnswer': '0',
	'correctAnswer': '2'
},
{
	'number' : '33',
  'userAnswer': '0',
	'correctAnswer': '3'
},
{
	'number' : '34',
  'userAnswer': '0',
	'correctAnswer': '3'
},
{
	'number' : '35',
  'userAnswer': '0',
	'correctAnswer': '1'
},
{
	'number' : '36',
  'userAnswer': '0',
	'correctAnswer': '2'
},
{
	'number' : '37',
  'userAnswer': '0',
	'correctAnswer': '3'
},
{
	'number' : '38',
  'userAnswer': '0',
	'correctAnswer': '3'
},
{
	'number' : '39',
  'userAnswer': '0',
	'correctAnswer': '2'
},
{
	'number' : '40',
  'userAnswer': '0',
	'correctAnswer': '4'
}
]


function questionCheck2( questionNumber, userAnswer ){
	let resultBox = document.querySelector( '.result-box[data-question="' + questionNumber + '"]' );
	for( forQuestion of questions ){
		if( forQuestion.number == questionNumber ){
			if( forQuestion.correctAnswer == userAnswer ){
				resultBox.style.backgroundColor = 'green';
				resultBox.style.color = 'white';
				testResult += 1;
			}
			else{
				resultBox.style.backgroundColor = 'red';
				resultBox.style.color = 'white';
			}
		}
	}
}
				
	
function resultDraw(){
	console.log( 'resultDraw' );
	let forResult = document.getElementById( 'for-result' );
	let html = '<p>Правильных ответов: ' + testResult + '</p>';
	forResult.innerHTML = html;
}


let buttonAnswers = document.querySelectorAll( '.button-answer' );
let boxB = document.querySelector( '.box-b' );


buttonAnswers.forEach( function ( forVal ) {
  forVal.addEventListener( 'click', function() {
    let dataQuestion = this.getAttribute( 'data-question' );
		let dataAnswer = this.getAttribute( 'data-answer' );
		this.style.backgroundColor = '#e8324f';
		this.style.color = 'white';
		//console.log( answers );
		questionCheck2( dataQuestion, dataAnswer );
		boxB.style.left = ( -700 * dataQuestion ) + 'px';
  });
});


let buttonResultDraw = document.querySelectorAll( '.button-result-draw' );

buttonResultDraw.forEach( function( forButton ){
	forButton.addEventListener( 'click', function(){
		resultDraw();
	})
})



// 

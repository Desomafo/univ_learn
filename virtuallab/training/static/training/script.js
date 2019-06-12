$('a.infoFor').click(function(){
	$('.text1').show();
	$('.text2').hide();
	$('.text3').hide();
});

$('a.infoWhile').click(function(){
	$('.text2').show();
	$('.text1').hide();
	$('.text3').hide();
});

$('a.infoDoWhile').click(function(){
	$('.text3').show();
	$('.text1').hide();
	$('.text2').hide();
});

$('.intro').click(function() {
	$('.intro-text').toggle();
});

$('.practice-button').click(function(){
    $('.practice-usage').toggle();
});

var open = true;
$('.block-button').click(function() {
	$('#block-test').toggle();
	if (open) {
		document.getElementById('t1').classList.add('visible');
		open = false;
	} else {
		document.getElementById('t1').classList.remove('visible');
		if (window.task == 1) {
			document.getElementById('t1').classList.add('visible');
		}
	}
});

$('.theory-button').click(function() {
	$('#theory').toggle();
});


function testJump(x){
    			var ml = ~~x.getAttribute('maxlength');
    			if(ml && x.value.length >= ml){
        			do{
            			x = x.nextSibling;
        			}
        			while(x && !(/text/.test(x.type)));
       			if(x && /text/.test(x.type)){
            		x.focus();
        		}
    			}
			}
			function answers(test) {
				if (document.test.q1.value == "for") {
					document.test.q1.style.borderColor="green";
				} else {
					document.test.q1.style.borderColor="red";
				}	
				if (document.test.q2.value == "1") {
					document.test.q2.style.borderColor="green";
				} else {
					document.test.q2.style.borderColor="red";
				}
				if (document.test.q3.value == "100") {
					document.test.q3.style.borderColor="green";
				} else {
					document.test.q3.style.borderColor="red";
				}	
				if (document.test.q4.value == "n") {
					document.test.q4.style.borderColor="green";
				} else {
					document.test.q4.style.borderColor="red";
				}	
				if (document.test.q5.value == "n") {
					document.test.q5.style.borderColor="green";
				} else {
					document.test.q5.style.borderColor="red";
				}
				if (document.test.q6.value == "0") {
					document.test.q6.style.borderColor="green";
				} else {
					document.test.q6.style.borderColor="red";
				}	
				if (document.test.q7.value == "++") {
					document.test.q7.style.borderColor="green";
				} else {
					document.test.q7.style.borderColor="red";
				}	
				if (document.test.q8.value == "count") {
					document.test.q8.style.borderColor="green";
				} else {
					document.test.q8.style.borderColor="red";
				}	
				if (document.test.q9.value == 'float'|| document.test.q9.value =='double') {
					document.test.q9.style.borderColor="green";
				} else {
					document.test.q9.style.borderColor="red";
				}	
				if (document.test.q10.value == "!=") {
					document.test.q10.style.borderColor="green";
				} else {
					document.test.q10.style.borderColor="red";
				}	
				if (document.test.q11.value == "!=") {
					document.test.q11.style.borderColor="green";
				} else {
					document.test.q11.style.borderColor="red";
				}	
				if (document.test.q12.value == "y") {
					document.test.q12.style.borderColor="green";
				} else {
					document.test.q12.style.borderColor="red";
				}	
				if (document.test.q13.value == "x") {
					document.test.q13.style.borderColor="green";
				} else {
					document.test.q13.style.borderColor="red";
				}	
				if (document.test.q14.value == "1") {
					document.test.q14.style.borderColor="green";
				} else {
					document.test.q14.style.borderColor="red";
				}	
				if (document.test.q15.value == "<<") {
					document.test.q15.style.borderColor="green";
				} else {
					document.test.q15.style.borderColor="red";
				}	
				if (document.test.q16.value == ">>") {
					document.test.q16.style.borderColor="green";
				} else {
					document.test.q16.style.borderColor="red";
				}	
				if (document.test.q17.value == "i<=n") {
					document.test.q17.style.borderColor="green";
				} else {
					document.test.q17.style.borderColor="red";
				}	
				if (document.test.q18.value == "<<") {
					document.test.q18.style.borderColor="green";
				} else {
					document.test.q18.style.borderColor="red";
				}	
				if (document.test.q19.value == "<<") {
					document.test.q19.style.borderColor="green";
				} else {
					document.test.q19.style.borderColor="red";
				}
				if (document.test.q20.value == "<<") {
					document.test.q20.style.borderColor="green";
				} else {
					document.test.q20.style.borderColor="red";
				}
				if (document.test.q21.value == "<<") {
					document.test.q21.style.borderColor="green";
				} else {
					document.test.q21.style.borderColor="red";
				}
				if (document.test.q22.value == "do") {
					document.test.q22.style.borderColor="green";
				} else {
					document.test.q22.style.borderColor="red";
				}
				if (document.test.q23.value == ">") {
					document.test.q23.style.borderColor="green";
				} else {
					document.test.q23.style.borderColor="red";
				}
				if (document.test.q24.value == "max=n;") {
					document.test.q24.style.borderColor="green";
				} else {
					document.test.q24.style.borderColor="red";
				}
				if (document.test.q25.value == "while") {
					document.test.q25.style.borderColor="green";
				} else {
					document.test.q25.style.borderColor="red";
				}
			}
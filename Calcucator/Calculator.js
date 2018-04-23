jQuery(document).ready(function($) {
	off();
	var all,w,q=0;
	//activate checkbox button
	document.getElementById('check').onclick = function(){
		if(document.getElementById('check').checked){
			on()
		}else{
			off()
		}
	}
	//function for enable calculator
	function on(){
		//enable all buttons and screen
		console.log('true');
		document.getElementById('1').disabled = false;
		document.getElementById('2').disabled = false;
		document.getElementById('3').disabled = false;
		document.getElementById('4').disabled = false;
		document.getElementById('5').disabled =	false;
		document.getElementById('6').disabled = false;
		document.getElementById('7').disabled = false;
		document.getElementById('8').disabled = false;
		document.getElementById('9').disabled = false;
		document.getElementById('0').disabled = false;
		document.getElementById('.').disabled = false;
		document.getElementById('/').disabled = false;
		document.getElementById('*').disabled = false;
		document.getElementById('-').disabled = false;
		document.getElementById('+').disabled = false;
		document.getElementById('ce').disabled = false;
		document.getElementById('root').disabled = false;
		document.getElementById('backspace').disabled = false;
		document.getElementById('=').disabled = false;
		document.getElementById('screen').style.cssText = 'background-color:lightgreen';
		//function for get numbers
		function consta(id){
			document.getElementById('out').innerHTML += id;
			}
			//get numbers when click on buttons
			document.getElementById('1').onclick = function(){
				consta(1);				
			}
			document.getElementById('2').onclick = function(){
				consta(2);				
			}
			document.getElementById('3').onclick = function(){
				consta(3);				
			}
			document.getElementById('4').onclick = function(){
				consta(4);				
			}
			document.getElementById('5').onclick = function(){
				consta(5);				
			}
			document.getElementById('6').onclick = function(){
				consta(6);				
			}
			document.getElementById('7').onclick = function(){
				consta(7);				
			}
			document.getElementById('8').onclick = function(){
				consta(8);				
			}
			document.getElementById('9').onclick = function(){
				consta(9);				
			}
			document.getElementById('0').onclick = function(){
				consta(0);				
			}
			document.getElementById('.').onclick = function(){
				consta('.');				
			}
			//use elements for calculations
			document.getElementById('+').onclick = function(){
				doit();
				console.log(all);
				document.getElementById('sum').innerHTML += w + '+';
				document.getElementById('out').innerHTML = '';		
			}
			document.getElementById('-').onclick = function(){
				doit();
				console.log(all);
				document.getElementById('sum').innerHTML += w + '-';
				document.getElementById('out').innerHTML = '';					
			}
			document.getElementById('*').onclick = function(){
				doit();
				console.log(all);
				document.getElementById('sum').innerHTML += w + '*';
				document.getElementById('out').innerHTML = '';					
			}
			document.getElementById('/').onclick = function(){
				doit();
				console.log(all);
				document.getElementById('sum').innerHTML += w + '/';
				document.getElementById('out').innerHTML = '';					
			}
			document.getElementById('ce').onclick = function(){
				document.getElementById('out').innerHTML = '';		
				document.getElementById('sum').innerHTML = '';
				all=0;
				console.log(all);
			}
			document.getElementById('backspace').onclick = function(){
				var q = document.getElementById('out').innerHTML;
				q = q.slice(0, -1);
				document.getElementById('out').innerHTML = q;
				console.log(all);
			}
			document.getElementById('root').onclick = function(){
				doit();
				all=Math.sqrt(all)
				document.getElementById('out').innerHTML = all;		
				document.getElementById('sum').innerHTML = '';
				console.log(all);
			}
			document.getElementById('=').onclick = function(){
			doit();
			console.log(all);
			document.getElementById('out').innerHTML =all;	
			}
		//function for all calculations
		function doit(){
			w = document.getElementById('out').innerHTML;
			q = document.getElementById('sum').innerHTML;
			if(q[q.length-1]=='+'){
				all=all + +w;
			} else if(q[q.length-1]=='-'){
					all= all - +w ;	
			}else if(q[q.length-1]=='*'){
				if(all==0){
					all=+q * +w;
				}else{
					all=all* +w;
				}
			}else if(q[q.length-1]=='/'){
				if(all==0){
					all=+q / +w;
				}else{
				all = all / +w;
				}
			}else{
				console.log('eeeee');
				all=+w;
			}
			var x = String(all);
			var e = String(q);
			if(all>999999999999999 || w>99999999999999 || e.length>25 || x=='NaN'){
				document.getElementById('sum').innerHTML ='ERROR';
				document.getElementById('out').innerHTML ='ERROR';
				setTimeout(off,2500);
			}else if(x.length>15){
				all = +all.toFixed(15);
				document.getElementById('sum').innerHTML ='';
				document.getElementById('out').innerHTML = all;
			}else{
				return all;
			}
		}

	}	
	//function for off calculator
	function off(){
		document.getElementById('1').disabled = true;
		document.getElementById('2').disabled = true;
		document.getElementById('3').disabled = true;
		document.getElementById('4').disabled = true;
		document.getElementById('5').disabled = true;
		document.getElementById('6').disabled = true;
		document.getElementById('7').disabled = true;
		document.getElementById('8').disabled = true;
		document.getElementById('9').disabled = true;
		document.getElementById('0').disabled = true;
		document.getElementById('.').disabled = true;
		document.getElementById('/').disabled = true;
		document.getElementById('*').disabled = true;
		document.getElementById('-').disabled = true;
		document.getElementById('+').disabled = true;
		document.getElementById('ce').disabled = true;
		document.getElementById('root').disabled = true;
		document.getElementById('backspace').disabled = true;
		document.getElementById('=').disabled = true;
		document.getElementById('check').checked = false;
		document.getElementById('screen').style.cssText = 'background-color:grey';
		document.getElementById('out').innerHTML = '';
		document.getElementById('sum').innerHTML = '';
		all,w,q=0;
		console.log('false');
	}
	});
/***
Subtask-1:
Display sum of all the odd numbers from 91 to 129.
Subtask-2:
Display sum of all the even numbers from 51 to 85.
 */

let odd_sum=0;
let even_sum=0;
for (let i=51; i<=129; i++) {
    if(i>=91 && i%2===1){
        odd_sum+=i;
        console.log('Odd Sum: ', odd_sum);
    }
    if(i<=85 && i%2===0) {
        even_sum+=i;
        console.log('Even sum: ', even_sum);
    }
}

odd_sum=0;
even_sum=0;
let i=51; 
while (i<=129) {
    if(i>=91 && i%2===1){
        odd_sum+=i;
        console.log('Odd Sum: ', odd_sum);
    }
    if(i<=85 && i%2===0) {
        even_sum+=i;
        console.log('Even sum: ', even_sum);
    }
    i++;
}
/***
Subtask-1:
Find all the odd numbers from 61 to 100.
 */
/***
Subtask-2:
Find all the even numbers from 78 to 98.
 */

for (let i=61; i<=100; i++) {
    if (i>=61 && i%2!==0 ) {
        console.log('Found! Odd number between 61-100: ', i);
    }
    if (i>=78 && i<=98 && i%2===0) {
        console.log('Even Found! between 78-98 :', i);
    }
}

let i = 61;
while (i<=100) {
    if (i>=61 && i%2!==0 ) {
        console.log('Found! Odd number between 61-100: ', i);
    }
    if (i>=78 && i<=98 && i%2===0) {
        console.log('Even Found! between 78-98 :', i);
    }
    i++;
}
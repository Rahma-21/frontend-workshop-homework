// =============================================
// 3. LOOPS — Savings goal
// =============================================
// You want to save 100 OMR. Every month you save 15 OMR.
// Using a WHILE loop, print how much you have after each month,
// then print how many months it took.
//
// Expected output:
//   Month 1: 15 OMR
//   Month 2: 30 OMR
//   Month 3: 45 OMR
//   Month 4: 60 OMR
//   Month 5: 75 OMR
//   Month 6: 90 OMR
//   Month 7: 105 OMR
//   Goal reached in 7 months!

// your code here
const cont = 100;
let money = 0;
let ContMonth = 0;

while (money < cont){
      ContMonth++;
      money = money + 15;
    console.log(`Month ${ContMonth}: ${money} OMR` );

}
console.log(`Goal reached in ${ContMonth} months!`);
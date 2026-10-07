// =============================================
// 1. VARIABLES — Cafe receipt
// =============================================
// 1 OMR = 1000 baisa. We count in baisa to avoid decimals.
// Your order: 2 shawarma (600 baisa each) and 3 karak (150 baisa each).
// Create variables for every price and count, calculate each line and the total.
// Print the total in baisa AND in OMR (divide by 1000).
//
// Expected output:
//   Shawarma: 2 x 600 = 1200 baisa
//   Karak: 3 x 150 = 450 baisa
//   Total: 1650 baisa = 1.65 OMR

// your code here

const Shawarma = 600;
const karak = 150;
let countShawarma = 2 * Shawarma;
let countkarak= 3 * karak;
let total = countShawarma + countkarak;

console.log(`Shawarma: 2 x 600 = `, countShawarma, `baisa`)
console.log(`Karak: 3 x 150 =`, countkarak, `baisa`)
console.log(`Total: ${total} baisa`, total/1000)
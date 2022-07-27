// Cash Register function

function checkCashRegister(price, cash, cid) {
  let DENOMS = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  DENOMS.reverse();

  let rem = cash - price;

  let tempCid = cid.map((a) => [...a]);

  // reverse cid:
  cid.reverse();
  let change = [];

  for (let i = 0; i < cid.length; i++) {
    if (DENOMS[i] < rem) {
      let changeDenom = Math.floor(Math.min(rem, cid[i][1]) / DENOMS[i]);
      if (changeDenom > 0) {
        let deduction = DENOMS[i] * changeDenom;
        // console.log(rem, deduction, changeDenom, cid[i][0]);
        rem -= deduction;
        rem = rem.toFixed(2);
        change.push([cid[i][0], deduction]);
        cid[i][1] -= changeDenom * DENOMS[i];
      }
    }
    if (rem == 0) {
      break;
    }
  }

  if (rem > 0) {
    // console.log(rem, change);
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return cid.every((denom) => denom[1] === 0)
    ? {
        status: "CLOSED",
        change: tempCid,
      }
    : {
        status: "OPEN",
        change,
      };
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);

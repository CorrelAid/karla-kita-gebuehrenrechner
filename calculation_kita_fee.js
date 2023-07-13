function calculateFeeRate(bruttoIncome, numberChildrenInSameKita) {
  let feeForKindergarten = [
    {
      key: "feeForMorningCare",
      value: 0,
    },
    {
      key: "feeForNoonCare",
      value: 0,
    },
    {
      key: "feeForFullDayCare",
      value: 0,
    },
  ];

  if (bruttoIncome >= 3000) {
    if (numberChildrenInSameKita === 1) {
      feeForKindergarten[0].value = 300;
      feeForKindergarten[1].value = 300;
      feeForKindergarten[2].value = 300;
    } else if (numberChildrenInSameKita === 2) {
      feeForKindergarten[0].value = 200;
      feeForKindergarten[1].value = 200;
      feeForKindergarten[2].value = 200;
    } else if (numberChildrenInSameKita >= 3) {
      feeForKindergarten[0].value = 100;
      feeForKindergarten[1].value = 100;
      feeForKindergarten[2].value = 100;
    } else {
      feeForKindergarten[0].value = 400;
      feeForKindergarten[1].value = 400;
      feeForKindergarten[2].value = 400;
    }
  } else {
    if (numberChildrenInSameKita === 1) {
      feeForKindergarten[0].value = 30;
      feeForKindergarten[1].value = 30;
      feeForKindergarten[2].value = 30;
    } else if (numberChildrenInSameKita === 2) {
      feeForKindergarten[0].value = 20;
      feeForKindergarten[1].value = 20;
      feeForKindergarten[2].value = 20;
    } else if (numberChildrenInSameKita >= 3) {
      feeForKindergarten[0].value = 10;
      feeForKindergarten[1].value = 10;
      feeForKindergarten[2].value = 10;
    } else {
      feeForKindergarten[0].value = 40;
      feeForKindergarten[1].value = 40;
      feeForKindergarten[2].value = 40;
    }
  }
  return feeForKindergarten;
}

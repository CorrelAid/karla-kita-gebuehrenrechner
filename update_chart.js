let bruttoIncome;
let numberChildrenInSameKita;
const yDomain = [0, 500];
const initialData =   [
  {
    key: "feeForMorningCare",
    value: 200,
  },
  {
    key: "feeForNoonCare",
    value: 400,
  },
  {
    key: "feeForFullDayCare",
    value: 300,
  },
];

chart = BarChart(initialData, {
  x: (data) => data.key,
  y: (data) => data.value,
  yFormat: d3.format(",.0f"),
  width: 1000,
  height: 500,
  color: "#6EF07D",
  yDomain: yDomain
});

document.querySelector("form").addEventListener("change", (e) => {
  const childrenRadiosNumberChildrenInSameKita = document.getElementsByName(
    "numberChildrenInSameKita"
  );
  const childrenRadiosBruttoIncome = document.getElementsByName("bruttoIncome");

  for (let i = 0; i < childrenRadiosNumberChildrenInSameKita.length; i++) {
    if (childrenRadiosNumberChildrenInSameKita[i].checked) {
      numberChildrenInSameKita =
        childrenRadiosNumberChildrenInSameKita[i].value;
    }
  }
  for (let i = 0; i < childrenRadiosBruttoIncome.length; i++) {
    if (childrenRadiosBruttoIncome[i].checked) {
      bruttoIncome = childrenRadiosBruttoIncome[i].value;
    }
  }
  chart.update(calculateFeeRate(bruttoIncome, numberChildrenInSameKita)
  ,  {yDomain: yDomain});
});

// WARM UP
const warmUp1 = (order, drinks, balance) => {
  if (drinks.hasOwnProperty(order) && balance >= drinks[order]) {
    console.log(`Here is your ${order}`);
  } else if (drinks.hasOwnProperty(order)) {
    console.log(`You can't afford ${order}`);
  } else {
    console.log(`We don't stock ${order}`);
  }
};
// let drinks = { gin: 4, beer: 4, coffee: 2 };
// let balance = 10;
// warmUp1("gin", drinks, balance);

// ALARM
const alarm = {
  weekendAlarm: "No alarm needed.",
  weekdayAlarm: "Get up!",
  alarm: "No alarm is set",
  weekdays: ["mon", "tue", "wed", "thu", "fri"],
  weekends: ["sat", "sun"],
  setDay: function (day) {
    if (this.weekdays.includes(day)) {
      this.alarm = this.weekdayAlarm;
    } else if (this.weekends.includes(day)) {
      this.alarm = this.weekendAlarm;
    } else {
      console.log(
        `I don't recognise "${day}".` +
        `Please write in the style "mon", "tue" etc.`
      );
      return;
    }
    console.log(`The day is ${day}. ${this.alarm}`);
  },
};
// alarm.setDay("tue");
// alarm.setDay("sat");
// alarm.setDay("glorp");


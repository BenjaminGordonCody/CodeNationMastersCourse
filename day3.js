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

// PET
const Pet = function (name, type, age, colour) {
  this.name = name;
  this.typeOfPet = type;
  this.age = age;
  this.colour = colour;
  this.nourished = 20;
  this.health = 100;

  //Prints a dividing line
  this.bar = () => {
    console.log("\n_____\n");
  };

  //Prints pet's stats in full
  this.print = () => {
    this.bar();
    console.log(`Your pet's stats:`);
    for (const key in this) {
      if (typeof this[key] != "function") {
        console.log(`${key}: ${this[key]}`);
      }
    }
  };

  //processes all internal statrs and outputs how pet is feeling
  this.feels = () => {
    function foodFeels(feels) {
      if (this.nourished <= 0) {
        this.health = -5;
      }
      if (this.nourished < 10) {
        feels.push("is starving");
      }
      if (this.nourished > 30) {
        feels.push("has overeaten");
      }
      if (this.nourished > 35) {
        this.digest(-10, "vomit");
      }
      return feels;
    }

    let feels = [,];
    feels = foodFeels(feels);
    for (const feel in feels) {
      console.log(feel);
  };

  // Changes self.nourished and writes description of action to log.
  this.digest = (nutrition, verb) => {
    this.bar();
    this.nourished += nutrition;
    console.log(`${this.name} is ${verb}ing!`);
    this.feels();
    // this.print();
  };
};

// birth Wiggles
const wiggles = new Pet("Wiggles", "pig", 21, "eau-de-nil");

// demo of eat/drink/other function
wiggles.digest(5, "eat");
wiggles.digest(1, "drink");
wiggles.digest(31, "eat");

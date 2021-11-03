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
  
    this.addFoodFeels = (feels) => {
      if (this.nourished < 10) {
        feels.push("is starving");
      }
      if (this.nourished > 30) {
        feels.push("has overeaten");
      }
      return feels;
    };
  
    this.digestiveConsequences = () => {
      if (this.nourished < 1) {
        this.health -= 5;
      }
      else if (this.nourished > 35){
        this.health -= 5;
      }
    }
  
    //processes all internal stats and outputs how pet is feeling
    this.feels = () => {
      let feels = [];
      feels = this.addFoodFeels(feels);
  
      for (const feel in feels) {
        console.log(`${this.name} ${feels[feel]}`);
      }
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
  // wiggles.digest(5, "eat");
  // wiggles.digest(1, "drink");
  wiggles.digest(31, "eat");
  
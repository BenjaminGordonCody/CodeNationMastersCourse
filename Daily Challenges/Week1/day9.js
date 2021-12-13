const dataChecker = (string, rank) => {
  if (string != "codenation") {
    console.log("wrong string");
  } else if (rank != 1) {
    console.log("right string, wrong rank");
  } else {
    console.log("correct");
  }
};

dataChecker("North Coders", 1);
dataChecker("codenation", 2);
dataChecker("codenation", 1);

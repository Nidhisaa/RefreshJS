const string = "MilkBikis";

const reverse = (str) => {
  const spl = str.split("");   
  const rev = spl.reverse();   
  const jn = rev.join("");    
  console.log(jn);
};

reverse(string);

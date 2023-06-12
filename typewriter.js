//const sentence = "hello there from lighthouse labs";

//for (const char of sentence) {

//setTimeout(() => {
  //process.stdout.write(char);
//}, 1000) // <= 1s delay to make it noticeable. Can dial it down later.
 
//}

const sentence = "hello there from lighthouse labs";

const animateSentence = () => {
  let delay = 0;

  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
    delay += 50;
  }

  setTimeout(() => {
    process.stdout.write('\n');
  }, delay);
};

animateSentence();


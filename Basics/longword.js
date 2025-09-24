const longword = (sentence) => {
    const words = sentence.split(" ");
    const longest = words.reduce((longword, current) => longword.length > current.length ?  longword : current );
    console.log(longest);
};
longword("Function that returns the longestword");
const cap = (sentence) => { 
    const spl = sentence.split(" ");
    const cap = spl.map(word => word.charAt(0).toUpperCase()+word.slice(1));
    const jn = cap.join(" ");
    console.log(jn);
};
    cap("capitalizes the first letter of each word");



const vowell = str => [...str].filter(c => "aeiouAEIOU".includes(c)).length;
console.log(vowell("parlegg"))
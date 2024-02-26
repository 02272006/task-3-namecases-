let personName: string = "Musfira"
console.log("lowercase:", personName.toLowerCase());

console.log("uppercase:", personName.toUpperCase());

console.log("titlecase:",personName.replace(/\bw/g,c => c.toUpperCase()));
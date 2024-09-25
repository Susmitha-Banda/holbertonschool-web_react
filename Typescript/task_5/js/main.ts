// Define the MajorCredits interface
interface MajorCredits {
  credits: number;
  brand: 'Major'; // Brand property to distinguish MajorCredits
}

// Define the MinorCredits interface
interface MinorCredits {
  credits: number;
  brand: 'Minor'; // Brand property to distinguish MinorCredits
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits, brand: 'Major' };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits, brand: 'Minor' };
}

// Test the functions using console.log
const major1: MajorCredits = { credits: 30, brand: 'Major' };
const major2: MajorCredits = { credits: 40, brand: 'Major' };
const minor1: MinorCredits = { credits: 20, brand: 'Minor' };
const minor2: MinorCredits = { credits: 10, brand: 'Minor' };

console.log('Sum of Major Credits:', sumMajorCredits(major1, major2)); // Expected output: 70 Major Credits
console.log('Sum of Minor Credits:', sumMinorCredits(minor1, minor2)); // Expected output: 30 Minor Credits

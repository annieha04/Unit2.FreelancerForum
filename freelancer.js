// Build your website according to this user story:
// A visitor enters the website and finds a list of available freelancers. Each freelancer has a name, an occupation, and a starting price for their services. 
// They observe on the list Alice, the writer with a starting price of $30, and Bob, who is a teacher, has a starting price of $50.
// The visitor also finds a message that displays the average starting price of all the freelancers. 
// In this example, the average starting price is $40.
// A few seconds later, a new listing appears for a freelancer named Carol, who is a programmer and has a starting price of $70. 
// The average starting price is updated to $50.
// New freelancers continue to appear every few seconds, and the average starting price is updated accordingly.

const freelancers = [
    { name: 'Alice', occupation: 'Writer', startingPrice: 30 },
    { name: 'Bob', occupation: 'Teacher', startingPrice: 50 },
  ];

  function calculateAveragePrice(freelancers) {
    const totalPrices = freelancers.reduce((sum, freelancer) => sum + freelancer.startingPrice, 0);
    return freelancers.length === 0 ? 0 : totalPrices / freelancers.length;
  }

function updateListAndAverage(newFreelancer) {
freelancers.push(newFreelancer);
    console.log('Freelancers List:');
freelancers.forEach(freelancer => {
      console.log(`${freelancer.name} - ${freelancer.occupation}, Starting Price: $${freelancer.startingPrice}`);
});
const averagePrice = calculateAveragePrice(freelancers);
    console.log(`Average Starting Price: $${averagePrice.toFixed(2)}`);
  }

setInterval(() => {
    const newFreelancer = { name: 'Carol', occupation: 'Programmer', startingPrice: Math.floor(Math.random() * 100) + 1 };
    updateListAndAverage(newFreelancer);
  }, 5000); // Update every 5 seconds
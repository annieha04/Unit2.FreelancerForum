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
    { name: 'Carol', occupation: 'Programmer', startingPrice: 70 },
    { name: 'John', occupation: 'Chef', startingPrice: 90 },
    { name: 'Thomas', occupation: 'Professional Football Player', startingPrice: 110 },
    { name: 'Linda', occupation: 'Accountant', startingPrice: 130 },
    { name: 'Nancy', occupation: 'Doctor', startingPrice: 150 },
    { name: 'Tyler', occupation: 'Cashier', startingPrice: 15 },
    { name: 'Helen', occupation: 'Bartender', startingPrice: 60 },
    { name: 'Sam', occupation: 'Mechanic', startingPrice: 50 },
  ];
  
 // Function to calculate average starting price
function calculateAveragePrice(freelancers) {
    const totalPrices = freelancers.reduce((sum, freelancer) => sum + freelancer.startingPrice, 0);
    return freelancers.length === 0 ? 0 : totalPrices / freelancers.length;
  }
  
// Function to update the freelancers list and average price
function updateListAndAverage(newFreelancer) {
    freelancers.push(newFreelancer);
  
// Display only the first two freelancers
    const displayFreelancers = freelancers.slice(0, 2);
  
// Update the freelancers list
    const freelancersList = document.getElementById('freelancers-list');
// Clear existing list items
    while (freelancersList.firstChild) {
      freelancersList.removeChild(freelancersList.firstChild);
    }
  
// Append new list items
    displayFreelancers.forEach(freelancer => {
      const listItem = document.createElement('li');
      listItem.textContent = `${freelancer.name} - ${freelancer.occupation}, Starting Price: $${freelancer.startingPrice}`;
      freelancersList.appendChild(listItem);
    });
  
// Update the average starting price
    const averagePriceElement = document.getElementById('average-price');
    const averagePrice = calculateAveragePrice(displayFreelancers);
    averagePriceElement.textContent = `Average Starting Price: $${averagePrice.toFixed(2)}`;
  }  
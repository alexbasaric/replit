// JS Promise Example with async and await

// write async function that calculates total costs of car repair
// use async and await
// print total costs to console

const costsForParts = 200;
const costsPerHour = process.env['cost.per.hour']

// calculating the costs should take 3 seconds

function calculateCosts(workhours) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(workhours * costsPerHour + costsForParts);
    }, 1000);
  });
}

async function calcAsync(workhours) {
  const completeCosts = await calculateCosts(workhours);
  return completeCosts;
}


// mechanic needed 4 hours to repair your car
let workhours = 4;

calcAsync(workhours).then((sum) => {
  console.log('Price: ' + sum)
});



// Total costs should be 540,-

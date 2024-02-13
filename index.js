function calculateMoney(ticketSale) {
  if(ticketSale < 0){
  return 'Please enter a valid number that started from 1.';
  }
  const ticketPrice = 120;
  const securityGuard = 500;
  const stuff = 8 * 50;
  const income = ticketSale * ticketPrice;
  const spend = securityGuard + stuff;
  const savings = income - spend;
  return savings;
  }



  function checkName(name) {
  if(typeof name !== 'string'){
  return 'invalid';
  }
  name = name.toLowerCase();
  const slice = name.slice(-1);
  if(slice === 'a' || slice === 'y' || slice === 'i' || slice == 'o' || slice === 'u'|| slice === 'e' || slice === 'w'){
  return 'Good Name';
  }
  else{
  return 'Bad Name';
  }
  }



  function deleteInvalids(array) {
  if(!Array.isArray(array)){
  return 'Please provide a valid array';
  }
  let arr = [];
  for(let i = 0; i <= array.length; i++){
  if(isNaN(array[i])){
  continue;
  }
  else if(typeof array[i] === 'number'){
  arr.push(array[i]);
  }
  }
  return arr;
  }


  
  function password(obj) {
  const keys = Object.keys(obj);
  if(keys.length !== 3){
  return 'invalid';
  }
  else if(obj.birthYear.toString().length < 4){
  return 'invalid';
  }
  const pass = obj.siteName.charAt(0).toUpperCase()+obj.siteName.slice(1)+'#'+obj.name+'@'+obj.birthYear;
  return pass;
  }



  function monthlySavings(arr , livingCost) {
  if(!Array.isArray(arr)){
  return 'invalid input';
  }
  else if(typeof livingCost !== 'number'){
  return 'invalid input';
  }
  let sum = 0;
  for(const item of arr){
  if(item >= 3000){
  let tax = item - (item*0.2);
  sum = item + tax;
  }
  else{
  sum += item;
  }
  }
  let totalSavings = sum - livingCost;
  if(totalSavings < 0){
  return 'earn more'
  }
  return totalSavings;
  }

   
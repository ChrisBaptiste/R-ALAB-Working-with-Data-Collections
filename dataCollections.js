// // part one refactoring Code



// part two
// placeing my csv data in a variable called "csvRawData"
const csvRawData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"`
 
//using the split method to separate the data after each (/n) into rows.
const rows = csvRawData.split("/n");
console.log(rows);

// splitting the array of columns into individual columns after each "," by the .length of the array.
const columns = rows[0].split(',').length;
console.log("Number of columns:", columns);

// Converted each row into a 2 dimentional array of columns using the .map and .split method
// for every row in row.maps, we want to split it after each ","
//row.map goes through each row.
const nestedArray = rows.map(row => row.split(','));
console.log(nestedArray);




// Part 3  Transforming Data


// Extract the header row and convert each header to lowercase
const headers = nestedArray[0].map(header => header.toLowerCase()); 

// Skipping the header row and and going through the remaining rows using the .map method. 
const objectsArray = nestedArray.slice(1).map(row => { 
  const obj = {}; // Created an empty object to store the current row data
  row.forEach((cell, index) => { // Iterating over each cell in the row using a for loop with their index
    obj[headers[index]] = cell; // Set the property of the object using the corresponding header as the key
  });
  return obj; // Returning the constructed object for the current row
});

console.log("Array of Objects:", objectsArray); 




// //Part 4: Sorting and Manipulating Data

// 1) The .pop array method, removes the last element from the objects array.
 objectsArray.pop();
console.log(objectsArray);

// 2) inserting new object data at index 1
objectsArray.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });
 console.log(objectsArray);

// 3. adding the new object to the end of the array
objectsArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

console.log("The new array now looks like this, " +  objectsArray);



// 4. Calculating the average age using a for loop.
// storing the total age variable in totalAge
let totalAge = 0;

// Looping through each object in the objects Array
// The loop starts at index 0 and goes until the end of the array
for (let i = 0; i < objectsArray.length; i++) {
  totalAge += Number(objectsArray[i].age);  // Converting the age value from a string to a number and adding it to totalAge
}                                           // objectsArray[i].age gets the 'age' property of the object

// Calculating the average age.
// Dividing the totalAge by the number of objects in the array.
const averageAge = totalAge / objectsArray.length;
console.log("The average Age of people in the data is: " + averageAge);


// part 5 Full Circle
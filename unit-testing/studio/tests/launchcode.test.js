// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function() {

  test("The key organization contains the value 'nonprofit'.", function() {
    let output = launchcode.organization;
    expect(output).toEqual('nonprofit');
  });

  test("The key executiveDirector contains the value 'Jeff'.", function() {
    let output = launchcode.executiveDirector;
    expect(output).toEqual('Jeff');
  });

  test("The key percentageCoolEmployees contains the value 100.", function() {
    let output = launchcode.percentageCoolEmployees;
    expect(output).toEqual(100);
  });

  test("The key programsOffered contains the appropriate array.", function() {
    let output = launchcode.programsOffered;
    expect(output.length).toEqual(3);
    expect(output.includes('Web Development')).toEqual(true);
    expect(output.includes('Data Analysis')).toEqual(true);
    expect(output.includes('Liftoff')).toEqual(true);
  });

  test("The method launchOutput() returns the appropriate output.", function() {
    expect(launchcode.launchOutput(2)).toEqual('Launch!');
    expect(launchcode.launchOutput(3)).toEqual('Code!');
    expect(launchcode.launchOutput(5)).toEqual('Rocks!');
    expect(launchcode.launchOutput(6)).toEqual('LaunchCode!');
    expect(launchcode.launchOutput(15)).toEqual('Code Rocks!');
    expect(launchcode.launchOutput(10)).toEqual('Launch Rocks! (CRASH!!!!)');
    expect(launchcode.launchOutput(30)).toEqual('LaunchCode Rocks!');
    expect(launchcode.launchOutput(1)).toEqual("Rutabagas! That doesn't work.");
  });
  
});
"use strict";
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
describe_city("Karachi");
describe_city("Quetta");
describe_city("Lahore");
describe_city("Delhi", "India");

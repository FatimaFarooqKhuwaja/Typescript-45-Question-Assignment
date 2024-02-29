function car_information(manufacture:String, model_name:string, ...other_information:[string,any][]):
{
manufacture:string;
model_name:string;
[key:string]:any;
}{
const car:any ={
    manufacture,
    model_name,
}
for(let [key, value]of other_information)
{
    car[key] = value;
}
return car
}
console.log(car_information("MEHRAN", "GRANDY", ["COLOR","WHITE"], [ "SIZE", 23]));
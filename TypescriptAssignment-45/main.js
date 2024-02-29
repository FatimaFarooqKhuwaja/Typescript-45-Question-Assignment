function car_information(manufacture, model_name) {
    var other_information = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        other_information[_i - 2] = arguments[_i];
    }
    var car = {
        manufacture: manufacture,
        model_name: model_name,
    };
    for (var _a = 0, other_information_1 = other_information; _a < other_information_1.length; _a++) {
        var _b = other_information_1[_a], key = _b[0], value = _b[1];
        car[key] = value;
    }
    return car;
}
console.log(car_information("MEHRAN", "GRANDY", ["COLOR", "WHITE"], ["SIZE", 23]));

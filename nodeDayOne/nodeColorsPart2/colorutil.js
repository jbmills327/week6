// Created my own directory to use as a dependency

module.exports = {
    // This return the actual luminosity #
    giveMeTheNumber: function getBright() {
        var luminosity = (0.2126) * process.argv[2] + (0.7152) * process.argv[3] + (0.0722) * process.argv[4];
        return luminosity
    },


    // console.log(getBright());

    // This logs if the color is "light" or "dark" based on it luminosity value
    luminosity: function lightOrDark() {
        var luminosity = (0.2126) * process.argv[2] + (0.7152) * process.argv[3] + (0.0722) * process.argv[4];
        if (luminosity > 155) {
            return "light";
        } else {
            return "dark";
        }
    },

    // This will darken the RGB value by 20%
    darker: function() {
        var luminosity = (0.2126) * process.argv[2] + (0.7152) * process.argv[3] + (0.0722) * process.argv[4];
        var darkerByTwentyRed = (process.argv[2]) - (process.argv[2] * .2);
        var darkerByTwentyGreen = (process.argv[3]) - (process.argv[3] * .2);
        var darkerByTwentyBlue = (process.argv[4]) - (process.argv[4] * .2);
        console.log(darkerByTwentyRed);
        console.log(darkerByTwentyGreen);
        console.log(darkerByTwentyBlue);

    }

    // console.log(lightOrDark());

};

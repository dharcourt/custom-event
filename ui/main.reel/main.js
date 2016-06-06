/**
 * @module ui/main.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {

    constructor: {
        value: function Main() {}
    },

    handleInput: {
        value: function (event) {
            console.log("Handling \"input\" event with detail: ", event.detail);
            event.preventDefault();
        }
    },

    handleNotInput: {
        value: function (event) {
            console.log("Handling \"notInput\" event with detail: ", event.detail);
            event.preventDefault();
        }
    }

});

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
        value: function Main() {
            this.super();
        }
    },

    handleInput: {
        value: function (event) {
            console.log("handleInput() details: ", event.details);
            event.preventDefault();
        }
    },

    handleInputEventButtonAction: {
        value: function (event) {
            var details = {message: "Hi from handleInputButtonAction()"};
            console.log("Dispatching \"input\" event with details: ", details);
            this.dispatchEventNamed("input", true, true, details);
        }
    },

    handleNotInput: {
        value: function (event) {
            console.log("handleNoInput() details: ", event.details);
            event.preventDefault();
        }
    },

    handleNotInputEventButtonAction: {
        value: function (event) {
            var details = {message: "Hi from handleNotInputButtonAction()"};
            console.log("Dispatching \"notInput\" event with details: ", details);
            this.dispatchEventNamed("notInput", true, true, details);
        }
    }

});

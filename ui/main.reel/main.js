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
            console.log("handleInput() detail: ", event.detail);
            event.preventDefault();
        }
    },

    handleInputEventButtonAction: {
        value: function (event) {
            var detail = {message: "Hi from handleInputEventButtonAction()"};
            console.log("Dispatching \"input\" event with detail: ", detail);
            this.dispatchEventNamed("input", true, true, detail);
        }
    },

    handleNotInput: {
        value: function (event) {
            console.log("handleNoInput() details: ", event.detail);
            event.preventDefault();
        }
    },

    handleNotInputEventButtonAction: {
        value: function (event) {
            var detail = {message: "Hi from handleNotInputEventButtonAction()"};
            console.log("Dispatching \"notInput\" event with details: ", detail);
            this.dispatchEventNamed("notInput", true, true, detail);
        }
    }

});

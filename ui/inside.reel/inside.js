var Component = require("montage/ui/component").Component;

exports.Inside = Component.specialize(/** @lends Inside# */ {

    constructor: {
        value: function Inside() {}
    },

    handleInputEventButtonAction: {
        value: function (event) {
            var detail = {message: "Hi from handleInputEventButtonAction()"};
            console.log("Dispatching \"input\" event with detail: ", detail);
            this.dispatchEventNamed("input", true, true, detail);
        }
    },

    handleNotInputEvent1ButtonAction: {
        value: function (event) {
            var detail = {message: "Hi from handleNotInputEvent1ButtonAction()"};
            console.log("Dispatching \"notInput\" event with details: ", detail);
            this.dispatchEventNamed("notInput", true, true, detail);
        }
    },

    handleNotInputEvent2ButtonAction: {
        value: function (event) {
            var detail = {message: "Hi from handleNotInputEvent2ButtonAction()"};
            console.log("Dispatching \"notInput\" event with details: ", detail);
            this.dispatchEventNamed("notInput", true, true, detail);
        }
    }

});

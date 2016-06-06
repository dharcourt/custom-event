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

    handleAction: {
        value: function (event) {
        }
    },

    handleOwnerInput: {
        value: function (event) {
        }
    },

    handleOwnerNotInput: {
        value: function (event) {
        }
    }

});

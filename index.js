(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === "object" && module.exports) {
    // Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.returnExports = factory();
  }
})(typeof self !== "undefined" ? self : this, function() {
  // Just return a value to define the module export.
  // This example returns an object, but the module
  // can return a function as the exported value.

  /**
   * Generate random number between min and max
   * @param {Number} min
   * @param {Number} max
   * @return {Number} - random number
   */
  function randomNoGenerator(min, max) {
    if (typeof max !== "number" && typeof min !== "number") {
      min = 0;
      max = 1;
    }
    return Math.random() * (max - min) + min;
  }
  return {
    randomNoGenerator
  };
});

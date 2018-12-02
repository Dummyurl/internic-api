'use strict';

module.exports = function(Picturestop) {
    Picturestop.afterInitialize = function(next) {
        if (this.createAt === undefined) {
          this.createAt = Date.now();
        }
        if (next) next();
      };
};

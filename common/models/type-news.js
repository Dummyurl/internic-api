'use strict';

module.exports = function(Typenews) {
    Typenews.afterInitialize = function(next) {
        if (this.createAt === undefined) {
          this.createAt = Date.now();
        }
        if (next) next();
      };
};

'use strict';

module.exports = function(Cooperative) {
    Cooperative.afterInitialize = function(next) {
        if (this.createAt === undefined) {
          this.createAt = Date.now();
        }
        if (next) next();
      };
};

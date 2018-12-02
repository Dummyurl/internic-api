'use strict';

module.exports = function(Typeuser) {
    Typeuser.afterInitialize = function(next) {
        if (this.createAt === undefined) {
          this.createAt = Date.now();
        }
        if (next) next();
      };
};

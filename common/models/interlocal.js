'use strict';

module.exports = function(Interlocal) {
    Interlocal.afterInitialize = function(next) {
        if (this.createAt === undefined) {
          this.createAt = Date.now();
        }
        if (next) next();
      };
};

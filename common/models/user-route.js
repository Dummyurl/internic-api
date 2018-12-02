'use strict';

module.exports = function(Userroute) {
    Userroute.afterInitialize = function(next) {
        if (this.createAt === undefined) {
          this.createAt = Date.now();
        }
        if (next) next();
      };
};

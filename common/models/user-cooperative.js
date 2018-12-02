'use strict';

module.exports = function(Usercooperative) {
    Usercooperative.afterInitialize = function(next) {
        if (this.createAt === undefined) {
          this.createAt = Date.now();
        }
        if (next) next();
      };
};

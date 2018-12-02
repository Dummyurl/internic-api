'use strict';

module.exports = function(Typecomment) {
    Typecomment.afterInitialize = function(next) {
        if (this.createAt === undefined) {
          this.createAt = Date.now();
        }
        if (next) next();
      };
};

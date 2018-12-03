'use strict';

module.exports = function(Cooperative) {
    Cooperative.afterInitialize = function(next) {
        if (this.createAt === undefined) {
          this.createAt = Date.now();
        }
        if(this.id === 0 || this.id === null){
          this.id = undefined;
        }
        if (next) next();
      };
};

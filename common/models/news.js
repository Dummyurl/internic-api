'use strict';

module.exports = function(News) {
    News.afterInitialize = function(next) {
        if (this.createAt === undefined) {
          this.createAt = Date.now();
          this.id = undefine;
        }
        if(this.id === 0 || this.id === null){
          this.id = undefined;
        }
        if (next) next();
      };
};
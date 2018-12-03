'use strict';

module.exports = function(Comment) {
    Comment.afterInitialize = function(next) {
        if (this.createAt === undefined) {
          this.createAt = Date.now();
        }
        if(this.id === 0 || this.id === null){
          this.id = undefined;
        }
        if (next) next();
      };
};

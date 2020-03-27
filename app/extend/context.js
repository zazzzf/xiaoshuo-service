/**
 * Created by wenglibo on 2018/8/20.
 */
"use strict";

module.exports = {
  success(data) {
    this.body = {
      code: 200,
      msg:"ok",
      data,
    };
  },

  fail(err) {
    this.body = {
      code: err.status || 500,
      msg: err.message || 'Unknown error',
    };
  },
};
'use strict';

module.exports = function (kibana) {

  return new kibana.Plugin({

    uiExports: {
      visTypes: ['plugins/kibana-ops_clock-plugin/radial_clock']
    }

  });
};

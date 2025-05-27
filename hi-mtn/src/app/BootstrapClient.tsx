"use client"

import { useEffect } from 'react';

function BootstrapClient() {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
    require('../../../css/business-casual.min.css')
    require('../../../vendor/jquery/jquery.min.js')
    require('../../../vendor/bootstrap/js/bootstrap.bundle.min.js')
  }, []);

  return null;
}

export default BootstrapClient;

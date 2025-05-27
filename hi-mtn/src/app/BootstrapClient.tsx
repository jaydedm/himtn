"use client"

import { useEffect } from 'react';

// src/app/BootstrapClient.tsx
+"use client";

function BootstrapClient() {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
    require('../../../css/business-casual.min.css')
    require('../../../vendor/jquery/jquery.min.js')
    require('bootstrap/dist/css/bootstrap.min.css')
    require('bootstrap/dist/js/bootstrap.bundle.min.js')
  }, []);

  return null;
}

export default BootstrapClient;

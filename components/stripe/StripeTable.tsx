'use client'
import React, { useEffect } from 'react';

interface StripePricingTableProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  'pricing-table-id': string;
  'publishable-key': string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-pricing-table': StripePricingTableProps;
    }
  }
}

const StripePricingTable = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://js.stripe.com/v3/pricing-table.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div className='flex flex-1 flex-col w-full'>
      <stripe-pricing-table pricing-table-id="prctbl_1PgGv32KquarTEj7Sd4jtt4V"
        publishable-key="pk_test_51PgGtb2KquarTEj7hdprwJB2ut7GUwumrnT0QHJ3BBJ4n1kVEwSu2A9vqcj9RVAfispEhBsmN84ck9rQweThMlvn00Y5GJiq9P">
      </stripe-pricing-table>
    </div>
  );
}

export default StripePricingTable;
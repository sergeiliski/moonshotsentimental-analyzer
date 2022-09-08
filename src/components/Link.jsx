/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import Link from 'next/link';

export default React.forwardRef(({ to, ...props }, ref) => {
  const linkStyle = { textDecoration: 'none', color: '#212529' }
  return (
      <Link href={to}>
        <a style={linkStyle} {...props} ref={ref} />
      </Link>
  );
});
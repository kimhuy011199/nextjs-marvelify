import React from 'react';
import dynamic from 'next/dynamic';

interface NonSSRWrapperProps {
  children: React.ReactNode;
}

const NonSSRWrapper = (props: NonSSRWrapperProps) => (
  <React.Fragment>{props.children}</React.Fragment>
);

export default dynamic(() => Promise.resolve(NonSSRWrapper), {
  ssr: false,
});

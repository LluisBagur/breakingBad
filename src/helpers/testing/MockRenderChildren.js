import React from 'react';

global.scrollTo = jest.fn();

const MockScroll = ({ children }) => <>{children}</>;

export default MockScroll;

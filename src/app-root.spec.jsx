import React from 'react';
import { shallow, mount, render } from 'enzyme';

import AppRoot from './app-root'

describe('AppRoot', function() {
	it('renders', function() {
		expect(shallow(<AppRoot />).contains('React Seed Component'))
	})
})
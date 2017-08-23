import React from 'react';
import { shallow, mount, render } from 'enzyme';

import * as Westside from './app-root'

describe('Westside.AlcApp', function() {
	it('renders', function() {
		expect(shallow(<Westside.AlcApp />).contains('React Seed Component'))
	})
})
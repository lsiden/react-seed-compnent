import React from 'react';
import { shallow, mount, render } from 'enzyme';

import ReactSeedComponent from './index'

describe('ReactSeedComponent', function() {
	it('renders', function() {
		expect(shallow(<ReactSeedComponent />).contains('<input '))
	})
})
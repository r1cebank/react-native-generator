/* global it */
/* global describe */
/* eslint-disable no-unused-vars */

import React, { View, Text, StyleSheet } from 'react-native';
import { shallow } from 'enzyme';
import Scene from '../src/components/scene';
import { expect } from 'chai';

describe('<Scene />', () => {
    it('should render stuff', () => {
        const wrapper = shallow(<Scene />);
        expect(wrapper.length).to.equal(1);
    });
});

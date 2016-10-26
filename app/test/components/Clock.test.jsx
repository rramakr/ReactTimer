var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var Clock = require('Clock');

describe('Clock', function() {
    it('should exists', function() {
        expect(Clock).toExist();
    });

    describe('Render', () => {
        it('Should Render clock', () => {
            var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={60}/>);
            var $el = $(ReactDOM.findDOMNode(clock));
            var actualText = $el.find('.clock-text').text();
            expect(actualText).toBe('01:00');
        });
    });

    describe('formatSeconds', () => {
        it('should format seconds', () => {
            var clock = TestUtils.renderIntoDocument(<Clock/>);
            expect(clock.formatSeconds(615)).toBe('10:15');
            expect(clock.formatSeconds(61)).toBe('01:01');
        });
    });
});

import { getFullYear, getFooterCopy, getLatestNotification } from './utils.js';

test('getFullYear returns the current year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
});

test('getFooterCopy returns a boolean', () => {
    expect(getFooterCopy(true)).toBe('ALX');
    expect(getFooterCopy(false)).toBe('ALX main dashboard');
});

test('getLatestNotification returns a string', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD')
});
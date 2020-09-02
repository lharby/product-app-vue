
import mockData from './data/mockData.json';

const records = mockData.catalogEntryView;

function returnCurrencySymbol(value) {
  if (value === 'USD') {
    return '&#36;';
  } if (value === 'GBP') {
    return '&pound;';
  } if (value === 'YEN') {
    return '&yen;';
  }
  return value;
}

describe('Return call should read different currencies', () => {
  it('should return a currency value from the data', () => {
    const thirdRecord = records[2];
    const lastRecord = records[5];
    expect(thirdRecord.price[0].currency).toBe('GBP');
    expect(thirdRecord.price[0].currency).not.toBe('USD');
    expect(lastRecord.price[0].currency).toBe('YEN');
    expect(lastRecord.price[0].currency).not.toBe('GBP');
  });
  it('should return a currency symbol based on a string', () => {
    const firstRecord = records[0];
    const thirdRecord = records[2];
    const lastRecord = records[5];
    expect(returnCurrencySymbol(firstRecord.price[0].currency)).toBe('&#36;');
    expect(returnCurrencySymbol(firstRecord.price[0].currency)).not.toBe('&yen;');
    expect(returnCurrencySymbol(thirdRecord.price[0].currency)).toBe('&pound;');
    expect(returnCurrencySymbol(thirdRecord.price[0].currency)).not.toBe('&#36;');
    expect(returnCurrencySymbol(lastRecord.price[0].currency)).toBe('&yen;');
    expect(returnCurrencySymbol(lastRecord.price[0].currency)).not.toBe('&pound;');
  });
});

import { getColorByCases, numberWithDot } from '../../utils/pseudo.utils';
describe('getColorByCases function', () => {
  it('returns correct color for different cases', () => {
    expect(getColorByCases(-1)).to.equal('#FF6E54');
    expect(getColorByCases(0)).to.equal('#F5F4F6');
    expect(getColorByCases(999)).to.equal('#F5F4F6');
    expect(getColorByCases(1000)).to.equal('#FFEBE7');
    expect(getColorByCases(9999)).to.equal('#FFEBE7');
    expect(getColorByCases(10000)).to.equal('#FFDAD3');
    expect(getColorByCases(99999)).to.equal('#FFDAD3');
    expect(getColorByCases(100000)).to.equal('#FFB7AA');
    expect(getColorByCases(999999)).to.equal('#FFB7AA');
    expect(getColorByCases(1000000)).to.equal('#FFA999');
    expect(getColorByCases(9999999)).to.equal('#FFA999');
    expect(getColorByCases(10000000)).to.equal('#FF8874');
    expect(getColorByCases(99999999)).to.equal('#FF8874');
    expect(getColorByCases(100000000)).to.equal('#FF6E54');
    expect(getColorByCases(999999999)).to.equal('#FF6E54');
  });
});

describe('numberWithDot function', () => {
  it('returns a number with dots for thousands separator', () => {
    expect(numberWithDot(0)).to.equal('0');
    expect(numberWithDot(1)).to.equal('1');
    expect(numberWithDot(10)).to.equal('10');
    expect(numberWithDot(100)).to.equal('100');
    expect(numberWithDot(1000)).to.equal('1.000');
    expect(numberWithDot(10000)).to.equal('10.000');
    expect(numberWithDot(100000)).to.equal('100.000');
    expect(numberWithDot(1000000)).to.equal('1.000.000');
    expect(numberWithDot(10000000)).to.equal('10.000.000');
    expect(numberWithDot(100000000)).to.equal('100.000.000');
    expect(numberWithDot(1000000000)).to.equal('1.000.000.000');
  });
});
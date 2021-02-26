
const formatVolumeIconPath = require('../assets/scripts/main');

describe('test formatVolumeIconPath', () => {
    test('test num > 66', () => {
      expect(formatVolumeIconPath(70)).toBe(`./assets/media/icons/volume-level-3.svg`);
    });
  
    test('test num > 33', () => {
      expect(formatVolumeIconPath(40)).toBe(`./assets/media/icons/volume-level-2.svg`);
    });

    test('test num > 0', () => {
        expect(formatVolumeIconPath(4)).toBe(`./assets/media/icons/volume-level-1.svg`);
      });

    test('test num = 0', () => {
    expect(formatVolumeIconPath(0)).toBe(`./assets/media/icons/volume-level-0.svg`);
    });

  });
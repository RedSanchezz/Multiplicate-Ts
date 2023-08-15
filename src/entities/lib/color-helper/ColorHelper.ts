export default class ColorHelper {
  static hexToRgb (hex: string): string {
    if (hex[0] === '#') hex = hex.slice(1)
    const r = parseInt(hex.slice(0, 2), 16).toString()
    const g = parseInt(hex.slice(2, 4), 16).toString()
    const b = parseInt(hex.slice(4), 16).toString()
    return 'rgba(' + r + ',' + g + ',' + b + ')'
  }

  static hexToRgba (hex: string, alpha: number) {
    if (hex[0] === '#') hex = hex.slice(1)
    const r = parseInt(hex.slice(0, 2), 16).toString()
    const g = parseInt(hex.slice(2, 4), 16).toString()
    const b = parseInt(hex.slice(4), 16).toString()
    return 'rgba(' + r + ',' + g + ',' + b + ',' + alpha.toString() + ')'
  }

  static rgbToHex (rgb: string) {
    rgb = rgb.replace(/[\s()rgba;]/gi, '').split(',').map((value, index, array) => {
      value = parseInt(value, 10).toString(16)
      if (value.length === 1) value = '0' + value
      return value
    }).join('')
    return '#' + rgb
  }

  static toRgba (str: string, alpha: number) {
    if (str.startsWith('rgba')) {
      const hex = ColorHelper.rgbaToHex(str)
      return ColorHelper.hexToRgba(hex, alpha)
    }
    if (str.startsWith('rgb')) {
      const hex = ColorHelper.rgbToHex(str)
      return this.hexToRgba(hex, alpha)
    }
    return this.hexToRgba(str, alpha)
  }

  static rgbaToHex (rgba: string) {
    rgba = rgba.replace(/[\s()rgba;]/gi, '')
    const result = rgba.split(',').map((value, index, array) => {
      if (index === array.length - 1) return 'del'
      value = parseInt(value, 10).toString(16)
      if (value.length === 1) value = '0' + value
      return value
    }).filter((value) => {
      return value !== 'del'
    }).join('')
    return '#' + result
  }

  static toHex (str: string) {
    if (str.startsWith('#')) return str
    if (str.startsWith('rgba')) return ColorHelper.rgbaToHex(str)
    return ColorHelper.rgbToHex(str)
  }
}

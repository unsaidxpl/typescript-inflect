export default class Inflect {
  demodulize(string: string): string {
    const delimiter = '::';
    const index = string.lastIndexOf(delimiter);
    return index >= 0 ? string.substring(index + delimiter.length) : string;
  }

  camelize(string: string, lowercaseFirstLetter?: boolean): string {
    let result = lowercaseFirstLetter ?
      string[0].toLowerCase() + string.substr(1) : string[0].toUpperCase() + string.substr(1);
    return result.replace(/[_.-](\w|$)/g, (_: string, l: string) =>
      l.toUpperCase()
    );
  }

  dasherize(string: string): string {
    return string.replace(/_/g, '-');
  }

  ordinal(number: number): string {
    const absNumber: number = Math.floor(Math.abs(number));

    if ([11, 12, 13].indexOf(absNumber % 100) !== -1) {
      return 'th';
    } else {
      switch(absNumber % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    }
  }

  ordinalize(number: number): string {
    return `${number}${this.ordinal(number)}`;
  }
}

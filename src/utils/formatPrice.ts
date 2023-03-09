export default function (number: number): string {
    return 'RP' + number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
  
import axios from 'axios';
import { getProducts } from './product';
jest.mock('axios');

const mockProducts = [
  {
    id: '1',
    date: '2021-02-21T20:17:26.366Z',
    name: 'Arch Blick',
    img: 'https://placeimg.com/640/360/any',
    sold: true,
  },
  {
    id: '2',
    date: '2021-02-22T06:28:38.305Z',
    name: 'Ms. Fiona Spencer',
    img: 'https://placeimg.com/640/360/any',
    sold: true,
  },
  {
    id: '3',
    date: '2021-02-22T06:48:22.667Z',
    name: 'April Gusikowski',
    img: 'https://placeimg.com/640/360/any',
    sold: true,
  },
  {
    id: '4',
    date: '2021-02-21T20:08:38.075Z',
    name: 'Lindsay McLaughlin',
    img: 'https://placeimg.com/640/360/any',
    sold: false,
  },
];
describe('Product Service', () => {
  describe('getProducts', () => {
    beforeEach(() => {
      jest.mock('axios');
    });

    it('should call getProducts api with valid response', () => {
      axios.get.mockImplementation(() =>
        Promise.resolve({ data: mockProducts }),
      );
      return getProducts().then(response => {
        expect(response).toEqual(mockProducts);
      });
    });

    it('should catch error when error is thrown from aip', async () => {
      axios.get.mockImplementation(() =>
        Promise.reject(new Error('Something went wrong')),
      );
      await expect(getProducts()).rejects.toThrow('Something went wrong');
    });
  });
});

import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';

@Injectable()
export class ProductsModel {
  public data: any = [
    {
      p_id: '1',
      product_name: ' Solimo Almonds',
      product_weight: '1Kg',
      product_price: '250',
      product_image:
        'https://m.media-amazon.com/images/I/91iBMb4ABQL._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
      p_id: '2',
      product_name: 'Quaker Oats Pouch',
      product_weight: '2KG',
      product_price: '180',
      product_image:
        'https://m.media-amazon.com/images/I/71zQEQXpuLL._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
      p_id: '3',
      product_name: 'Beer shampoo',
      product_weight: '200ml',
      product_price: '500',
      product_image:
        'https://rukminim1.flixcart.com/image/832/832/jjiw1ow0/shampoo/8/r/k/370-beer-shiny-and-bouncy-shampoo-park-avenue-original-imaf72uahtxywquk.jpeg?q=70'
    },
    {
      p_id: '4',
      product_name: 'Himalaya paste',
      product_weight: '200g',
      product_price: '180',
      product_image:
        'https://rukminim1.flixcart.com/image/832/832/j3uh47k0/toothpaste/f/t/d/150-complete-care-himalaya-original-imaeuwfpgtr59sas.jpeg?q=70'
    },
    {
      p_id: '5',
      product_name: 'Ashirvaad Atta',
      product_weight: '1Kg',
      product_price: '175',
      product_image:
        'https://rukminim1.flixcart.com/image/832/832/j65cnm80/flour/z/s/r/1-superior-mp-atta-whole-wheat-flour-aashirvaad-original-imaewzbkfqhy4dhq.jpeg?q=70'
    },
    {
      p_id: '6',
      product_name: 'Ashirvad Ghee',
      product_weight: '200ml',
      product_price: '180',
      product_image:
        'https://rukminim1.flixcart.com/image/832/832/j9yixe80/ghee/h/z/p/1-aashirvaad-pure-cow-plastic-bottle-aashirvaad-original-imaeznaasxznzgc7.jpeg?q=70'
    },
    {
      p_id: '7',
      product_name: 'Gillete',
      product_weight: '200ml',
      product_price: '240',
      product_image:
        'https://rukminim1.flixcart.com/image/832/832/j3xbzww0/shaving-cream/w/m/j/418-classic-sensitive-skin-pre-shave-foam-gillette-original-imaeuyybxxppskgu.jpeg?q=70'
    },
    {
      p_id: '8',
      product_name: 'Treseme Shampoo',
      product_weight: '250ml',
      product_price: '235',
      product_image:
        'https://rukminim1.flixcart.com/image/832/832/jesunbk0/shampoo/j/8/7/580-keratin-smooth-with-argan-oil-shampoo-tresemme-original-imaexrhqrrs6xqku.jpeg?q=70'
    },
    {
      p_id: '9',
      product_name: 'Himalaya shampoo',
      product_weight: '250ml',
      product_price: '293',
      product_image:
        'https://rukminim1.flixcart.com/image/612/612/j3lwh3k0/shampoo/h/g/b/700-anti-hair-fall-shampoo-himalaya-original-imaeupg7sygzgqej.jpeg?q=70'
    },
    {
      p_id: '10',
      product_name: 'Chaayos Chai Time Snacks',
      product_weight: '2packs',
      product_price: '240',
      product_image:
        'https://m.media-amazon.com/images/I/61i9egxQxhL._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
      p_id: '11',
      product_name: 'Safewash Liquid Detergent by Wipro, (Buy 1 Get 1 Free)',
      product_weight: '1L ',
      product_price: '235',
      product_image:
        'https://m.media-amazon.com/images/I/61MQLodxUUL._AC_UL480_QL65_.jpg'
    },
    {
      p_id: '12',
      product_name:
        'Red Label Natural Care Tea, Chai Made with 5 Ayurvedic Herbs,',
      product_weight: '250 g',
      product_price: '293',
      product_image:
        'https://m.media-amazon.com/images/I/61kTH3RPnOL._AC_UL480_QL65_.jpg'
    },
    {
      p_id: '13',
      product_name: '4700BC Gourmet Popcorn, Himalayan Salt Caramel, Tin',
      product_weight: ' 110g',
      product_price: '250',
      product_image:
        'https://m.media-amazon.com/images/I/61I+SmXnLXL._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
      p_id: '14',
      product_name: 'Unibic Assorted Cookies, 75g (Pack of 10)',
      product_weight: '750 Gram',
      product_price: '180',
      product_image:
        'https://m.media-amazon.com/images/I/71lm53x6QnS._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
      p_id: '15',
      product_name:
        'Shrego Peanut Plus KHARI SING Traditionally Roasted Salted Jumbo Peanuts, Snack And Namkeen Vacuum Packed',
      product_weight: '(400 gm)',
      product_price: '500',
      product_image:
        'https://m.media-amazon.com/images/I/7152Ve9yXbL._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
      p_id: '16',
      product_name:
        'Healthy Treat Gur Chana  Jaggery Coated Chana | Immunity Booster',
      product_weight: '200g',
      product_price: '180',
      product_image:
        'https://m.media-amazon.com/images/I/81Xi5e9LvBL._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
      p_id: '17',
      product_name: 'Postcard Bengaluru Kodubale',
      product_weight: '1Kg',
      product_price: '175',
      product_image:
        'https://m.media-amazon.com/images/I/71xwDa9mcFL._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
      p_id: '18',
      product_name: 'Cadbury Birthday Celebrations Box,',
      product_weight: '430g',
      product_price: '180',
      product_image:
        'https://m.media-amazon.com/images/I/61u958SDQFL._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
      p_id: '19',
      product_name: 'ZOROY Leather finish Basket with assorted goodies',
      product_weight: '-',
      product_price: '240',
      product_image:
        'https://m.media-amazon.com/images/I/81YcOaua+YL._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
      p_id: '20',
      product_name: 'Treseme Shampoo',
      product_weight: '250ml',
      product_price: '235',
      product_image:
        'https://m.media-amazon.com/images/I/718iw9xJ8wL._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
      p_id: '21',
      product_name: 'Cadbury Silk Special Potli',
      product_weight: '342g',
      product_price: '293',
      product_image:
        'https://rukminim1.flixcart.com/image/612/612/j3lwh3k0/shampoo/h/g/b/700-anti-hair-fall-shampoo-himalaya-original-imaeupg7sygzgqej.jpeg?q=70'
    },
    {
      p_id: '22',
      product_name:
        'Chokola Small Gift Hamper Assorted Chocolate Luxury Boxes Tray',
      product_weight: '2packs',
      product_price: '240',
      product_image:
        'https://m.media-amazon.com/images/I/81G707vvc8L._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
      p_id: '23',
      product_name: '4700BC Gourmet Popcorn, Nutty Tuxedo Chocolate, Tin',
      product_weight: '125g ',
      product_price: '235',
      product_image:
        'https://m.media-amazon.com/images/I/61paIp10KxL._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
      p_id: '24',
      product_name: 'Sunfeast Dark Fantasy Choco Fills',
      product_weight: '600 g',
      product_price: '293',
      product_image:
        'https://m.media-amazon.com/images/I/81nvWgzLWEL._AC_UL480_FMwebp_QL65_.jpg'
    }
  ];
}

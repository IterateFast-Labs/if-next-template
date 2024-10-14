import { Poppins } from 'next/font/google';

export const fontSans = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

// import localFont from 'next/font/local';
// export const fontSans = localFont({
//   src: [
//     {
//       path: './LINESeedJP_OTF_EB.woff',
//       weight: '800',
//       style: 'extrabold',
//     },
//     {
//       path: './LINESeedJP_OTF_Bd.woff',
//       weight: '700',
//       style: 'bold',
//     },
//     {
//       path: './LINESeedJP_OTF_Rg.woff',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: './LINESeedJP_OTF_Th.woff',
//       weight: '100',
//       style: 'thin',
//     },
//   ],
//   adjustFontFallback: 'Arial',
//   preload: true,
// });

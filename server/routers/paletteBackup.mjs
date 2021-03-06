const palettes = [
  [
    [49, 65, 90],
    [87, 123, 86],
    [230, 152, 55],
    [198, 98, 38],
    [220, 41, 54],
  ],
  [
    [56, 50, 48],
    [59, 67, 72],
    [102, 101, 102],
    [167, 187, 142],
    [253, 253, 252],
  ],
  [
    [214, 229, 232],
    [125, 186, 172],
    [138, 109, 59],
    [113, 149, 153],
    [38, 31, 39],
  ],
  [
    [254, 74, 73],
    [42, 183, 202],
    [254, 215, 102],
    [230, 230, 234],
    [244, 244, 248],
  ],
  [
    [1, 31, 75],
    [3, 57, 108],
    [0, 91, 150],
    [100, 151, 177],
    [179, 205, 224],
  ],
  [
    [5, 30, 62],
    [37, 30, 62],
    [69, 30, 62],
    [101, 30, 62],
    [133, 30, 62],
  ],
  [
    [74, 78, 77],
    [14, 154, 167],
    [61, 164, 171],
    [246, 205, 97],
    [254, 138, 113],
  ],
  [
    [42, 77, 105],
    [75, 134, 180],
    [173, 203, 227],
    [231, 239, 246],
    [99, 172, 229],
  ],
  [
    [238, 64, 53],
    [243, 119, 54],
    [253, 244, 152],
    [123, 192, 67],
    [3, 146, 207],
  ],
  [
    [255, 255, 255],
    [208, 225, 249],
    [77, 100, 141],
    [40, 54, 85],
    [30, 31, 38],
  ],

  [
    [75, 56, 50],
    [133, 68, 66],
    [255, 244, 230],
    [60, 47, 47],
    [190, 155, 123],
  ],
  [
    [168, 230, 207],
    [220, 237, 193],
    [255, 211, 182],
    [255, 170, 165],
    [255, 139, 148],
  ],

  [
    [209, 17, 65],
    [0, 177, 89],
    [0, 174, 219],
    [243, 119, 53],
    [255, 196, 37],
  ],
  [
    [235, 244, 246],
    [189, 234, 238],
    [118, 180, 189],
    [88, 102, 139],
    [94, 86, 86],
  ],

  [
    [255, 119, 170],
    [255, 153, 204],
    [255, 187, 238],
    [255, 85, 136],
    [255, 51, 119],
  ],

  [
    [237, 201, 81],
    [235, 104, 65],
    [204, 42, 54],
    [79, 55, 45],
    [0, 160, 176],
  ],
  [
    [46, 0, 62],
    [61, 35, 82],
    [61, 30, 109],
    [136, 116, 163],
    [228, 220, 241],
  ],
  [
    [248, 177, 149],
    [246, 114, 128],
    [192, 108, 132],
    [108, 91, 123],
    [53, 92, 125],
  ],
  [
    [153, 184, 152],
    [254, 206, 171],
    [255, 132, 124],
    [232, 74, 95],
    [42, 54, 59],
  ],
  [
    [168, 167, 167],
    [204, 82, 122],
    [232, 23, 93],
    [71, 71, 71],
    [54, 54, 54],
  ],
  [
    [229, 252, 194],
    [157, 224, 173],
    [69, 173, 168],
    [84, 121, 128],
    [89, 79, 79],
  ],
];

export default function generateLocalPalette() {
  return palettes[Math.floor(Math.random() * palettes.length)];
}

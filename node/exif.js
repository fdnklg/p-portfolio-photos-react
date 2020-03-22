const { resolve } = require("path");
const fs = require('fs');
const exif = require("jpeg-exif");
const { readdir } = require("fs").promises;
const Fraction = require("fraction.js");

const c = require('./content.js');
const { content } = c;
const { projects } = content;

// TODO:
// - write readme on how to update the site
// - define namin convention of images
// - think about automating image import

const createExifObj = imgPath => {
  const data = exif.parseSync(imgPath);
  const subExif = data.SubExif;
  const exp = subExif.ExposureTime[0];
  const fraction = Fraction(exp)
    .div(98)
    .mul(98);
  return {
    aperture: subExif.FNumber[0],
    exposure: subExif.ExposureTime[0],
    exposureFraction: fraction.n + "/" + fraction.d,
    focalLength: subExif.FocalLength[0],
    iso: subExif.PhotographicSensitivity
  };
};

const parsePath = path => {
  // match chars until 1st occurenpce of _
  const yearRegEx = /[^_]*/;
  // match chars between 1st and 2nd occurence of _
  const folderRegEx = /(?<=_)[^\_]+/;
  // match chars between 2nd and 3rd occurence of _
  const orderRegEx = /(?:.*?\_){2}(.[^_]*)/
  // match chars between 3nd and 4th occurence of _
  const titleRegEx = /(?:.*?\_){3}(.[^_]*)/

  const order = path.match(orderRegEx)[1];
  const folder = path.match(folderRegEx)[0];
  const year = path.match(yearRegEx)[0];

  const title = path.match(titleRegEx)[1];
  const titleWithoutFileEnding = title.match(/[^.]*/)[0];
  const titleCleared = titleWithoutFileEnding.split('-').join(' ');

  console.log(titleCleared, folder)

  return {
    title: titleCleared,
    order: parseInt(order),
    folder: folder,
    year: parseInt(year),
  }
}

async function* getFiles(dir) {
  const dirents = await readdir(dir, { withFileTypes: true });
  for (const dirent of dirents) {
    const res = resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      yield* getFiles(res);
    } else {
      yield res;
    }
  }
}

const asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

// handler function, that groups
const createMetadata = async (path, folder) => {
  const images = await readdir(path, { withFileTypes: false });
  images.remove('.DS_Store');
  images.sort(function(a, b){
    if(a < b) { return -1; }
    if(a > b) { return 1; }
    return 0;
})
  const parsed = images.map(img => {
    const imgPath = path + '/' + img;
    const exifObj = createExifObj(imgPath);
    const parsedPath = parsePath(img);
    const slicedPath = imgPath.substring(6);
    return {
      ...parsedPath,
      ...exifObj,
      path: slicedPath
    }
  });
  const matchedProject = projects.find(p => p.path === folder);
  matchedProject.media = parsed;
}

const writeFile = async (pathAndFilename, body) => {
  fs.writeFileSync(pathAndFilename, body, err => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}

(async () => {
  const folderArr = ['il', 'mar', 'om', 'ar', 'zaf18', 'us'];
  const saveTo = `${__dirname}/../public/data/data.json`;

  await asyncForEach(folderArr, async (folder) => {
    const path = `public/img/${folder}`;
    const metadata = await createMetadata(path, folder);
  })

  await writeFile(saveTo, JSON.stringify(c.content))
})();



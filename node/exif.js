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

const folder = 'zaf';
const path = `public/img/${folder}`;

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
  // match chars until 1st occurence of _
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

  return {
    title: titleCleared,
    order: parseInt(order),
    folder: folder,
    year: parseInt(year),
  }
}

const write = data => {
  fs.writeFile(`${__dirname}/../public/data/data.json`, `${JSON.stringify(data.content)}`, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
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

(async () => {
  const images = await readdir(path, { withFileTypes: false });
  const parsed = images.map(img => {
    const imgPath = path + '/' + img;
    const exifObj = createExifObj(imgPath);
    const parsedPath = parsePath(img);
    return {
      ...parsedPath,
      ...exifObj,
      path: imgPath
    }
  });
  const matchedProject = projects.find(p => p.path === folder);
  matchedProject.media = parsed;
  write(c)
})();



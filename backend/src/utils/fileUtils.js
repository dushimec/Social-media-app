import fs from 'fs';
import path from 'path';

const uploadFile = (file, folderPath) => {
  return new Promise((resolve, reject) => {
    const { name, data } = file;
    const filePath = path.join(folderPath, name);

    fs.writeFile(filePath, data, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(filePath);
      }
    });
  });
};

const deleteFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.unlink(filePath, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

export { uploadFile, deleteFile };

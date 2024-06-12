import { uploadFile } from '../utils/fileUtils.js';

const upload = async (req, res, next) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ message: 'No files were uploaded.' });
    }

    const file = req.files.file;
    const folderPath = './uploads'; 
    const filePath = await uploadFile(file, folderPath);

    req.filePath = filePath;
    next();
  } catch (error) {
    next(error);
  }
};

export { upload };

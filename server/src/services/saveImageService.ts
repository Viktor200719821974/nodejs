import { UploadedFile } from 'express-fileupload';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

class SaveImageService {
    async saveImage(image: UploadedFile, answer: string | undefined): Promise<string> {
        const fileExtension = path.extname(image.name);
        const fileName = `${answer}${uuidv4()}Image${fileExtension}`;
        const uploadPath = path.join(__dirname, `../static/${fileName}`);
        image.mv(uploadPath, (err) => {
            if (err) {
                // eslint-disable-next-line no-console
                console.log(err);
            }
        });
        return fileName;
    }
}

export const saveImageService = new SaveImageService();
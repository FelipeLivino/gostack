const multer = require('multer');
const path = require('path');

module.exports = {
    storage : multer.diskStorage({
        destination: path.resolve(__dirname,'..','..','uploads'),
        filename: (req,file,cb)=>{
            const extName = path.extname(file.originalname);
            const baseName = path.basename(file.originalname,extName);
            
            
            cb(null,`${baseName}-${Date.now()}${extName}`);
        }
    }
    ),

}  
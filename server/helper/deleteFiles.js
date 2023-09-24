const fs = require("fs");

module.exports = {
    deleteFiles: (files) => {
        console.log("FILES >>>", files);
        files.image.forEach((v) => {
            fs.unlinkSync(v.path);
        });
    },
};

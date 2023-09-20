const db = require("./../models");
const { deleteFiles } = require("./../helper/deleteFiles");

module.exports = {
    updateImage: async (req, res, next) => {
        const { id } = req.query;
        try {
            const dataImage = await db.user.findOne({
                where: { id },
            });

            const path = req.files.images[0].path;
            await db.user.update({ profile_picture: path }, { where: { id } });
            deleteFiles({ images: [{ path: dataImage.profile_picture }] });

            res.status(200).send({
                isError: false,
                message: "Update Image Success",
                data: null,
            });
        } catch (error) {
            deleteFiles(req.files);
            next(error);
        }
    },
};

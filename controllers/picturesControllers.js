const Picture = require("../models/Picture.js")
const fs = require("fs")

exports.create = async (req, res) => {
    try {
        const { name } = req.body;
        const file = req.file;

        const picture = new Picture({
            name,
            src: file.path,
        });

        await picture.save();
        res.status(203).json({ message: `Imagem salva ${picture}` })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Erro ao enviar a imagem tente denovo' })
    }
};
exports.findAll = async (req, res) => {
    try {
        const pictures = await Picture.find()
        if (!pictures) {
            return res.status(404).json({ message: `Não foram encontrado imagens ${pictures}` })
        }
        return res.status(200).json({ pictures })
    } catch (error) {
        console.log(error)
    }
};

exports.delete = async (req, res) => {
    try {
        const picture = await Picture.findById(req.params.id)
        if (!picture) {
            return res.status(404).json({ message: `imagem não encontrada` })
        }

        if (picture) {
                await Picture.deleteOne(picture)
                fs.unlinkSync(picture.src)
                return res.status(200).json({ message: `Imagem excluida` })
            }else {
                return res.status(500).json({message: `houve um erro inesperado`})
            }
    } catch (error) {
        console.log(error)
    }
}
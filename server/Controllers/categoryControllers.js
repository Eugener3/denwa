const Category = require('../Models/Category')

module.exports = {
    getAll: async (req, res) => {
        try {
            const candidates = await Category.find()
            if (candidates[0]) {
                res.status(200).json(candidates)
            } else {
                res.status(404).json({
                    message: "Категории не найдены"
                })
            }
        } catch (error) {
            res.status(400).json({
                message: "Ошибка при запросе всех категорий"
            })
        }
    },
    getById: async (req, res) => {
        try {
            const candidate = await Category.findById(req.params.id)
            if (candidate) {
                res.status(200).json(candidate)
            } else {
                res.status(404).json({
                    message: "Категория не найдена"
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "Ошибка при запросе категории"
            })
        }
    },
    create: async (req, res) => {
        try {
            const candidate = await Category.findOne({nameCategory: req.body.nameCategory})
            if (candidate) {
                res.status(409).json({
                    message: "Такая категория уже существует"
                })
            } else {
                    const category = new Category({
                        nameCategory: req.body.nameCategory
                    })
                    await category.save()
                    res.status(200).json({
                        message: "Категория успешно создана"
                    })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "Ошибка при добавлении категории"
            })
        }
    },
    update: async (req, res) => {
        try {
            const candidate = await Category.findById(req.params.id)
            if (candidate) {
                await Category.updateOne({_id: req.params.id}, {$set: {nameCategory: req.body.nameCategory}})
                res.status(200).json({
                    message: "Категория успешно обнавлена"
                })
            } else {
                res.status(404).json({
                    message: "Категория не найдена"
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "Ошибка при обновлении категории"
            })
        }
    },
    delete: async (req, res) => {
        try {
            const candidate = await Category.findById(req.params.id)
            if (candidate) {
                await Category.findByIdAndDelete(req.params.id)
                res.status(200).json({
                    message: "Категория успешно удалена"
                })
            } else {
                res.status(404).json({
                    message: "Категория не найдена"
                })
            }
        } catch (error) {
            res.status(400).json({
                message: "Ошибка при удалении категории"
            })
        }
    }

}
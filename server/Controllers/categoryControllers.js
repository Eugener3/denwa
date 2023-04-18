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
                message: "Ошибка в запросе всех категорий"
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
                try {
                    const category = new Category({
                        nameCategory: req.body.nameCategory
                    })
                    await category.save()
                    res.status(200).json({
                        message: "Категория успешно создана"
                    })
                } catch (error) {
                    console.log(error)
                    res.status(400).json({
                        message: "Ошибка при сохранении категории"
                    })
                }
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "Ошибка при добавлении категории"
            })
        }
    }

}
const CategoryController = async (connection) => { 
    const exists = await connection.execute(`Select table_names from user_tables where table_name = 'category';`);
    if(!exists) {
        connection.execute(`Create table category (
                category_id INTEGR primary key,
                category_name VARCHAR(50)
            );`)
    }
    const createCategory = async (req,res) => {

        const CategoryData = {
            category_name: req.body.category_name
        }
        const categ = await connection.execute(`Insert into category values(category_name) values(:category_name)`,CategoryData,{autoCommit:true})
        .then((result)=>{
            res.json(200).send(result)
        })
        .catch((error)=> {
            res.json(300).send("Errors:",error);
        })
    }

    const updateCategory = async (req,res) => {
        const CategoryData = {
            category_name: req.body.category_name,
            category_id: req.body.category_id
        }
        const categ = connection.execute(`Update table category set category_name = (:category_name) where category_id = (:category_id) `,CategoryData, {autoCommit: true})
        .then((result)=>{
            res.json(200).send(categ);
        })
        .catch((error)=> {
            res.json(300).send("Errors:", error);
        })
    }

    const deleteCategory = async (req,res) => {

        const categ = category.destroy({where:{id:req.paramas.id}})

        res.json(200).send("Category Deleted !")
    }

    const reviewCategory = async (req,res) => {

        const categ = category.findOne({where:{id:req.paramas.id}})

        res.json(200).send(categ)
    }
    return {
        createCategory,
        updateCategory,
        deleteCategory,
        reviewCategory
    }
};
module.exports = CategoryController;
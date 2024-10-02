const CategoryController = async (connection) => { 
    const exists = await connection.execute(`Select table_name from user_tables where table_name = 'category';`);
    if(exists.rows.length === 0) {
        await connection.execute(`Create table category (
                category_id INTEGER primary key,
                category_name VARCHAR(50)
            );`)
    }
    const createCategory = async (req,res) => {
        try{
            const CategoryData = {
                category_name: req.body.category_name
            }
            const result = await connection.execute(`Insert into category(category_name) values(:category_name)`,CategoryData,{autoCommit:true})
            res.status(200).send(result)
        }
        catch(error) {
            res.status(300).send("Errors:",error);
        }
    }

    const updateCategory = async (req,res) => {
        try {
            const CategoryData = {
                category_name: req.body.category_name,
                category_id: req.body.category_id
            }
            const categ = await connection.execute(`Update category set category_name = (:category_name) where category_id = (:category_id) `,CategoryData, {autoCommit: true})
            res.status(200).send(categ);
        }
        catch(error) {
            res.status(300).send("Errors:", error);
        }
    }

    const deleteCategory = async (req,res) => {
        try {
        const categ = await connection.execute(`Delete from category where category_id=:category_id`,{category_id: req.body.category_id},{autoCommit: true})
        res.status(200).send("Category Deleted !")
        }
        catch(errors){
            res.status(300).send("Erros while deleting category: ",errors)
        }
    }

    const reviewCategory = async (req,res) => {
        try{
        const categ = await connection.execute(`Select * from category where category_id = :category_id`,{category_id: req.body.category_id},{autoCommit: true})
        res.status(200).send(categ)
        }
        catch(errors){
            res.status(300).send("Errors while reviewing category: ",errors)
        }
    }
    return {
        createCategory,
        updateCategory,
        deleteCategory,
        reviewCategory
    }
};
module.exports = CategoryController;
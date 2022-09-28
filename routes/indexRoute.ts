import { Router } from 'express'
import { addNewProduct, deleteDataOfProduct, sendDataOfProduct } from '../controllers/indexCont'
const router = Router()

router
    .get('/send-data', sendDataOfProduct) //    /product/send-data
    .delete('/delete-data', deleteDataOfProduct)
    .post('/add-new-product', addNewProduct)
// .post('/update-data', sendDataOfProduct)  //   /product/update-data


export default router

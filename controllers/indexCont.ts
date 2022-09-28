// export const nameOfFunc = async (req, res) => {
//     try {

//     } catch (error) {
// console.log(error)
// res.send(error)
//     }
// }
import { v4 as uuidv4 } from 'uuid';

let products = [
    { id: uuidv4(), name: "Apple", price: 5 },
    { id: uuidv4(), name: "Banana", price: 10 },
    { id: uuidv4(), name: "Oraange", price: 53 },
]

export const sendDataOfProduct = async (req, res) => {
    try {
        res.send(products)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

export const deleteDataOfProduct = async (req, res) => {
    try {
        const { id } = req.body

        products = products.filter(item => item.id !== id)
        // console.log(products)

        res.send(products)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

export const addNewProduct = async (req, res) => {
    try {
        const { name, price } = req.body

        products.push({ id: uuidv4(), name, price })

        res.send(products)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}


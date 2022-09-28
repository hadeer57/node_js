const root = document.getElementById('root')


const getDataFromServer = async () => {
    const { data } = await axios.get('/product/send-data')
    render(data)
}

const removeProductFromServer = async (id) => {
    const { data } = await axios.delete('/product/delete-data', { data: { id } })
    render(data)
}

const addNewProductToServer = async (event) => {
    event.preventDefault();

    // console.log(event)
    const name = event.target.elements.name.value
    const price = event.target.elements.price.value

    const { data } = await axios.post('/product/add-new-product', { name, price })
    // console.log(data)
    render(data)

    event.target.reset()
}

const render = (products) => {
    let html = ''

    products.forEach(el => {
        html += `
            <div>
                <h3>${el.name}</h3>
                <p>${el.price}</p>
                <button onclick="removeProductFromServer('${el.id}')">Delete</button>
            </div>
        `
    });

    root.innerHTML = html
}
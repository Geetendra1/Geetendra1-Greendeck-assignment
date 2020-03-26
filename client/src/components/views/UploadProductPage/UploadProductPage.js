import React, { useState } from 'react'
import { Typography, Button, Form, message, Input, Icon } from 'antd';
import FileUpload from '../../utils/FileUpload'
import Axios from 'axios';

const { Title } = Typography;
const { TextArea } = Input;

const Brands = [
    { key: 1, value: "Adidas" },
    { key: 2, value: "Nike" },
    { key: 3, value: "Levis" },
    { key: 4, value: "Polo" },
    { key: 5, value: "Zara" },
    { key: 6, value: "Tommy Hilfiger" },
    { key: 7, value: "Puma" },
    { key: 8, value: "Calvin" },
    { key: 9, value: "Apple" },
    { key: 10, value: "Gucci" },
    { key: 11, value: "parada" }
]



function UploadProductPage(props) {

    const [ProductNameValue, setProductNameValue] = useState("")
    const [DescriptionValue, setDescriptionValue] = useState("")
    const [PriceValue, setPriceValue] = useState(0)
    const [DiscountValue, setDiscountValue] = useState(0)
    const [BrandValue, setBrandValue] = useState(1)
    const [RetailerNameValue, setRetailerNameValue] = useState("")
    const [Images, setImages] = useState([])


    const onPoductNameChange = (event) => {
        setProductNameValue(event.currentTarget.value)
    }
    
    const OnRetailerNameChange = (event) => {
        setRetailerNameValue(event.currentTarget.value)
    }

    const onDiscountChange = (event) => {
        setDiscountValue(event.currentTarget.value)
    }

    const onDescriptionChange = (event) => {
        setDescriptionValue(event.currentTarget.value)
    }

    const onPriceChange = (event) => {
        setPriceValue(event.currentTarget.value)
    }

    const onBrandsSelectChange = (event) => {
        setBrandValue(event.currentTarget.value)
    }

    const updateImages = (newImages) => {
        setImages(newImages)
    }
    const onSubmit = (event) => {
        event.preventDefault();


        if (!ProductNameValue || !DescriptionValue || !PriceValue ||
            !BrandValue || !Images || !DiscountValue || !RetailerNameValue) {
            return alert('fill all the fields first!')
        }

        const variables = {
            writer: props.user.userData._id,
            product: ProductNameValue,
            description: DescriptionValue,
            price: PriceValue,
            discount: DiscountValue,
            retailer : RetailerNameValue,
            images: Images,
            brands: BrandValue,
        }

        Axios.post('/api/product/uploadProduct', variables)
            .then(response => {
                if (response.data.success) {
                    alert('Product Successfully Uploaded')
                    //after successfull upload route to landing page
                    props.history.push('/')
                } else {
                    alert('Failed to upload Product')
                }
            })

    }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2}> Upload Product</Title>
            </div>


            <Form onSubmit={onSubmit} >

                {/* DropZone */}
                <FileUpload refreshFunction={updateImages} />

                <br />
                <br />
                <label>Product Name</label>
                <Input
                    onChange={onPoductNameChange}
                    value={ProductNameValue}
                />

                <br />
                <br />
                <label>Retailer's  Name</label>
                <Input
                    onChange={OnRetailerNameChange}
                    value={RetailerNameValue}
                />
                <br />
                <br />
                <label>Description</label>
                <TextArea
                    onChange={onDescriptionChange}
                    value={DescriptionValue}
                />
                <br />
                <br />
                <label>Price($)</label>
                <Input
                    onChange={onPriceChange}
                    value={PriceValue}
                    type="number"
                />
                <br /><br />
                <label>Discount(%)</label>
                <Input
                    onChange={onDiscountChange}
                    value={DiscountValue}
                    type="number"
                />
                <br /><br />
                <select onChange={onBrandsSelectChange}>
                    {Brands.map(item => (
                        <option key={item.key} value={item.key}>{item.value} </option>
                    ))}
                </select>
                <br />
                <br />

                <Button
                    onClick={onSubmit}
                >
                    Submit
                </Button>

            </Form>

        </div>
    )
}

export default UploadProductPage

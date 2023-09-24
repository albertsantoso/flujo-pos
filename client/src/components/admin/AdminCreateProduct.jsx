/* eslint-disable react/prop-types */
import { AiFillCloseCircle } from 'react-icons/ai'
import toast, { Toaster } from 'react-hot-toast'

import './AdminCreateProduct.css'
import FileUpload from "../shared/UI/FileUpload";

import { useFormik } from 'formik'

import { useEffect, useState } from 'react';
import { Instance } from '../../api/instance';

const AdminCreateProduct = ({ handleOpenModal }) => {
    const [productImage, setProductImage] = useState(null)
    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            const { data } = await Instance(accessToken).get(`categories`);

            setCategories(data.data);
        } catch (err) {
            console.log(err);
        }
    };

    const onGettingProductImageFromProps = (image) => {
        setProductImage(image)
    }

    const formik = useFormik({
        initialValues: {
            product_name: "",
            product_description: "",
            product_price: 0,
            categoryId: null,
        },
        onSubmit: async (values) => {
            onCreateProduct(values)
        }
    })

    const onCreateProduct = async (values) => {
        try {
            const { product_name, product_description, product_price, categoryId } = values;

            if (!product_name || !product_description || !product_price) {
                toast.error('Please fill in all form fields');
                return; // Stop further execution
            }

            const newProductData = {
                product_name,
                product_description,
                product_price,
                categoryId,
            }

            const newProductDataJSON = JSON.stringify(newProductData)

            const fd = new FormData();
            fd.append('data', newProductDataJSON);

            if (!productImage) {
                fd.append('image', null);
            } else {
                fd.append('image', productImage);
            }

            const accessToken = localStorage.getItem("accessToken")

            const createProduct = await Instance(accessToken).post('products', fd);

            if (createProduct.status === 201) {
                toast.success('Product created successfully');

                setTimeout(() => {
                    window.location.reload(false);
                }, 1500);
            } else {
                toast.error('Error creating product');
            }

            return createProduct;
        } catch (error) {
            console.log(error);
        }
    }

    const handleFormInput = (event) => {
        const { target } = event
        formik.setFieldValue(target.name, target.value)
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    useEffect(() => {
        console.log("<<<", productImage);
    }, [productImage])

    return (
        <>
            <Toaster />
            <main className="admin-create-product w-[692px] h-full m-auto flex justify-center items-center">
                <div className="admin-create-product-container w-full bg-white p-8 border-2 rounded-xl">
                    <div className="main-heaading mb-8 flex justify-between">
                        <div className="heading-title">
                            <h1 className="font-bold text-2xl text-neutral-800">
                                Create Product
                            </h1>
                        </div>
                        <div className="close-button">
                            <button onClick={handleOpenModal}>
                                <span>
                                    <AiFillCloseCircle size={30} className="hover:text-red-500" />
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="main-content">
                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-container flex w-full justify-between">
                                <div className="left-form mr-8 flex flex-col gap-4">
                                    <div className="form-group flex flex-col">
                                        <label htmlFor="product_name" className="font-medium mb-2">Product name</label>
                                        <input type="text" name="product_name" id="product_name" className="w-full border-2 px-4 py-3 font-bold text-neutral-600 rounded-xl placeholder:font-medium" placeholder="ex. McFlurry Oreo" onChange={handleFormInput} />
                                    </div>
                                    <div className="form-group flex flex-col">
                                        <label htmlFor="categoryId" className="font-medium mb-2">Product category</label>
                                        <select className="custom-select font-semibold text-neutral-600 bg-white border-2 rounded-xl px-4 min-w-[120px] h-[60px] flex items-center justify-center" name='categoryId' id='categoryId' onChange={handleFormInput}>
                                            <option value="" selected disabled>Select category</option>
                                            {categories?.map((category) => {
                                                return (
                                                    <>
                                                        <option value={category.id}>{category.category_name}</option>
                                                    </>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <div className="form-group flex flex-col">
                                        <label htmlFor="product_description" className="font-medium mb-2">Description</label>
                                        <textarea id="product_description" name="product_description" maxLength={200} placeholder="ex. Sweet and cold, Oreo." className="max-h-[120px] w-full border-2 rounded-xl px-4 py-3 font-medium" onChange={handleFormInput}></textarea>
                                    </div>
                                    <div className="form-group flex flex-col">
                                        <label htmlFor="product_price" className="font-medium mb-2">Price</label>
                                        <input id="product_price" type="number" name="product_price" className="w-full border-2 px-4 py-4 rounded-xl placeholder:font-medium font-bold" placeholder="Set the price" onChange={handleFormInput} />
                                    </div>
                                </div>
                                <div className="right-form flex flex-col justify-between">
                                    <div className="form-group">
                                        <div className="form-group-title mb-2">
                                            <h2 className="font-medium">Picture</h2>
                                        </div>
                                        <FileUpload handleProductImage={onGettingProductImageFromProps} />
                                    </div>
                                    <div className="form-action-button">
                                        <button type="submit" className="bg-primary w-full py-4 rounded-lg">
                                            <span className="font-bold text-white drop-shadow-md">
                                                Add new product
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
};

export default AdminCreateProduct;

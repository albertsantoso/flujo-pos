/* eslint-disable react/prop-types */
import { AiFillCloseCircle } from 'react-icons/ai'
import toast, { Toaster } from 'react-hot-toast'

import './AdminCreateProduct.css'

import { useFormik } from 'formik'

import { useEffect, useState } from 'react';
import { Instance } from '../../api/instance';
import FileUploadUpdate from '../shared/UI/FileUploadUpdate';

const AdminUpdateProduct = ({ handleOpenModal, productId }) => {
    const [productImageUpdate, setProductImageUpdate] = useState(null)
    const [categories, setCategories] = useState([]);
    const [thisProduct, setThisProduct] = useState(null)
    const [changeProductPicture, setChangeProductPicture] = useState(false)
    const [preview, setPreview] = useState(null);

    const fetchCategories = async () => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            const { data } = await Instance(accessToken).get(`categories`);

            setCategories(data.data);
        } catch (err) {
            console.log(err);
        }
    };

    const onGettingProductImageFromPropsUpdate = (image) => {
        console.log("JALAN");
        setProductImageUpdate(image)
        console.log("BELOM");
        setChangeProductPicture(false)
        console.log("UDAH");
        setPreview(URL.createObjectURL(image))
    }

    const fetchThisProduct = async () => {
        try {
            const { data } = await Instance().get(`products/${productId}`);

            console.log("🚀 ~ file: AdminUpdateProduct.jsx:32 ~ fetchThisProduct ~ data:", data)
            setThisProduct(data.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchThisProduct()
        fetchCategories()
    }, [productId])

    useEffect(() => {
        // Initialize the form's initial values based on the fetched data
        if (thisProduct) {
            formik.setValues({
                product_name: thisProduct.product_name || "",
                product_description: thisProduct.product_description || "",
                product_price: thisProduct.product_price || 0,
                categoryId: thisProduct.categoryId || null,
                status: thisProduct.status || "Active"
            });
        }
    }, [thisProduct]);

    const formik = useFormik({
        // Leave initial values empty here
        initialValues: {
            product_name: "",
            product_description: "",
            product_price: 0,
            categoryId: null,
            status: "Active"
        },
        onSubmit: async (values) => {
            onUpdateProduct(values);
        },
    });

    const onUpdateProduct = async (values) => {
        try {
            const { product_name, product_description, product_price, categoryId, status } = values;

            if (!product_name || !product_description || !product_price) {
                toast.error('Please fill in all form fields');
                return; // Stop further execution
            }

            const newProductData = {
                product_name,
                product_description,
                product_price,
                categoryId,
                status,
            }

            const newProductDataJSON = JSON.stringify(newProductData)

            const fd = new FormData();
            fd.append('data', newProductDataJSON);

            if (!productImageUpdate) {
                fd.append('image', null);
            } else {
                fd.append('image', productImageUpdate);
            }

            const accessToken = localStorage.getItem("accessToken")

            const updateProduct = await Instance(accessToken).patch(`products/${productId}`, fd);

            if (updateProduct.status === 201) {
                toast.success('Product updated successfully');

                setTimeout(() => {
                    window.location.reload(false);
                }, 1500);
            } else {
                toast.error('Error creating product');
            }

            return updateProduct;
        } catch (error) {
            console.log(error);
        }
    }

    const handleFormInput = (event) => {
        const { target } = event
        formik.setFieldValue(target.name, target.value)
    }

    return (
        <>
            <Toaster />
            <main className="admin-create-product w-[820px] h-full m-auto flex justify-center items-center">
                <div className="admin-create-product-container w-full bg-white p-8 border-2 rounded-xl">
                    <div className="main-heaading mb-8 flex justify-between">
                        <div className="heading-title">
                            <h1 className="font-bold text-2xl text-neutral-800">
                                Update Product
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
                        <form
                            onSubmit={formik.handleSubmit}
                        >
                            <div className="form-container flex w-full justify-between">
                                <div className="left-form mr-8 flex flex-col gap-4 flex-grow">
                                    <div className="form-group flex flex-col">
                                        <label htmlFor="product_name" className="font-medium mb-2">Product name</label>
                                        <input type="text" name="product_name" id="product_name" className="w-full border-2 px-4 py-3 font-bold text-neutral-600 rounded-xl placeholder:font-medium" placeholder="ex. McFlurry Oreo"
                                            onChange={handleFormInput} value={formik.values.product_name}
                                        />
                                    </div>
                                    <div className="form-group flex flex-col">
                                        <label htmlFor="categoryId" className="font-medium mb-2">Product category</label>
                                        <select className="custom-select font-semibold text-neutral-600 bg-white border-2 rounded-xl px-4 min-w-[120px] h-[60px] flex items-center justify-center" name='categoryId' id='categoryId'
                                            onChange={handleFormInput} defaultValue={formik.values.categoryId}
                                        >
                                            {categories?.map((category) => {
                                                return (
                                                    <>
                                                        {
                                                            category.id === formik.values.categoryId ? (
                                                                <>
                                                                    <option selected value={category.id}>{category.category_name}</option>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <option value={category.id}>{category.category_name}</option>
                                                                </>
                                                            )
                                                        }
                                                    </>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <div className="form-group flex flex-col">
                                        <label htmlFor="product_description" className="font-medium mb-2">Description</label>
                                        <textarea id="product_description" name="product_description" maxLength={200} placeholder="ex. Sweet and cold, Oreo." className="max-h-[120px] w-full border-2 rounded-xl px-4 py-3 font-medium"
                                            onChange={handleFormInput} value={formik.values.product_description}
                                        ></textarea>
                                    </div>
                                    <div className="form-group flex flex-col">
                                        <label htmlFor="product_price" className="font-medium mb-2">Price</label>
                                        <input id="product_price" type="number" name="product_price" className="w-full border-2 px-4 py-4 rounded-xl placeholder:font-medium font-bold" placeholder="Set the price"
                                            onChange={handleFormInput} value={formik.values.product_price}
                                        />
                                    </div>
                                </div>
                                <div className="right-form flex flex-col justify-between w-[320px]">
                                    <div className="form-group">
                                        <div className="form-group-title mb-2 flex">
                                            <h2 className="font-medium">Picture</h2>
                                        </div>
                                        <div className="image-wrapper">
                                            {
                                                !changeProductPicture ? (
                                                    <>
                                                        <div className="img-wrapper border-2 rounded-xl w-[320px] h-[284px] flex justify-center items-center mb-2">
                                                            {
                                                                preview ? (
                                                                    <img src={preview} alt="" className='rounded-xl w-full h-full object-cover' />
                                                                ) : (
                                                                    <img src={`http://localhost:5000/${thisProduct?.product_image.substring(7)}`} alt="" className='rounded-xl w-full h-full object-cover' />
                                                                )
                                                            }
                                                        </div>
                                                        <button className='font-medium text-blue-500' onClick={() => setChangeProductPicture(true)}>Change product picture</button>
                                                    </>
                                                ) : (
                                                    <FileUploadUpdate handleProductImageUpdate={onGettingProductImageFromPropsUpdate} />
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className="form-group flex flex-col">
                                        <label htmlFor="categoryId" className="font-medium mb-2">Status</label>
                                        <select className="custom-select font-semibold text-neutral-600 bg-white border-2 rounded-xl px-4 min-w-[120px] h-[60px] flex items-center justify-center" name='categoryId' id='categoryId'
                                            onChange={handleFormInput} defaultValue={formik.values.categoryId}
                                        >
                                            {
                                                thisProduct?.status == "Active" ? (
                                                    <>

                                                        <option selected value={"Active"}>Active</option>
                                                        <option value={"Inactive"}>Inactive</option>
                                                    </>
                                                ) : (
                                                    <>
                                                        <option value={"Active"}>Active</option>
                                                        <option selected value={"Inactive"}>Inactive</option>
                                                    </>
                                                )
                                            }
                                        </select>
                                    </div>
                                    <div className="form-action-button">
                                        <button type="submit" className="bg-primary w-full py-[17px] rounded-xl">
                                            <span className="font-bold text-white drop-shadow-md">
                                                Save changes
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

export default AdminUpdateProduct;

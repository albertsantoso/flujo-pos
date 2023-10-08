import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

import { useEffect, useState } from "react";
import { Instance } from "../../api/instance";
import { useFormik } from 'formik';

const AdminProductCategory = () => {
    const [categories, setCategories] = useState([]);
    const [onEdit, setOnEdit] = useState(false)
    const [editCategoryId, setEditCategoryId] = useState(null);
    const [onAdd, setOnAdd] = useState(false)

    const formik = useFormik({
        initialValues: {
            id: null,
            category_name: ""
        },
        onSubmit: async (values) => {
            await onUpdateCategory(editCategoryId, values.category_name);
            setOnEdit(false);
        }
    })

    const formikAddCategory = useFormik({
        initialValues: {
            newCategoryName: "",
        },
        onSubmit: (values) => {
            // Call the onAddCategory function with the new category name
            onAddCategory(values.newCategoryName);
        },
    });

    const fetchCategories = async () => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            const { data } = await Instance(accessToken).get(`categories`);

            setCategories(data.data);
        } catch (err) {
            console.log(err);
        }
    };

    const onDeleteCategory = async (_categoryId) => {
        try {
            const accessToken = localStorage.getItem('accessToken');

            const result = await Swal.fire({
                title: 'Are you sure?',
                text: 'You won\'t be able to revert this!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'Cancel' // Add a cancel button
            });

            if (result.isConfirmed) {
                await Instance(accessToken).delete(`categories/${_categoryId}`);

                // Remove the deleted category from the state
                setCategories((prevCategories) =>
                    prevCategories.filter((category) => category.id !== _categoryId)
                );

                // Show a success message
                Swal.fire('Deleted!', 'Your category has been deleted.', 'success');
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                // The user clicked the cancel button
                Swal.fire('Cancelled', 'Your category deletion was cancelled.', 'info');
            }
        } catch (error) {
            console.log(error);
        }
    }

    const onUpdateCategory = async (_categoryId, newName) => {
        try {
            const accessToken = localStorage.getItem('accessToken');

            await Instance(accessToken).patch(`categories/${_categoryId}`, { category_name: newName });

            setCategories((prevCategories) =>
                prevCategories.map((category) =>
                    category.id === _categoryId
                        ? { ...category, category_name: newName }
                        : category
                )
            );

            setOnEdit(false);
        } catch (error) {
            console.log(error);
        }
    }

    const onAddCategory = async (newCategoryName) => {
        try {
            const accessToken = localStorage.getItem('accessToken');

            if (!newCategoryName) {
                Swal.fire('Error', 'Please enter a category name.', 'error');
                return;
            }

            const response = await Instance(accessToken).post(`categories`, { category_name: newCategoryName });

            if (response.status === 201) {
                fetchCategories();
                formikAddCategory.resetForm();
                Swal.fire('Success', 'New category added successfully.', 'success');
            } else {
                console.log(response);
                Swal.fire('Error', 'Failed to add a new category.', 'error');
            }

            setTimeout(() => {
                window.location.reload()
            }, 1000);
        } catch (error) {
            console.error(error);
            Swal.fire('Error', 'An error occurred while adding the category.', 'error');
        }
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    return (
        <>
            <div className="admin-product-category">
                <div className="admin-product-category-container">
                    <div className="title flex items-center">
                        <h2 className="font-bold text-xl mr-4">Product Categories</h2>
                        <button className="bg-primary p-2 rounded-lg" onClick={() => setOnAdd(!onAdd)}>
                            <span className="font-medium text-white drop-shadow-md">
                                + Add new category
                            </span>
                        </button>
                    </div>
                    {onAdd ? (
                        <form className='my-8' onSubmit={formikAddCategory.handleSubmit}>
                            <input
                                type="text"
                                name="newCategoryName"
                                value={formikAddCategory.values.newCategoryName}
                                onChange={formikAddCategory.handleChange}
                                className='border-2 w-[194px] h-[50px] py-2 px-4 rounded-lg'
                            />
                            <button
                                type="submit"
                                className="w-[80px] h-[50px] bg-green-400 rounded-lg ml-2"
                            >
                                <span className="font-medium text-white drop-shadow-md">Add</span>
                            </button>
                            <button
                                type="button"
                                className="w-[80px] h-[50px] bg-neutral-400 rounded-lg mx-2"
                                onClick={() => {
                                    setOnAdd(false);
                                    formikAddCategory.resetForm();
                                }}
                            >
                                <span className="font-medium text-white drop-shadow-md">Cancel</span>
                            </button>
                        </form>
                    ) : null}
                    <div className="category-list">
                        {categories?.map((category) => (
                            <div className="category-card flex items-center my-4" key={category.id}>
                                {onEdit && editCategoryId === category.id ? (
                                    <form onSubmit={formik.handleSubmit}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                formik.handleSubmit();
                                            } else if (e.key === 'Escape') {
                                                setOnEdit(false);
                                                formik.resetForm();
                                                setEditCategoryId(null);
                                            }
                                        }}>
                                        <input
                                            type="text"
                                            name="category_name"
                                            onChange={formik.handleChange}
                                            value={formik.values.category_name}
                                            className='border-2 w-[194px] h-[76px] px-4 rounded-xl'
                                        />
                                        <button
                                            type="submit"
                                            className="w-[80px] h-[50px] bg-green-400 rounded-lg ml-2"
                                        >
                                            <span className="font-medium text-white drop-shadow-md">Save</span>
                                        </button>
                                        <button
                                            type="button"
                                            className="w-[80px] h-[50px] bg-neutral-400 rounded-lg mx-2"
                                            onClick={() => {
                                                setOnEdit(false);
                                                formik.resetForm();
                                                setEditCategoryId(null); // Reset editCategoryId
                                            }}
                                        >
                                            <span className="font-medium text-white drop-shadow-md">Cancel</span>
                                        </button>
                                    </form>
                                ) : (
                                    <>
                                        <button
                                            type="button"
                                            className="category-name bg-primary px-8 py-6 w-[194px] flex justify-center items-center shadow-md rounded-xl"
                                        >
                                            <span className="font-bold text-lg text-white drop-shadow-md">
                                                {category.category_name}
                                            </span>
                                        </button>
                                        <div className="actions">
                                            <button
                                                className="w-[80px] h-[50px] bg-blue-400 rounded-lg ml-2"
                                                onClick={() => {
                                                    setOnEdit(true);
                                                    setEditCategoryId(category.id); // Set editCategoryId here
                                                    formik.setFieldValue('category_name', category.category_name);
                                                }}
                                            >
                                                <span className="font-medium text-white drop-shadow-md">Edit</span>
                                            </button>
                                            <button
                                                className="w-[80px] h-[50px] bg-red-400 rounded-lg mx-2"
                                                onClick={() => onDeleteCategory(category.id)}
                                            >
                                                <span className="font-medium text-white drop-shadow-md">Delete</span>
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div >
        </>
    )
}

export default AdminProductCategory
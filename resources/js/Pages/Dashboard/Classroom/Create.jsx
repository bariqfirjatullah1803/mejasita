import InputLabel from '@/Components/InputLabel.jsx';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Button, Input, Select, Textarea } from '@headlessui/react';
import { Link, router, usePage } from '@inertiajs/react';
import { useRef, useState } from 'react';

function Create({ categories }) {
    const { errors } = usePage().props;

    const [values, setValues] = useState({
        name: null,
        description: null,
        code: null,
        category: null
    });

    function handleChange(e) {
        setValues((values) => ({
            ...values,
            [e.target.id]: e.target.value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(values);
        router.post('/dashboard/classroom', values);
    }

    return (
        <AuthenticatedLayout>
            <div className={'container mx-auto'}>
                <div className={'mt-10 rounded-lg bg-white p-10 text-accent'}>
                    <form
                        onSubmit={handleSubmit}
                        className={'flex flex-col gap-y-4'}
                    >
                        <h1 className={'text-lg font-bold'}>
                            Classroom Create Form
                        </h1>
                        <hr />
                        <div className={'flex flex-col gap-y-3'}>
                            <InputLabel>Name</InputLabel>
                            <Input
                                id={'name'}
                                type={'text'}
                                className={'h-10 w-full rounded-lg'}
                                required
                                onChange={handleChange}
                            ></Input>
                            {errors.name && <div>{errors.name}</div>}
                        </div>
                        <div className={'flex flex-col gap-y-3'}>
                            <InputLabel>Description</InputLabel>
                            <Textarea
                                id={'description'}
                                type={'text'}
                                className={'w-full rounded-lg'}
                                onChange={handleChange}
                            ></Textarea>
                            {errors.description && (
                                <div>{errors.description}</div>
                            )}
                        </div>
                        <div className={'flex flex-col gap-y-3'}>
                            <InputLabel>Code</InputLabel>
                            <Input
                                id={'code'}
                                type={'text'}
                                className={'h-10 w-full rounded-lg uppercase'}
                                required
                                maxLength={5}
                                minLength={5}
                                onChange={handleChange}
                            ></Input>
                            {errors.code && <div>{errors.code}</div>}
                        </div>
                        <div className={'flex flex-col gap-y-3'}>
                            <InputLabel>Category</InputLabel>
                            <Select
                                className="h-10 w-full rounded-lg"
                                id="category"
                                defaultValue={''} // Use state to control the value
                                onChange={handleChange} // Update state on change
                                required
                            >
                                <option value="" disabled>
                                    Select Category
                                </option>
                                {categories.map((item, index) => (
                                    <option value={item.id} key={index}>
                                        {item.name}
                                    </option>
                                ))}
                            </Select>

                            {errors.category && <div>{errors.category}</div>}
                        </div>
                        <div className={'flex w-full justify-between'}>
                            <Link
                                href={route('dashboard.classroom.index')}
                                className={'text-primary'}
                            >
                                Back
                            </Link>
                            <Button
                                type={'submit'}
                                className={
                                    'w-auto rounded-lg bg-primary px-3 py-1 text-lg text-white'
                                }
                            >
                                Save
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Create;

import InputLabel from '@/Components/InputLabel.jsx';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Button, Input } from '@headlessui/react';
import { Link, router, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function Edit({ category }) {
    const { errors } = usePage().props;
    const [values, setValues] = useState({
        name: category.name,
    });

    const handleChange = (e) => {
        setValues((values) => ({
            ...values,
            [e.target.id]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        router.put(route('dashboard.category.update', category.id), values);
    };
    return (
        <AuthenticatedLayout>
            <div className={'container mx-auto'}>
                <div className={'mt-10 rounded-lg bg-white p-10 text-accent'}>
                    <form
                        onSubmit={handleSubmit}
                        className={'flex flex-col gap-y-4'}
                    >
                        <h1 className={'text-lg font-bold'}>
                            Category Create Form
                        </h1>
                        <hr />
                        <div className={'flex flex-col gap-y-3'}>
                            <InputLabel>Category Name</InputLabel>
                            <Input
                                id={'name'}
                                type={'text'}
                                value={values.name}
                                className={'h-10 w-full rounded-lg'}
                                onChange={handleChange}
                                required
                            ></Input>
                            {errors.name && <div>{errors.name}</div>}
                        </div>
                        <div className={'flex w-full justify-between'}>
                            <Link
                                href={route('dashboard.category.index')}
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

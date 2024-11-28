import InputLabel from '@/Components/InputLabel.jsx';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Button, Input } from '@headlessui/react';
import { Link, router, usePage } from '@inertiajs/react';
import { useState } from 'react';

function Create() {
    const { errors } = usePage().props;

    const [values, setValues] = useState({
        name: null,
    });

    function handleChange(e) {
        setValues((values) => ({
            ...values,
            [e.target.id]: e.target.value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        router.post('/dashboard/category', values);
    }

    return (
        <AuthenticatedLayout isAdmin={true}>
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
                                className={'h-10 w-full rounded-lg'}
                                required
                                onChange={handleChange}
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

export default Create;

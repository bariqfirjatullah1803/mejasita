import InputLabel from '@/Components/InputLabel.jsx';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Button, Input, Textarea } from '@headlessui/react';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { useState } from 'react';

function Edit({ classroom }) {
    const { errors } = usePage().props;

    const [values, setValues] = useState({
        name: classroom.name,
        description: classroom.description,
    });

    function handleChange(e) {
        setValues((values) => ({
            ...values,
            [e.target.id]: e.target.value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        router.put(route('dashboard.classroom.update', classroom.id), values);
    }

    return (
        <AuthenticatedLayout isAdmin={true}>
            <Head title="Edit Classroom" />
            <div className={'container mx-auto'}>
                <div className={'mt-10 rounded-lg bg-white p-10 text-accent'}>
                    <form
                        onSubmit={handleSubmit}
                        className={'flex flex-col gap-y-4'}
                    >
                        <h1 className={'text-lg font-bold'}>
                            Classroom Edit Form
                        </h1>
                        <hr />
                        <div className={'flex flex-col gap-y-3'}>
                            <InputLabel>Name</InputLabel>
                            <Input
                                id={'name'}
                                type={'text'}
                                value={classroom.name}
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
                                defaultValue={classroom.description}
                            ></Textarea>
                            {errors.description && (
                                <div>{errors.description}</div>
                            )}
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

export default Edit;

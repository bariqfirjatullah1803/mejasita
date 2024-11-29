import InputLabel from '@/Components/InputLabel.jsx';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Button, Input } from '@headlessui/react';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { useState } from 'react';

function Edit({ classroom, code }) {
    const { errors } = usePage().props;

    const [values, setValues] = useState({
        name: classroom.name,
        description: classroom.description,
        code: classroom.code,
    });

    function handleChange(e) {
        setValues((values) => ({
            ...values,
            [e.target.id]: e.target.value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        router.put(
            route('dashboard.code.update', {
                classroom: classroom.id,
                code: code.id,
            }),
            values,
        );
    }

    return (
        <AuthenticatedLayout isAdmin={true}>
            <Head title="Edit Code" />
            <div className={'container mx-auto'}>
                <div className={'mt-10 rounded-lg bg-white p-10 text-accent'}>
                    <form
                        onSubmit={handleSubmit}
                        className={'flex flex-col gap-y-4'}
                    >
                        <h1 className={'text-lg font-bold'}>
                            Edit Code of {classroom.name}
                        </h1>
                        <hr />
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
                                defaultValue={code.code}
                            ></Input>
                            {errors.code && <div>{errors.code}</div>}
                        </div>
                        <div className={'flex w-full justify-between'}>
                            <Link
                                href={route('dashboard.code.index', {
                                    classroom: classroom.id,
                                })}
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

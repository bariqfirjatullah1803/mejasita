import InputLabel from '@/Components/InputLabel.jsx';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Button, Input } from '@headlessui/react';
import { Link, router, usePage } from '@inertiajs/react';
import { useState } from 'react';

function Create({classroom}) {
    const { errors } = usePage().props;

    const [values, setValues] = useState({
        title: null,
    });

    function handleChange(e) {
        setValues((values) => ({
            ...values,
            [e.target.id]: e.target.value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        router.post(route('dashboard.chapter.store', classroom.id), values);
    }

    return (
        <AuthenticatedLayout>
            <div className={'container mx-auto'}>
                <div className={'mt-10 rounded-lg bg-white p-10 text-accent'}>
                    <form
                        onSubmit={handleSubmit}
                        className={'flex flex-col gap-y-4'}
                    >
                        <div className={'flex justify-between'}>
                            <Link href={route('dashboard.classroom.index')}
                                  className={'text-lg font-bold text-primary'}>{classroom.name}</Link>
                            <h2 className={'text-lg font-bold'}>Chapter Create Form</h2>
                        </div>
                        <hr />
                        <div className={'flex flex-col gap-y-3'}>
                            <InputLabel>Title</InputLabel>
                            <Input
                                id={'title'}
                                type={'text'}
                                className={'h-10 w-full rounded-lg'}
                                required
                                onChange={handleChange}
                            ></Input>
                            {errors.title && <div>{errors.title}</div>}
                        </div>
                        <div className={'flex w-full justify-between'}>
                            <Link
                                href={route('dashboard.chapter.index', classroom.id)}
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

import InputLabel from '@/Components/InputLabel.jsx';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Button, Input } from '@headlessui/react';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function Edit({ classroom, chapter }) {
    const { errors } = usePage().props;
    const [values, setValues] = useState({
        title: chapter.title,
    });

    const handleChange = (e) => {
        setValues((values) => ({
            ...values,
            [e.target.id]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        router.put(
            route('dashboard.chapter.update', {
                chapter: chapter.id,
                classroom: classroom.id,
            }),
            values,
        );
    };
    return (
        <AuthenticatedLayout isAdmin={true}>
            <Head title="Edit Chapter" />
            <div className={'container mx-auto'}>
                <div className={'mt-10 rounded-lg bg-white p-10 text-accent'}>
                    <form
                        onSubmit={handleSubmit}
                        className={'flex flex-col gap-y-4'}
                    >
                        <h1 className={'text-lg font-bold'}>
                            Chapter Update Form
                        </h1>
                        <hr />
                        <div className={'flex flex-col gap-y-3'}>
                            <InputLabel>Title</InputLabel>
                            <Input
                                id={'title'}
                                type={'text'}
                                value={values.title}
                                className={'h-10 w-full rounded-lg'}
                                onChange={handleChange}
                                required
                            ></Input>
                            {errors.title && <div>{errors.title}</div>}
                        </div>
                        <div className={'flex w-full justify-between'}>
                            <Link
                                href={route(
                                    'dashboard.chapter.index',
                                    classroom.id,
                                )}
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

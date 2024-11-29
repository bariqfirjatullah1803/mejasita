import InputLabel from '@/Components/InputLabel.jsx';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Button, Input } from '@headlessui/react';
import { Head, Link } from '@inertiajs/react';

function Create() {
    return (
        <AuthenticatedLayout isAdmin={true}>
            <Head title="Create Answer" />
            <div className={'container mx-auto'}>
                <div className={'mt-10 rounded-lg bg-white p-10 text-accent'}>
                    <form className={'flex flex-col gap-y-4'}>
                        <h1 className={'text-lg font-bold'}>
                            Category Create Form
                        </h1>
                        <hr />
                        <div className={'flex flex-col gap-y-3'}>
                            <InputLabel>Category Name</InputLabel>
                            <Input
                                type={'text'}
                                className={'h-10 w-full rounded-lg'}
                            ></Input>
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

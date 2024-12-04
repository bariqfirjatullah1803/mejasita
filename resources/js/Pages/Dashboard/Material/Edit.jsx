import InputLabel from '@/Components/InputLabel.jsx';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Button, Input } from '@headlessui/react';
import { Head, Link, useForm } from '@inertiajs/react';

function Edit({ chapter, material }) {
    const { setData, data, errors, post } = useForm({
        _method: 'put',
        title: material.title,
        media: material.media,
        content: '',
        type: 'media',
    });

    function handleSubmit(e) {
        e.preventDefault();
        console.log(data);
        post(
            route('dashboard.material.update', {
                chapter: chapter.id,
                material: material.id,
            }),
        );
    }

    return (
        <AuthenticatedLayout isAdmin={true}>
            <Head title="Edit Classroom" />
            <div className={'container mx-auto'}>
                <div className={'mt-10 rounded-lg bg-white p-10 text-accent'}>
                    <form
                        onSubmit={handleSubmit}
                        className={'flex flex-col gap-y-4'}
                        encType={'multipart/form-data'}
                    >
                        <h1 className={'text-lg font-bold'}>
                            Material Edit Form
                        </h1>
                        <hr />
                        <div className={'flex flex-col gap-y-3'}>
                            <InputLabel>Title</InputLabel>
                            <Input
                                id={'title'}
                                type={'text'}
                                defaultValue={material.title}
                                className={'h-10 w-full rounded-lg'}
                                onChange={(e) =>
                                    setData('title', e.target.value)
                                }
                            ></Input>
                            {errors.title && <div>{errors.title}</div>}
                        </div>
                        <div className={'flex flex-col gap-y-3'}>
                            <InputLabel>File Material</InputLabel>
                            <Input
                                id={'media'}
                                type={'file'}
                                className={
                                    'h-10 w-full rounded-lg border border-black px-3 py-1 text-sm'
                                }
                                onChange={(e) =>
                                    setData('media', e.target.files[0])
                                }
                            ></Input>
                            <a
                                href={`/storage/${material.media}`}
                                className={'text-blue-600'}
                                target={'_blank'}
                                rel="noreferrer"
                            >
                                Open File
                            </a>
                            {errors.media && <div>{errors.media}</div>}
                        </div>
                        <div className={'flex w-full justify-between'}>
                            <Link
                                href={route(
                                    'dashboard.chapter.index',
                                    chapter.id,
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

export default Edit;

import EditorCustom from '@/Components/EditorCustom.jsx';
import InputLabel from '@/Components/InputLabel.jsx';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Button, Input, Select } from '@headlessui/react';
import { Link, useForm } from '@inertiajs/react';
import { useRef, useState } from 'react';

function Create({ chapter }) {
    const editorRef = useRef(null);

    const [materialType, setMaterialType] = useState('text');

    const { setData, errors, post } = useForm({
        title: '',
        media: '',
        content: '',
        type: materialType,
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route('dashboard.material.store', chapter.id));
    }

    const changeType = (e) => {
        const value = e.target.value;
        if (value === 'media') {
            setData('content', null);
        }
        setData('type', value);
        setMaterialType(value);
    };

    return (
        <AuthenticatedLayout isAdmin={true}>
            <div className={'container mx-auto'}>
                <div className={'mt-10 rounded-lg bg-white p-10 text-accent'}>
                    <form
                        onSubmit={handleSubmit}
                        className={'flex flex-col gap-y-4'}
                        encType={'multipart/form-data'}
                    >
                        <div className={'flex justify-between'}>
                            <Link
                                href={route('dashboard.classroom.index')}
                                className={'text-lg font-bold text-primary'}
                            >
                                {chapter.title}
                            </Link>
                            <h2 className={'text-lg font-bold'}>
                                Material Create Form
                            </h2>
                        </div>
                        <hr />
                        <div className={'flex flex-col gap-y-3'}>
                            <InputLabel>Title</InputLabel>
                            <Input
                                id={'title'}
                                type={'text'}
                                className={'h-10 w-full rounded-lg'}
                                required
                                onChange={(e) =>
                                    setData('title', e.target.value)
                                }
                            ></Input>
                            {errors.title && <div>{errors.title}</div>}
                        </div>
                        <div className={'flex flex-col gap-y-3'}>
                            <InputLabel>Type</InputLabel>
                            <Select
                                id={'type'}
                                className={'h-10 w-full rounded-lg'}
                                required
                                onChange={changeType}
                            >
                                <option value={'text'}>Text</option>
                                <option value={'media'}>Media</option>
                                <option value={'quiz'}>Quiz</option>
                            </Select>
                        </div>
                        {materialType === 'text' && (
                            <EditorCustom
                                setData={setData}
                                editorRef={editorRef}
                            />
                        )}
                        {materialType === 'media' && (
                            <div className={'flex flex-col gap-y-3'}>
                                <InputLabel>File</InputLabel>
                                <Input
                                    id={'media'}
                                    type={'file'}
                                    className={
                                        'h-10 w-full rounded-lg border border-black px-3 py-1 text-sm'
                                    }
                                    required
                                    onChange={(e) =>
                                        setData('media', e.target.files[0])
                                    }
                                ></Input>
                                {errors.media && <div>{errors.media}</div>}
                            </div>
                        )}
                        {materialType === 'quiz' && <div>Quiz</div>}
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

export default Create;

import InputLabel from '@/Components/InputLabel.jsx';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Button, Input, Select } from '@headlessui/react';
import { Link, useForm } from '@inertiajs/react';
import { Editor } from '@tinymce/tinymce-react/lib/es2015/main/ts/index.js';
import { useRef, useState } from 'react';

function Create({ chapter }) {
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };

    const [materialType, setMaterialType] = useState('text');

    const { data, setData, errors, post, progress } = useForm({
        title: '',
        media: null,
    });

    function handleSubmit(e) {
        e.preventDefault();

        post(route('dashboard.material.store', chapter.id));
    }

    return (
        <AuthenticatedLayout>
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
                                onChange={(e) =>
                                    setMaterialType(e.target.value)
                                }
                            >
                                <option value={'text'}>Text</option>
                                <option value={'media'}>Media</option>
                                <option value={'quiz'}>Quiz</option>
                            </Select>
                        </div>
                        {materialType === 'text' && (
                            <>
                                <Editor
                                    apiKey="8ruryyv1pw5lv0nudelhfsql8uqcb4ale6qf34711vk5r3iw"
                                    onInit={(_evt, editor) =>
                                        (editorRef.current = editor)
                                    }
                                    initialValue="<p>This is the initial content of the editor.</p>"
                                    init={{
                                        height: 500,
                                        menubar: false,
                                        plugins: [
                                            'advlist',
                                            'autolink',
                                            'lists',
                                            'link',
                                            'image',
                                            'charmap',
                                            'preview',
                                            'anchor',
                                            'searchreplace',
                                            'visualblocks',
                                            'code',
                                            'fullscreen',
                                            'insertdatetime',
                                            'media',
                                            'table',
                                            'code',
                                            'help',
                                            'wordcount',
                                        ],
                                        toolbar:
                                            'uundo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
                                        content_style:
                                            "@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap'); * { font-family: 'Plus Jakarta Sans', sans-serif; font-optical-sizing: auto; }",
                                        automatic_uploads: true,
                                        file_picker_types: 'image',
                                        file_picker_callback: (
                                            cb,
                                            value,
                                            meta,
                                        ) => {
                                            const input =
                                                document.createElement('input');
                                            input.setAttribute('type', 'file');
                                            input.setAttribute(
                                                'accept',
                                                'image/*',
                                            );

                                            input.addEventListener(
                                                'change',
                                                (e) => {
                                                    const file =
                                                        e.target.files[0];

                                                    const reader =
                                                        new FileReader();
                                                    reader.addEventListener(
                                                        'load',
                                                        () => {
                                                            /*
                                                  Note: Now we need to register the blob in TinyMCEs image blob
                                                  registry. In the next release this part hopefully won't be
                                                  necessary, as we are looking to handle it internally.
                                                */
                                                            const id =
                                                                'blobid' +
                                                                new Date().getTime();
                                                            const blobCache =
                                                                tinymce
                                                                    .activeEditor
                                                                    .editorUpload
                                                                    .blobCache;
                                                            const base64 =
                                                                reader.result.split(
                                                                    ',',
                                                                )[1];
                                                            const blobInfo =
                                                                blobCache.create(
                                                                    id,
                                                                    file,
                                                                    base64,
                                                                );
                                                            blobCache.add(
                                                                blobInfo,
                                                            );

                                                            /* call the callback and populate the Title field with the file name */
                                                            cb(
                                                                blobInfo.blobUri(),
                                                                {
                                                                    title: file.name,
                                                                },
                                                            );
                                                        },
                                                    );
                                                    reader.readAsDataURL(file);
                                                },
                                            );

                                            input.click();
                                        },
                                    }}
                                />
                                <button onClick={log}>
                                    Log editor content
                                </button>
                            </>
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

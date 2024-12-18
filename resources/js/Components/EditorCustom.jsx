import { Editor } from '@tinymce/tinymce-react/lib/es2015/main/ts/index.js';

function EditorCustom({ setData, editorRef }) {
    return (
        <Editor
            apiKey="8ruryyv1pw5lv0nudelhfsql8uqcb4ale6qf34711vk5r3iw"
            onInit={(_evt, editor) => (editorRef.current = editor)}
            onBlur={(e) => {
                setData('content', e.target.getContent());
            }}
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
                file_picker_callback: (cb, value, meta) => {
                    const input = document.createElement('input');
                    input.setAttribute('type', 'file');
                    input.setAttribute('accept', 'image/*');

                    input.addEventListener('change', (e) => {
                        const file = e.target.files[0];

                        const reader = new FileReader();
                        reader.addEventListener('load', () => {
                            /*
                      Note: Now we need to register the blob in TinyMCEs image blob
                      registry. In the next release this part hopefully won't be
                      necessary, as we are looking to handle it internally.
                    */
                            const id = 'blobid' + new Date().getTime();
                            const blobCache =
                                tinymce.activeEditor.editorUpload.blobCache;
                            const base64 = reader.result.split(',')[1];
                            const blobInfo = blobCache.create(id, file, base64);
                            blobCache.add(blobInfo);

                            /* call the callback and populate the Title field with the file name */
                            cb(blobInfo.blobUri(), {
                                title: file.name,
                            });
                        });
                        reader.readAsDataURL(file);
                    });

                    input.click();
                },
            }}
        />
    );
}

export default EditorCustom;

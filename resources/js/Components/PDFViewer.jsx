import { useEffect, useState } from 'react';
import { MdFullscreen } from 'react-icons/md';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PDFViewer = ({ url }) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [showNav, setShowNav] = useState(false);
    const [mouseTimer, setMouseTimer] = useState(100);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const goToPrevPage = () =>
        setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

    const goToNextPage = () =>
        setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1);

    const handleMouseMove = () => {
        setShowNav(true);

        // Clear any existing timer
        if (mouseTimer) clearTimeout(mouseTimer);

        // Set a new timer to hide the nav after 3 seconds of inactivity
        const timer = setTimeout(() => {
            setShowNav(false);
        }, 1000);

        setMouseTimer(timer);
    };

    // Cleanup timer on component unmount
    useEffect(() => {
        return () => {
            if (mouseTimer) clearTimeout(mouseTimer);
        };
    }, [mouseTimer]);

    return (
        <div
            className="relative mx-auto flex flex-col items-center justify-center"
            onMouseMove={handleMouseMove}
        >
            <Document
                className={'relative'}
                file={url}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={() => (
                    <div
                        className={'flex h-[80vh] items-center justify-center'}
                    >
                        <p>Harap tunggu...</p>
                    </div>
                )}
            >
                <Page pageNumber={pageNumber} />
                {showNav && (
                    <div className={'absolute right-5 top-5 z-[99]'}>
                        <a href={url} target={'_blank'} rel="noreferrer">
                            <MdFullscreen
                                className={
                                    'rounded-lg bg-white text-3xl drop-shadow-lg'
                                }
                            />
                        </a>
                    </div>
                )}
            </Document>
            {showNav && (
                <nav className="absolute bottom-0 z-50 flex items-center justify-between">
                    <button
                        onClick={goToPrevPage}
                        className="mx-2 cursor-pointer rounded-md bg-gray-100 px-4 py-2 text-black"
                    >
                        Prev
                    </button>
                    <p className="rounded-md bg-gray-100 px-4 py-2 text-lg">
                        Page {pageNumber} of {numPages}
                    </p>
                    <button
                        onClick={goToNextPage}
                        className="mx-2 cursor-pointer rounded-md bg-blue-500 px-4 py-2 text-white"
                    >
                        Next
                    </button>
                </nav>
            )}
        </div>
    );
};

export default PDFViewer;

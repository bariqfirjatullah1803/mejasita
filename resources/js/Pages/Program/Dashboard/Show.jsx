import PDFViewer from '@/Components/PDFViewer.jsx';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import {
    IoIosArrowBack,
    IoIosArrowForward,
    IoIosArrowRoundBack,
} from 'react-icons/io';
import ReactPlayer from 'react-player/youtube';

export default function Show({ classroom, material }) {
    const [openIndex, setOpenIndex] = useState(material.id);

    const material_id_before = classroom.chapters[0].materials[0].id;
    const material_id_after =
        classroom.chapters[classroom.chapters.length - 1].materials[
            classroom.chapters[classroom.chapters.length - 1].materials.length -
                1
        ].id;
    const toggleAccordion = (index) => {
        if (openIndex === index) {
            setOpenIndex(null); // Close if it's already open
        } else {
            setOpenIndex(index); // Open the clicked item
        }
    };

    return (
        <div className="flex h-screen flex-col bg-secondary text-accent">
            <Head title={classroom.name} />
            <nav className="h-16 w-full border-b border-b-accent bg-white py-6">
                <div className="mx-auto flex h-full flex-row items-center justify-between px-10">
                    <Link
                        href="/"
                        className="flex flex-row items-center gap-x-2 text-accent"
                    >
                        <IoIosArrowRoundBack className="text-2xl" />
                        <h1 className="text-lg font-semibold">
                            {classroom.name}
                        </h1>
                    </Link>
                </div>
            </nav>

            {/* Parent of a, b, c should be full height */}
            <div className="flex flex-1 flex-row bg-white">
                <div className="flex flex-1 flex-col">
                    <div className="flex-1">
                        {material.type === 'media' && (
                            <PDFViewer url={`/storage/${material.media}`} />
                        )}
                        {material.type === 'video' && (
                            <ReactPlayer
                                key={1}
                                controls={true}
                                url="https://youtu.be/q8J2niv2hlY?si=BfLaDP98k3o2nm0X"
                                width="100%"
                                height="100%"
                            />
                        )}
                    </div>
                    <div className="flex-0">
                        <div
                            className={
                                'flex w-full flex-row justify-between border-t border-t-accent px-10 py-4'
                            }
                        >
                            <div
                                className={'flex flex-row items-center gap-x-2'}
                            >
                                {material.id !== material_id_before && (
                                    <>
                                        <IoIosArrowBack />
                                        <Link
                                            href={route('program.show', {
                                                slug: classroom.slug,
                                                material_id: material_id_before,
                                            })}
                                        >
                                            Kembali
                                        </Link>
                                    </>
                                )}
                            </div>
                            <div
                                className={'flex flex-row items-center gap-x-2'}
                            >
                                {material.id !== material_id_after && (
                                    <>
                                        <Link
                                            href={route('program.show', {
                                                slug: classroom.slug,
                                                material_id: material_id_after,
                                            })}
                                        >
                                            Selanjutnya
                                        </Link>
                                        <IoIosArrowForward />
                                    </>
                                )}
                                {material.id === material_id_after && (
                                    <>
                                        <Link
                                            href={route('program.index', {
                                                slug: classroom.slug,
                                                material_id: material_id_after,
                                            })}
                                        >
                                            Selesai
                                        </Link>
                                        <IoIosArrowForward />
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-0 flex w-1/4 flex-col gap-y-3 border-s border-s-accent px-5 py-6">
                    <h1 className={'text-2xl font-bold'}>Daftar Materi</h1>
                    <hr />
                    <p>Progress</p>
                    <hr />
                    {classroom.chapters.map((item, index) => (
                        <AccordionItem
                            key={index}
                            title={item.title}
                            links={item.materials.map((item) => {
                                return {
                                    href: route('program.show', {
                                        slug: classroom.slug,
                                        material_id: item.id,
                                    }),
                                    label: item.title,
                                };
                            })}
                            index={material.id}
                            openIndex={openIndex}
                            toggleAccordion={toggleAccordion}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

function AccordionItem({ title, links, index, openIndex, toggleAccordion }) {
    const isOpen = openIndex === index;

    return (
        <div className="">
            <button
                className="flex w-full items-center justify-between text-left transition"
                onClick={() => toggleAccordion(index)}
            >
                <span className={'text-lg font-semibold'}>{title}</span>
                <span>{isOpen ? '-' : '+'}</span>
            </button>
            <div
                className={`overflow-hidden transition-all ${
                    isOpen ? 'max-h-40' : 'max-h-0'
                }`}
            >
                <div className="px-3 py-2">
                    <div className={'border-s border-gray-300 px-4'}>
                        {links.map((link, i) => (
                            <Link
                                key={i}
                                href={link.href}
                                className="mb-2 block"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

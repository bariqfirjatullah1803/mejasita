import InputLabel from '@/Components/InputLabel.jsx';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Button, Input } from '@headlessui/react';
import { Head, Link, router } from '@inertiajs/react';

export default function Index({ classroom, chapters }) {
    const handleDelete = (id, e) => {
        e.preventDefault();
        const isConfirmed = window.confirm(
            'Are you sure you want to delete this item?',
        );

        if (isConfirmed) {
            router.delete(
                route('dashboard.chapter.destroy', {
                    chapter: id,
                    classroom: classroom.id,
                }),
            );
        }
    };
    return (
        <AuthenticatedLayout isAdmin={true}>
            <Head title="List Chapter" />
            <div className={'container mx-auto text-accent'}>
                <div className={'mt-10 rounded-lg bg-white p-4 text-start'}>
                    <div className={'mb-3 flex flex-col gap-y-3'}>
                        <div className={'flex justify-between'}>
                            <Link
                                href={route('dashboard.classroom.index')}
                                className={'text-lg font-bold text-primary'}
                            >
                                {classroom.name}
                            </Link>
                            <h2 className={'text-lg font-bold'}>
                                List Chapters
                            </h2>
                        </div>
                        <hr />
                    </div>
                    <div
                        className={
                            'mb-3 flex w-full flex-col items-center justify-between gap-x-3 gap-y-3 lg:flex-row'
                        }
                    >
                        <form
                            className={
                                'flex w-full flex-col items-start gap-x-3 lg:w-auto lg:flex-row lg:items-center'
                            }
                        >
                            <InputLabel>Cari</InputLabel>
                            <Input
                                type={'text'}
                                className={'h-8 w-full rounded-lg text-xs'}
                            ></Input>
                        </form>
                        <div className={'flex gap-x-3'}>
                            <Link
                                href={route(
                                    'dashboard.chapter.create',
                                    classroom.id,
                                )}
                                className={
                                    'w-full rounded-lg bg-primary px-3 py-1 text-white lg:w-auto'
                                }
                            >
                                Change Order
                            </Link>
                            <Link
                                href={route(
                                    'dashboard.chapter.create',
                                    classroom.id,
                                )}
                                className={
                                    'w-full rounded-lg bg-primary px-3 py-1 text-white lg:w-auto'
                                }
                            >
                                Create New
                            </Link>
                        </div>
                    </div>
                    <div className="relative flex h-full w-full flex-col overflow-auto rounded-lg bg-white bg-clip-border text-gray-700">
                        <table className="w-full min-w-max table-auto text-left">
                            <thead>
                                <tr>
                                    <th className="border-b border-slate-300 bg-primary p-4">
                                        <p className="block text-sm font-normal leading-none text-white">
                                            Name
                                        </p>
                                    </th>
                                    <th className="border-b border-slate-300 bg-primary p-4">
                                        <p className="block text-sm font-normal leading-none text-white">
                                            Action
                                        </p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {chapters.map((item, index) => (
                                    <tr
                                        key={index}
                                        className="hover:bg-slate-50"
                                    >
                                        <td className="border-b border-slate-200 p-4">
                                            <Link
                                                href={route(
                                                    'dashboard.material.index',
                                                    item.id,
                                                )}
                                                className="block text-sm text-primary"
                                            >
                                                {item.title}
                                            </Link>
                                        </td>
                                        <td className="flex flex-row items-center gap-x-3 border-b border-slate-200 p-4">
                                            <a
                                                href={route(
                                                    'dashboard.chapter.edit',
                                                    {
                                                        chapter: item.id,
                                                        classroom: classroom.id,
                                                    },
                                                )}
                                                className="block text-sm font-semibold text-slate-800"
                                            >
                                                Edit
                                            </a>
                                            |
                                            <Button
                                                onClick={(e) =>
                                                    handleDelete(item.id, e)
                                                }
                                                className="block text-sm font-semibold text-slate-800"
                                            >
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

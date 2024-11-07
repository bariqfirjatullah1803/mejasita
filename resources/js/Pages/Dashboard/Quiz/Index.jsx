import InputLabel from '@/Components/InputLabel.jsx';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Input, Select } from '@headlessui/react';
import { Link } from '@inertiajs/react';

export default function Index({ categories }) {
    return (
        <AuthenticatedLayout>
            <div className={'container mx-auto text-accent'}>
                <div className={'mt-10 rounded-lg bg-white p-4 text-start'}>
                    <div
                        className={
                            'mb-3 flex flex-col items-center justify-between gap-x-3 gap-y-3 lg:flex-row'
                        }
                    >
                        <div className={'w-full'}>
                            <form
                                className={
                                    'flex w-full flex-col items-start gap-x-3 lg:flex-row lg:items-center'
                                }
                            >
                                <InputLabel>Cari</InputLabel>
                                <Input
                                    type={'text'}
                                    className={
                                        'h-8 w-full rounded-lg text-xs lg:w-1/2'
                                    }
                                ></Input>
                            </form>
                        </div>
                        <div
                            className={
                                'flex w-full flex-col items-start gap-x-3 gap-y-2 lg:flex-row lg:justify-end'
                            }
                        >
                            <Select
                                className={
                                    'h-8 w-full rounded-lg text-xs lg:w-auto'
                                }
                            >
                                <option>10</option>
                                <option>50</option>
                                <option>100</option>
                            </Select>
                            <Link
                                href={route('dashboard.category.index')}
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
                                {categories.data.map((item, index) => (
                                    <tr
                                        key={index}
                                        className="hover:bg-slate-50"
                                    >
                                        <td className="border-b border-slate-200 p-4">
                                            <p className="block text-sm text-slate-800">
                                                {item.name}
                                            </p>
                                        </td>
                                        <td className="flex flex-row gap-x-3 border-b border-slate-200 p-4">
                                            <a
                                                href="#"
                                                className="block text-sm font-semibold text-slate-800"
                                            >
                                                Edit
                                            </a>
                                            |
                                            <a
                                                href="#"
                                                className="block text-sm font-semibold text-slate-800"
                                            >
                                                Delete
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div
                        className={
                            'mt-3 flex flex-col items-center justify-between gap-y-3 lg:flex-row'
                        }
                    >
                        <div>
                            Showing {categories.from} to {categories.to} total{' '}
                            {categories.per_page}
                        </div>
                        <div
                            className={
                                'flex flex-wrap items-center justify-center gap-2'
                            }
                        >
                            {categories.links.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.url}
                                    className={`rounded border p-2 text-sm ${
                                        link.active
                                            ? 'border-primary bg-white text-accent hover:bg-primary hover:text-white'
                                            : 'bg-primary text-white hover:border-primary hover:bg-white hover:text-accent'
                                    }`}
                                >
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: link.label,
                                        }}
                                    ></div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

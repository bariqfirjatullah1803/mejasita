import HeroSection from '@/Pages/Program/Dashboard/Component/HeroSection.jsx';
import { FaBook, FaHistory, FaSearch } from 'react-icons/fa';

export default function Index({ classrooms }) {
    return (
        <div className={'min-h-screen bg-secondary text-accent'}>
            <nav className={'w-100 h-10 bg-white py-6'}>
                <div
                    className={
                        'container mx-auto flex h-full flex-row items-center justify-between'
                    }
                >
                    <a href={'#'} className={'text-white'}>
                        <img
                            src={'/images/logo.png'}
                            alt={'logo'}
                            className={'h-10'}
                        />
                    </a>
                    <a href={'#'} className={'text-white'}>
                        <img
                            src={'/images/ic-user.png'}
                            alt={'logo'}
                            className={'h-10'}
                        />
                    </a>
                </div>
            </nav>
            <HeroSection></HeroSection>
            <section
                className={
                    'container mx-auto mt-10 grid w-full grid-cols-3 gap-x-5'
                }
            >
                <div
                    className={
                        'col-span-2 flex flex-col gap-y-5 rounded-md bg-white px-8 py-5'
                    }
                >
                    <div className={'flex flex-row items-center gap-x-3'}>
                        <FaBook className={'text-3xl text-accent'} />
                        <span className={'text-md font-medium'}>
                            Kelas Kamu
                        </span>
                    </div>
                    <hr />
                    <div className={'flex flex-col gap-y-3'}>
                        {classrooms.map((item, index) => (
                            <div
                                key={index}
                                className={
                                    'flex flex-row items-center justify-between rounded-lg bg-secondary px-4 py-3'
                                }
                            >
                                <div className={'flex flex-col'}>
                                    <h2 className={'text-sm font-bold'}>
                                        Sedang dipelajari
                                    </h2>
                                    <h1 className={'text-lg font-normal'}>
                                        {item.name}
                                    </h1>
                                </div>
                                <a
                                    href={route('program.show', item.slug)}
                                    className={'text-sm text-primary'}
                                >
                                    Lanjutkan Belajar
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    className={
                        'sticky top-4 col-span-1 flex h-fit min-h-96 flex-col gap-y-5'
                    }
                >
                    <div
                        className={
                            'flex flex-col gap-y-5 rounded-md bg-white px-8 py-5'
                        }
                    >
                        <div className={'flex flex-row items-center gap-x-3'}>
                            <FaSearch className={'text-3xl text-accent'} />
                            <span className={'text-md font-medium'}>
                                Cari Kelas
                            </span>
                        </div>
                        <hr />
                        <input
                            type={'text'}
                            className={
                                'w-full rounded-lg border-0 bg-[#F3F3F3]'
                            }
                        />
                    </div>
                    <div
                        className={
                            'flex flex-col gap-y-5 rounded-md bg-white px-8 py-5'
                        }
                    >
                        <div className={'flex flex-row items-center gap-x-3'}>
                            <FaHistory className={'text-3xl text-accent'} />
                            <span className={'text-md font-medium'}>
                                Aktifitas Kamu
                            </span>
                        </div>
                        <hr />
                    </div>
                </div>
            </section>
        </div>
    );
}

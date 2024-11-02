export default function Index() {
    return (
        <div className={'text-accent bg-secondary min-h-screen'}>
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
            <section className={'bg-white py-10'}>
                <div className={'container mx-auto'}>
                    <div className={'grid grid-cols-5'}>
                        <div
                            className={
                                'col-span-3 flex flex-col justify-center gap-y-3'
                            }
                        >
                            <h1 className={'text-4xl font-semibold'}>
                                Siap Belajar? <br /> Masukan Kode Kelas Anda di
                                Bawah Ini!
                            </h1>
                            <form className={'flex flex-col gap-y-3 items-start'}>
                                <input
                                    type={'text'}
                                    className={
                                        'w-2/5 rounded-lg border-0 bg-[#F3F3F3]'
                                    }
                                />
                                <button className={'bg-primary px-12 py-1 rounded-lg text-white font-bold text-2xl'}>JOIN</button>
                            </form>
                        </div>
                        <div
                            className={
                                'col-span-2 flex items-center justify-end'
                            }
                        >
                            <img
                                src={'/images/hero-section.png'}
                                alt={'hero-section'}
                                className={'w-full'}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

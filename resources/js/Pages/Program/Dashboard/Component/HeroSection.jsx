import { router, usePage } from '@inertiajs/react';
import { useState } from 'react';

const HeroSection = () => {
    const { errors } = usePage().props;

    const [values, setValues] = useState({
        code: null,
    });

    function handleChange(e) {
        setValues((values) => ({
            ...values,
            [e.target.id]: e.target.value,
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        router.post(route('program.transaction.store'), values);
    };
    return (
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
                        <form
                            className={'flex flex-col items-start gap-y-3'}
                            onSubmit={handleSubmit}
                        >
                            <div className={'flex w-full flex-col'}>
                                <input
                                    id={'code'}
                                    type={'text'}
                                    onChange={handleChange}
                                    className={`w-2/5 rounded-lg border uppercase ${errors.code ? 'border-red-500' : 'border-transparent'} bg-[#F3F3F3]`}
                                />
                                {errors.code && (
                                    <small className={'text-red-500'}>
                                        {errors.code}
                                    </small>
                                )}
                            </div>
                            <button
                                type={'submit'}
                                className={
                                    'rounded-lg bg-primary px-12 py-1 text-2xl font-bold text-white'
                                }
                            >
                                JOIN
                            </button>
                        </form>
                    </div>
                    <div className={'col-span-2 flex items-center justify-end'}>
                        <img
                            src={'/images/hero-section.png'}
                            alt={'hero-section'}
                            className={'w-full'}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

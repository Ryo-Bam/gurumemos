import React, { useEffect } from 'react';
import Button from '@/src/Components/Button';
import Guest from '@/src/Layouts/Guest';
import Input from '@/src/Components/Input';
import Label from '@/src/Components/Label';
import ValidationErrors from '@/src/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Header from '@/src/Header/Header';
import { Footer } from '../../Footer';

const Register = ({history}) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <div className="main">
        <Header />
        <div className="login_container" >
        <div className="module-spacer-medium" />
        <div className="login_handline login_text_center">
        <h1 className="login_name">サインアップ</h1>
        <div className="module-spacer-medium" />
        </div>
            <Head title="Register" />

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <div>
                    <Label forInput="name" value="名前" />

                    <Input
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="email" value="メールアドレス" />

                    <Input
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="password" value="パスワード" />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="password_confirmation" value="パスワード（確認）" />

                    <Input
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link href={route('login')} className="underline text-sm text-gray-600 hover:text-gray-900">
                        アカウントをお持ちの方はこちら
                    </Link>

                    <Button className="ml-4" processing={processing}>
                        サインアップする
                    </Button>
                </div>
            </form>
        </div>
        <Footer />
        </div>
    );
}

export default Register;
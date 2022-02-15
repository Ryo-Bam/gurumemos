import React, { useEffect } from 'react';
import Button from '@/src/Components/Button';
import Checkbox from '@/src/Components/Checkbox';
import Guest from '@/src/Layouts/Guest';
import Input from '@/src/Components/Input';
import Label from '@/src/Components/Label';
import ValidationErrors from '@/src/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import { TextInput, PrimaryButton } from '@/src/Uikit/index';
import Header from '@/src/Header/Header';
import { Footer } from '../../Footer';


const Login = ({ status, canResetPassword }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <div className="main">
            <Header />
            <div className="login_container" >
            <div className="module-spacer-medium" />
            <div className="login_handline login_text_center">
            <h1 className="login_name">ログイン</h1>
            <div className="module-spacer-medium" />
            </div>
            <Head title="ログイン" />

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <div>
                    <Label forInput="email" value="メールアドレス" />

                    <Input
                        type="text"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
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
                        autoComplete="current-password"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox name="remember" value={data.remember} handleChange={onHandleChange} />

                        <span className="ml-2 text-sm text-gray-600">記憶する</span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link href={route('register')} className="underline text-sm text-gray-600 hover:text-gray-900">
                        新規登録はこちらから
                    </Link>

                    <Button className="ml-4" processing={processing}>
                        ログインする
                    </Button>
                </div>
                <div className="module-spacer-medium" />
            </form>
            </div>
            <Footer />
            </div>
    );
}


export default Login;
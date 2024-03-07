export default function Login() {
    return (
        <div className="w-full h-auto">
            <div className="w-full h-28 bg-white">
            </div>
            <section className="w-full bg-[#f4f4f4] h-auto flex items-center justify-center py-20">
                <div className="text-center">
                    <h1 className="text-[3.7rem] font-semibold">LOGIN & REGISTER</h1>
                    <span>Home / Login & Register</span>
                </div>
            </section>
            <section className="w-full bg-white">
                <div className="container px-36 max-sm:px-10 flex items-center justify-center py-20">
                    <div className="w-full flex flex-wrap gap-10 items-start justify-evenly">
                        <div className="flex w-[35rem] flex-col items-start justify-start gap-10">
                            <h4 className="font-semibold">Login</h4>
                            <form className="w-full text-sm flex flex-col items-start gap-8">
                                <div className="w-full flex flex-col items-start gap-2">
                                    <label htmlFor="email">Username & email address *</label>
                                    <input type="text" className="w-full border-[1px] border-gray-300 rounded-md p-2 outline-none" />
                                </div>
                                <div className="w-full flex flex-col items-start gap-2">
                                    <label htmlFor="email">Password *</label>
                                    <input type="password" className="w-full border-[1px] border-gray-300 rounded-md p-2 outline-none" />
                                </div>
                                <div className="w-full flex gap-10 items-center">
                                    <button className="font-semibold bg-black border transition-all border-black text-white rounded-full py-2 hover:bg-white hover:text-black px-12">Login</button>
                                    <span className="flex items-center gap-2"><input type="checkbox" /> Remember me</span>
                                </div>
                                <span className="cursor-pointer">Lost your password?</span>
                            </form>
                        </div>
                        <div className="flex w-[35rem] flex-col items-start justify-start gap-10">
                            <h4 className="font-semibold">Register</h4>
                            <form className="w-full text-sm flex flex-col items-start gap-8">
                                <div className="w-full flex flex-col items-start gap-2">
                                    <label htmlFor="email">Username & email address *</label>
                                    <input type="text" className="w-full border-[1px] border-gray-300 rounded-md p-2 outline-none" />
                                </div>
                                <div className="w-full flex flex-col items-start gap-2">
                                    <label htmlFor="email">Password *</label>
                                    <input type="password" className="w-full border-[1px] border-gray-300 rounded-md p-2 outline-none" />
                                </div>
                                <div className="w-full flex flex-col items-start gap-2">
                                    <label htmlFor="email">Re Password *</label>
                                    <input type="password" className="w-full border-[1px] border-gray-300 rounded-md p-2 outline-none" />
                                </div>
                                <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                                <div className="w-full flex gap-10 items-center">
                                    <button className="font-semibold bg-black border transition-all border-black text-white rounded-full py-2 hover:bg-white hover:text-black px-12">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

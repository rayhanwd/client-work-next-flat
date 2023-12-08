import LargeButton from "@/app/components/button/LargeButton";
import EmailIcon from "@/app/icons/EmailIcon";
import Facebook from "@/app/icons/Facebook";
import Google from "@/app/icons/Google";
import LinkedIn from "@/app/icons/LinkedIn";
import Image from "next/image";
import Link from "next/link";

const page = () => {
    return (
        <div className="bg-blue-50 h-full pt-[72px]">
            <div className="container grid grid-cols-1 md:grid-cols-2">
                <div className="bg-white w-[528px] h-[604px] rounded-3xl gap-8 inline-flex px-[72px] py-10 mx-[144px]">
                    <div>
                        <h1 className="text-zinc-900 text-[40px] font-bold font-outfit leading-[48px] text-center">Login</h1>
                        <div className="flex gap-2 justify-center my-8">
                            <div className="bg-gray-50 rounded">
                                <LinkedIn />
                            </div>
                            <div className="bg-gray-50 rounded">
                                <Facebook />
                            </div>
                            <div className="bg-gray-50 rounded">
                                <Google />
                            </div>
                        </div>
                        <p className="text-center">or</p>
                        <div>

                            <input type="email" className=" login-field"
                                placeholder={`email address`} />
                            <input type="password" className=" login-field my-4"
                                placeholder={`password`} />

                            <div className="flex justify-between">
                                <div className="flex">
                                    <input type="checkbox" checked/>
                                    <p className="text-zinc-900 ml-[9px] text-base font-normal font-outfit leading-normal">Remember Me</p>
                                </div>
                                <p className="text-blue-700 text-lg font-semibold font-outfit capitalize leading-7 tracking-tight cursor-pointer">Forget Password?</p>
                            </div>
                            <LargeButton label={"Login"}/>
                            <div className="flex mt-8 justify-center">
                                <p className="text-zinc-900 text-base font-normal font-outfit leading-normal">New Job Seeker?</p>
                                <Link href={'/signup'} className="text-blue-700 text-base font-semibold font-outfit capitalize leading-normal tracking-tight ml-3">Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Image
                        src='/back-to-login.png'
                        alt="login"
                        width={623.28}
                        height={655.61}

                    />
                </div>

            </div>
        </div>
    );
};

export default page;
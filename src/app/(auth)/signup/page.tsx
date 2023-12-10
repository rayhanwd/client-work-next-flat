import LargeButton from "@/app/components/button/LargeButton";
import Facebook from "@/app/icons/Facebook";
import Google from "@/app/icons/Google";
import LinkedIn from "@/app/icons/LinkedIn";
import Image from "next/image";
import Link from "next/link";

const page = () => {
    return (
        <div className=" bg-[#F5EBFF] h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 pt-[132px]">
                <div>
                    <Image
                        src="/join-our-service.png"
                        alt="signup"
                        width={640}
                        height={663}
                        className="mx-[144px]"
                    />
                </div>
                <div className="w-[528px] h-[528px] px-[72px] bg-white rounded-3xl flex-col justify-start items-center gap-8 inline-flex">
                    <div className="flex">
                        <div className="w-[263px] h-[45px] bg-white rounded-[20px] border border-blue-700  text-black text-xl font-medium font-inter text-center items-center flex justify-center">
                            Personal
                        </div>
                        <div className="w-[263px] h-[45px] bg-white rounded-[20px] border-b border-indigo-600 border-opacity-50 text-black text-xl font-medium font-inter text-center items-center flex justify-center">
                            Professional
                        </div>
                    </div>
                    <div>
                        <h1 className="text-zinc-900 text-[40px] font-bold font-outfit leading-[48px] text-center mt-[-30px]">Sign Up</h1>
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
                                 <div className="flex mt-4">
                                    <input type="checkbox" checked/>
                                    <p className="text-zinc-900 ml-[9px] text-base font-normal font-outfit leading-normal">I'm agree with <span className="text-blue-700 text-lg font-semibold font-outfit capitalize leading-7 tracking-tight cursor-pointer"> terms & conditions.</span></p>
                                </div>
                                <LargeButton label="Signup"/>
                                <div className="flex mt-8 justify-center">
                                <p className="text-zinc-900 text-base font-normal font-outfit leading-normal">Already have account?</p>
                                <Link href={'/login'} className="text-blue-700 text-base font-semibold font-outfit capitalize leading-normal tracking-tight ml-3">Login</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default page;
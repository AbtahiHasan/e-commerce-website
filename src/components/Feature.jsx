import { GrDeliver } from "react-icons/gr";
import { MdOutlineSecurity, MdSecurityUpdateGood } from "react-icons/md";
import { RiRefund2Fill } from "react-icons/ri";

const Feature = () => {
    return (
        <section className='grid md:grid-cols-3 gap-5 max-w-[1200px] mx-auto mt-[140px] py-5'>
            <div className='w-[95%] mx-auto p-7 border-2 rounded-2xl bg-slate-300 flex justify-center items-center flex-col min-w-[100px]'>
                <p className='bg-white w-10 h-10 rounded-full flex justify-center items-center'>
                    <GrDeliver  className='text-black'/>
                </p>
                    <h2 className='mt-3 text-xl font-bold'>Super Fast And Free Delivery</h2>
            </div>
            <div className='w-[100%] mx-auto p-7 rounded  flex justify-center items-center flex-col min-w-[100px] gap-5'>
                <div className='rounded-2xl py-8 flex justify-center items-center flex-col bg-slate-300 w-full'>
                    <p className='bg-white w-10 h-10 rounded-full flex justify-center items-center'>
                        <MdOutlineSecurity  className='text-black'/>
                       
                    </p>
                    <h2 className='mt-3 text-xl font-bold'>Non Contact Shiping</h2>
                </div>
                <div className='rounded-2xl py-8 flex justify-center items-center flex-col bg-slate-300 w-full'>
                    <p className='bg-white w-10 h-10 rounded-full flex justify-center items-center'>
                        <RiRefund2Fill className='text-black' />
                    </p>
                        <h2 className='mt-3 text-xl font-bold'>Money back Gurantee</h2>
                   
                </div>
                
            </div>
            <div className='w-[95%] mx-auto p-7 border-2 rounded-2xl bg-slate-300 flex justify-center items-center flex-col min-w-[100px]'>
                <span className='bg-white w-10 h-10  rounded-full flex justify-center items-center'>
                    <MdSecurityUpdateGood className='text-black' />
                </span>
                
                <h2 className='mt-3 text-xl font-bold'>Super Secure payment System</h2>
            </div>
        </section>
    );
};

export default Feature;
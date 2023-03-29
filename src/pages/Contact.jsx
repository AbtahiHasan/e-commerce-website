import React from 'react';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const Contact = () => {
    return (
        <section>
            <Nav/>
            <h2 className='mt-[80px] text-center py-5 text-2xl font-bold'>Contact Us</h2>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1425.6244387055658!2d90.34398517275476!3d22.690050043930576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37553407fbece487%3A0x5d069b9599d4414a!2sBarishal!5e0!3m2!1sen!2sbd!4v1679645729303!5m2!1sen!2sbd" width="100%" height="300" style={{border:0 }}allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='max-w-[1200px] mx-auto'>
                <form className='flex flex-col max-w-[500px] mx-auto gap-3 mt-3' action="https://formspree.io/f/mvonbvzk" method="POST">
                    <input type="text"  className='border-2 outline-0 p-3 rounded' name='username' autoComplete='off' placeholder='Your Name' required/>
                    <input type="email" className='border-2 outline-0 p-3 rounded' name="email" autoComplete='off' placeholder='Your Email'  required />
                    <textarea  className='border-2 outline-0 p-3 rounded' name="massage" cols="30" rows="10" autoComplete='off' placeholder='massage' required ></textarea>
                    <Button type="submit">Submit</Button>
                </form>
            </div>
            {/* <Footer/> */}
        </section>
    );
};

export default Contact;
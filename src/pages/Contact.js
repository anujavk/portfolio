import classes from './Contact.module.css';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();
        emailjs.sendForm('send_to_gmail', 'template', form.current, 'user_UIauFlaO1cBZAovZftI1o');
        e.target.reset();
    };

    return (
        <section id="contact" className={classes.main}>
            <div className={classes.title}>Get In Touch</div>
            <div className={classes.container}>
                <form ref={form} onSubmit={sendEmail} className={classes.left}>
                    <input type="text" name="from_name" placeholder="Name*" className={classes.name} required />
                    <input type="email" name="reply_to" placeholder="Email*" className={classes.email} required />
                    <textarea name="message" placeholder="Message*" className={classes.msg} required />
                    <input type="submit" value="Send" className={classes.btn} />
                </form>
                <div className={classes.right}>
                    Looking for opportunities! If you have any questions or just want to say hi, please feel free to contact me at <span>anujakhadatkar2803@gmail.com</span>
                </div>
            </div>
        </section>
    );
};

export default Contact;

import { useState, useEffect, useRef } from 'react';

function Contact(props) {
    const [name, setName ] = useState('');
    const [email, setEmail ] = useState('');
    const [validEmail, setValidEmail ] = useState(false);
    const [comments, setComments ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setName('');
        setEmail('');
        setComments('');
    };

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        const enteredEmail = e.target.value
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setEmail(enteredEmail);
        setValidEmail(emailRegex.test(enteredEmail));

        const checkEmail = () => {
            if (!setValidEmail) {
                alert('Please enter a valid email.')
            } else {
                return
            }
        }
        checkEmail()
    }

    const handleComments = (e) => {
        setComments(e.target.value);
    }

    // -----------------------

    const useOutsideClick = (ref, callback) => {
        const handleClick = e => {
            if (ref.current && !ref.current.contains(e.target)) {
                callback();
            }
        }

        useEffect(() => {
            document.addEventListener('click', handleClick);
    
            return () => {
                document.removeEventListener('click', handleClick)
            }
        })
    }


    const ref = useRef();

    useOutsideClick(ref, () => {
        if (!name) {
            alert('Please enter a name.')
        } else if(!email) {
            alert('Please enter an email.')
        } else if(!comments) {
            alert('Please enter a comment/comments.')
        } else {
            return
        }
    })

    const checkEmail = () => {
        if (!setValidEmail) {
            alert('Please enter a valid email.')
        } else {
            return
        }
    }

    const checkForm = () => {
        if (name && email && comments) {
            alert('Form successfully submited! Thanks for contacting me!')
        } else {
            alert('Please make sure to complete the form before you sumbit it!')
        }
    }

    return (
        <div className='content-div' >
            <h1 className='title'>Contact</h1>
            <div className='contact-div'>
                <form onSubmit={handleSubmit}>
                    <div className='input-div' ref={ref}>
                        <h2>Name:</h2>
                            <input
                                required
                                type='text'
                                value={name}
                                name='text'
                                onChange={handleName}
                                >
                            </input>
                    </div>
                    <div className='input-div' ref={ref}>
                        <h2>Email:</h2>
                            <input
                                required
                                type='text'
                                value={email}
                                name='text'
                                onChange={handleEmail}
                                >
                            </input>
                            {checkEmail}
                    </div>
                    <div className='input-div' ref={ref}>
                        <h2>Comments:</h2>
                            <textarea
                                required
                                id='comments'
                                type='text'
                                value={comments}
                                name='text'
                                onChange={handleComments}
                                >
                            </textarea>
                    </div>
                </form>
                <div className='submit-text'>
                    <p>
                        Welcome to the Contact page! If you have any questions about my work or would like to reach out to me, feel free to do so! I would love feedback!
                    </p>
                     <button
                        onClick={checkForm}
                        >
                    Submit
                </button>
                </div>
                {/* <button>
                    Submit
                </button> */}
            </div>
        </div>
    )
}

export default Contact